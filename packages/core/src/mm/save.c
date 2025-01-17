#include <combo.h>
#include <combo/net.h>

static void Sram_LoadOptions(void)
{
    u8 ootHeader[0x20];

    comboReadWriteFlash(0x00000, ootHeader, sizeof(ootHeader), OS_READ);
    gSaveContext.options.optionId = 0xa51d;
    gSaveContext.options.unk_02 = 1;
    gSaveContext.options.audio = ootHeader[0];
    gSaveContext.options.unk_04 = 0;
    gSaveContext.options.zTarget = ootHeader[1];
}

void Sram_AfterOpenSave(void)
{
    /* Patch MM options */
    Sram_LoadOptions();

    /* Read the foreign save */
    comboReadForeignSave();

    /* Handle common settings */
    comboOnSaveLoad();

    gSave.playerForm = MM_PLAYER_FORM_HUMAN;
    gSave.equippedMask = 0;
    gSave.entranceIndex = ENTR_MM_CLOCK_TOWN;

#if defined(DEBUG) && defined(DEBUG_MM_ENTRANCE)
    gSave.entranceIndex = DEBUG_MM_ENTRANCE;
#endif
}

void Sram_SaveEndOfCycleWrapper(GameState_Play* play)
{
    /* Re-enable time */
    gNoTimeFlow = 0;

    /* Store a dummy scene/entrance in OoT (prevents reloading into a temple - could lead to softlocks) */
    gOotSave.sceneId = SCE_OOT_TEMPLE_OF_TIME;
    gOotSave.entrance = ENTR_OOT_WARP_SONG_TEMPLE;

    comboSave(play, SF_NOCOMMIT);
    Sram_SaveEndOfCycle(play);

    /* Not an Owl save */
    gSave.isOwlSave = 0;

    /* Revive bosses */
    gMmExtraBoss.bossCycle = 0;

    /* Regain trade quest items */
    gMmExtraTrade.trade1 = gMmExtraTrade.tradeObtained1;
    gMmExtraTrade.trade2 = gMmExtraTrade.tradeObtained2;
    gMmExtraTrade.trade3 = gMmExtraTrade.tradeObtained3;

    if (gMmExtraTrade.trade1)
    {
        gSave.inventory.items[ITS_MM_TRADE1] = ITEM_MM_DEED_OCEAN;
        comboToggleSlot(ITS_MM_TRADE1);
    }

    if (gMmExtraTrade.trade2)
    {
        gSave.inventory.items[ITS_MM_TRADE2] = ITEM_MM_LETTER_TO_MAMA;
        comboToggleSlot(ITS_MM_TRADE2);
    }

    if (gMmExtraTrade.trade3)
    {
        gSave.inventory.items[ITS_MM_TRADE3] = ITEM_MM_PENDANT_OF_MEMORIES;
        comboToggleSlot(ITS_MM_TRADE3);
    }

    /* Empty bottles (except gold dust) */
    for (int i = 0; i < 6; ++i)
    {
        u8* slot;

        slot = &gSave.inventory.items[ITS_MM_BOTTLE + i];
        switch (*slot)
        {
        case ITEM_NONE:
        case ITEM_MM_GOLD_DUST:
            break;
        default:
            *slot = ITEM_MM_BOTTLE_EMPTY;
            break;
        }
    }

    /* Reload bottles */
    for (int i = 1; i <= 3; ++i)
    {
        int slot;

        slot = gSave.itemEquips.cButtonSlots[0][i];
        if (slot >= ITS_MM_BOTTLE && slot <= ITS_MM_BOTTLE6)
        {
            gSave.itemEquips.buttonItems[0][i] = gSave.inventory.items[slot];
            Interface_LoadItemIconImpl(play, i);
        }
    }

    /* Reset unk_14 and room flags, except for dungeons */
    for (int i = 7; i < ARRAY_SIZE(gSave.permanentSceneFlags); ++i)
    {
        switch (i)
        {
        case SCE_MM_TEMPLE_WOODFALL:
        case SCE_MM_TEMPLE_SNOWHEAD:
        case SCE_MM_TEMPLE_GREAT_BAY:
        case SCE_MM_TEMPLE_STONE_TOWER:
        case SCE_MM_TEMPLE_STONE_TOWER_INVERTED:
            break;
        default:
            gSave.permanentSceneFlags[i].clearedFloors = 0;
            gSave.permanentSceneFlags[i].rooms = 0;
            break;
        }
    }

    comboHandleAutoInvertClockSpeed();
}

PATCH_CALL(0x80146f94, Sram_SaveEndOfCycleWrapper);
PATCH_CALL(0x80158420, Sram_SaveEndOfCycleWrapper);

void PrepareSaveAndSave(SramContext* sram)
{
    PrepareSave(sram);
    comboWriteSave();
}

PATCH_CALL(0x80146fa0, PrepareSaveAndSave);
PATCH_CALL(0x80158438, PrepareSaveAndSave);
PATCH_CALL(0x80158554, PrepareSaveAndSave);
PATCH_CALL(0x80829218, PrepareSaveAndSave);
PATCH_CALL(0x80829f08, PrepareSaveAndSave);
PATCH_CALL(0x80146f10, PrepareSaveAndSave);

void comboSave(GameState_Play* play, int saveFlags)
{
    /* Wait for net */
    netWaitSave();

    /* Mark the save as owl */
    if (saveFlags & SF_OWL)
        gSave.isOwlSave = 1;

    /* Reset the OoT spawn point */
    gOotSave.sceneId = SCE_OOT_TEMPLE_OF_TIME;
    gOotSave.entrance = ENTR_OOT_WARP_SONG_TEMPLE;

    if (!(saveFlags & SF_NOCOMMIT))
    {
        PlayStoreFlags(play);
        PrepareSave(&play->sramCtx);
        comboWriteSave();
    }
}

static void MoonCrashReset(void)
{
    s32 cutscene;

    /* Read save */
    cutscene = gSave.cutscene;
    comboReadOwnSave();
    comboReadForeignSave();
    gSave.cutscene = cutscene;

    /* Reset flags */
    for (int i = 0; i < ARRAY_SIZE(gSaveContext.cycleSceneFlags); ++i)
    {
        gSaveContext.cycleSceneFlags[i].chest = gSave.permanentSceneFlags[i].chest;
        gSaveContext.cycleSceneFlags[i].collectible = gSave.permanentSceneFlags[i].collectible;
        gSaveContext.cycleSceneFlags[i].switch0 = gSave.permanentSceneFlags[i].switch0;
        gSaveContext.cycleSceneFlags[i].switch1 = gSave.permanentSceneFlags[i].switch1;
        gSaveContext.cycleSceneFlags[i].clearedRoom = gSave.permanentSceneFlags[i].clearedRoom;
    }

    /* Trigger save load */
    comboOnSaveLoad();
}

static void MoonCrashCycle(void)
{
    s32 cutscene;

    /* Start a new cycle */
    cutscene = gSave.cutscene;
    gSave.playerForm = MM_PLAYER_FORM_HUMAN;
    gSave.equippedMask = 0;
    gSave.day = 0;
    gSave.time = 0x3fff;
    comboSave(gPlay, SF_NOCOMMIT);
    Sram_SaveNewDay(gPlay);
    gSave.cutscene = cutscene;
}

void Sram_ResetSaveFromMoonCrash(void)
{
    if (comboConfig(CFG_MM_MOON_CRASH_CYCLE))
        MoonCrashCycle();
    else
        MoonCrashReset();
}

PATCH_FUNC(0x80144a94, Sram_ResetSaveFromMoonCrash);
