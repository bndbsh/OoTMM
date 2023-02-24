const ITEM_NAMES: {[k: string]: string} = {
  MM_ARROW_FIRE: "Fire Arrows (MM)",
  MM_ARROW_ICE: "Ice Arrows (MM)",
  MM_ARROW_LIGHT: "Light Arrows (MM)",
  MM_ARROWS_30: "30 Arrows (MM)",
  MM_BOMBCHU: "1 Bombchu (MM)",
  MM_BOMBCHU_10: "10 Bombchu (MM)",
  MM_BOMBCHU_5: "5 Bombchu (MM)",
  MM_BOMBER_NOTEBOOK: "Bomber's Notebook",
  MM_BOMB_BAG: "Bomb Bag (MM)",
  MM_BOSS_KEY_GB: "Boss Key (Great Bay Temple)",
  MM_BOSS_KEY_SH: "Boss Key (Snowhead Temple)",
  MM_BOSS_KEY_ST: "Boss Key (Stone Tower Temple)",
  MM_BOSS_KEY_WF: "Boss Key (Woodfall Temple)",
  MM_BOTTLED_CHATEAU_ROMANI: "Bottle - Chateau Romani (MM)",
  MM_BOTTLED_GOLD_DUST: "Bottle - Gold Dust (MM)",
  MM_BOTTLED_MILK: "Bottle - Milk (MM)",
  MM_BOTTLED_POTION_RED: "Bottle - Red Potion (MM)",
  MM_BOW: "Bow (MM)",
  MM_COMPASS_GB: "Compass (Great Bay Temple)",
  MM_COMPASS_SH: "Compass (Snowhead Temple)",
  MM_COMPASS_ST: "Compass (Stone Tower Temple)",
  MM_COMPASS_WF: "Compass (Woodfall Temple)",
  MM_DEED_LAND: "Land Title Deed",
  MM_DEED_MOUNTAIN: "Mountain Title Deed",
  MM_DEED_OCEAN: "Ocean Title Deed",
  MM_DEED_SWAMP: "Swamp Title Deed",
  MM_DEFENSE_UPGRADE: "Double Defense (MM)",
  MM_EMPTY_BOTTLE: "Bottle - Empty (MM)",
  MM_GREAT_FAIRY_SWORD: "Great Fairy Sword",
  MM_GS_TOKEN_OCEAN: "Ocean Spider Token",
  MM_GS_TOKEN_SWAMP: "Swamp Spider Token",
  MM_HEART_CONTAINER: "Heart Container (MM)",
  MM_HEART_PIECE: "Heart Piece (MM)",
  MM_HOOKSHOT: "Hookshot (MM)",
  MM_LENS: "Lens of Truth (MM)",
  MM_LETTER_TO_KAFEI: "Letter to Kafei",
  MM_LETTER_TO_MAMA: "Express Mail to Mama",
  MM_MAGIC_BEAN: "Magic Bean (MM)",
  MM_MAGIC_UPGRADE: "Magic Upgrade (MM)",
  MM_MAP_GB: "Map (Great Bay Temple)",
  MM_MAP_SH: "Map (Snowhead Temple)",
  MM_MAP_ST: "Map (Stone Tower Temple)",
  MM_MAP_WF: "Map (Woodfall Temple)",
  MM_MASK_ALL_NIGHT: "All Night's Mask",
  MM_MASK_BLAST: "Blast Mask",
  MM_MASK_BREMEN: "Bremen Mask",
  MM_MASK_BUNNY: "Bunny Hood (MM)",
  MM_MASK_CAPTAIN: "Captain's Hat",
  MM_MASK_COUPLE: "Couple's Mask",
  MM_MASK_DEKU: "Deku Mask",
  MM_MASK_DON_GERO: "Don Gero Mask",
  MM_MASK_FIERCE_DEITY: "Fierce Diety Mask",
  MM_MASK_GARO: "Garo Mask",
  MM_MASK_GIANT: "Giant's Mask",
  MM_MASK_GIBDO: "Gibdo Mask",
  MM_MASK_GORON: "Goron Mask (MM)",
  MM_MASK_GREAT_FAIRY: "Great Fairy Mask",
  MM_MASK_KAFEI: "Kafei's Mask",
  MM_MASK_KAMARO: "Kamaro Mask",
  MM_MASK_KEATON: "Keaton Mask",
  MM_MASK_POSTMAN: "Postman's Hat",
  MM_MASK_ROMANI: "Romani Mask",
  MM_MASK_SCENTS: "Mask of Scents",
  MM_MASK_STONE: "Stone Mask",
  MM_MASK_TROUPE_LEADER: "Circus Leader's Mask",
  MM_MASK_TRUTH: "Mask of Truth (MM)",
  MM_MASK_ZORA: "Zora Mask (MM)",
  MM_MOON_TEAR: "Moon Tear",
  MM_OCARINA: "Ocarina (MM)",
  MM_PENDANT_OF_MEMORIES: "Pendant of Memories",
  MM_PICTOGRAPH_BOX: "Pictograph Box",
  MM_POWDER_KEG: "Powder Keg",
  MM_REMAINS_GOHT: "Goht's Remains",
  MM_REMAINS_GYORG: "Gyorg's Remains",
  MM_REMAINS_ODOLWA: "Odolwa's Remains",
  MM_REMAINS_TWINMOLD: "Twinmold's Remains",
  MM_ROOM_KEY: "Room Key",
  MM_RUPEE_BLUE: "Blue Rupee (MM)",
  MM_RUPEE_GOLD: "Gold Rupee (MM)",
  MM_RUPEE_PURPLE: "Purple Rupee (MM)",
  MM_RUPEE_RED: "Red Rupee (MM)",
  MM_RUPEE_SILVER: "Silver Rupee (MM)",
  MM_SHIELD: "Progressive Shield (MM)",
  MM_SHIELD_MIRROR: "Mirror Shield (MM)",
  MM_SMALL_KEY_GB: "Small Key (Great Bay Temple)",
  MM_SMALL_KEY_SH: "Small Key (Snowhead Temple)",
  MM_SMALL_KEY_ST: "Small Key (Stone Tower Temple)",
  MM_SMALL_KEY_WF: "Small Key (Woodfall Temple)",
  MM_SONG_AWAKENING: "Sonata of Awakening",
  MM_SONG_EMPTINESS: "Elegy of Emptiness",
  MM_SONG_EPONA: "Epona's Song (MM)",
  MM_SONG_GORON: "Goron Lullaby",
  MM_SONG_GORON_HALF: "Progressive Goron Lullaby",
  MM_SONG_HEALING: "Song of Healing",
  MM_SONG_ORDER: "Oath to Order",
  MM_SONG_SOARING: "Song of Soaring",
  MM_SONG_STORMS: "Song of Storms (MM)",
  MM_SONG_TIME: "Song of Time (MM)",
  MM_SONG_ZORA: "New Wave Bossa Nova",
  MM_SPIN_UPGRADE: "Spin Attack",
  MM_STRAY_FAIRY_GB: "Stray Fairy (Great Bay Temple)",
  MM_STRAY_FAIRY_SH: "Stray Fairy (Snowhead Temple)",
  MM_STRAY_FAIRY_ST: "Stray Fairy (Stone Tower Temple)",
  MM_STRAY_FAIRY_TOWN: "Stray Fairy (Clocktown)",
  MM_STRAY_FAIRY_WF: "Stray Fairy (Woodfall Temple)",
  MM_SWORD: "Progressive Sword (MM)",
  MM_WALLET: "Progressive Wallet (MM)",
  OOT_ARROWS_10: "10 Arrows (OoT)",
  OOT_ARROWS_30: "30 Arrows (OoT)",
  OOT_ARROWS_5: "5 Arrows (OoT)",
  OOT_ARROW_FIRE: "Fire Arrows (OoT)",
  OOT_ARROW_ICE: "Ice Arrows (OoT)",
  OOT_ARROW_LIGHT: "Light Arrows (OoT)",
  OOT_BOMBCHU_10: "10 Bombchu (OoT)",
  OOT_BOMBCHU_20: "20 Bombchu (OoT)",
  OOT_BOMBCHU_5: "5 Bombchu (OoT)",
  OOT_BOMB_BAG: "Bomb Bag (OoT)",
  OOT_BOMBS_10: "10 Bombs (OoT)",
  OOT_BOMBS_20: "20 Bombs (OoT)",
  OOT_BOMBS_5: "5 Bombs (OoT)",
  OOT_BOOMERANG: "Boomerang",
  OOT_BOOTS_HOVER: "Hover Boots",
  OOT_BOOTS_IRON: "Iron Boots",
  OOT_BOSS_KEY_FIRE: "Boss Key (Fire Temple)",
  OOT_BOSS_KEY_FOREST: "Boss Key (Forest Temple)",
  OOT_BOSS_KEY_SHADOW: "Boss Key (Shadow Temple)",
  OOT_BOSS_KEY_SPIRIT: "Boss Key (Spirit Temple)",
  OOT_BOSS_KEY_WATER: "Boss Key (Water Temple)",
  OOT_BOW: "Bow (OoT)",
  OOT_BROKEN_GORON_SWORD: "Broken Goron Sword",
  OOT_CHICKEN: "Chicken",
  OOT_CLAIM_CHECK: "Claim Check",
  OOT_COJIRO: "Cojiro",
  OOT_COMPASS_BOTW: "Compass (Bottom of the Well)",
  OOT_COMPASS_DC: "Compass (Dodongo's Cavern)",
  OOT_COMPASS_DT: "Compass (Deku Tree)",
  OOT_COMPASS_FIRE: "Compass (Fire Temple)",
  OOT_COMPASS_FOREST: "Compass (Forest Temple)",
  OOT_COMPASS_IC: "Compass (Ice Cavern)",
  OOT_COMPASS_JJ: "Compass (Jabu Jabu's Belly)",
  OOT_COMPASS_SHADOW: "Compass (Shadow Temple)",
  OOT_COMPASS_SPIRIT: "Compass (Spirit Temple)",
  OOT_COMPASS_WATER: "Compass (Water Temple)",
  OOT_DEFENSE_UPGRADE: "Double Defense (OoT)",
  OOT_EMPTY_BOTTLE: "Bottle - Empty (OoT)",
  OOT_EYEBALL_FROG: "Eyeball Frog",
  OOT_EYE_DROPS: "Eye Drops",
  OOT_GERUDO_CARD: "Gerudo Card",
  OOT_GS_TOKEN: "Golden Skulltula Token",
  OOT_HAMMER: "Hammer",
  OOT_HEART_CONTAINER: "Heart Container (OoT)",
  OOT_HEART_PIECE: "Piece of Heart (OoT)",
  OOT_HOOKSHOT: "Progressive Hookshot (OoT)",
  OOT_ICE_TRAP: "Ice Trap (OoT)",
  OOT_LENS: "Lens of Truth (OoT)",
  OOT_MAGIC_BEAN: "Magic Beans (OoT)",
  OOT_MAGIC_UPGRADE: "Magic Upgrade (OoT)",
  OOT_MAP_BOTW: "Map (Bottom of the Well)",
  OOT_MAP_DC: "Map (Dodongo's Cavern)",
  OOT_MAP_DT: "Map (Deku Tree)",
  OOT_MAP_FIRE: "Map (Fire Temple)",
  OOT_MAP_FOREST: "Map (Forest Temple)",
  OOT_MAP_IC: "Map (Ice Cavern)",
  OOT_MAP_JJ: "Map (Jabu Jabu's Belly)",
  OOT_MAP_SHADOW: "Map (Shadow Temple)",
  OOT_MAP_SPIRIT: "Map (Spirit Temple)",
  OOT_MAP_WATER: "Map (Water Temple)",
  OOT_MASK_BUNNY: "Bunny Hood (OoT)",
  OOT_MASK_GERUDO: "Gerudo Mask",
  OOT_MASK_GORON: "Goron Mask (OoT)",
  OOT_MASK_KEATON: "Keaton Mask (OoT)",
  OOT_MASK_SKULL: "Skull Mask",
  OOT_MASK_SPOOKY: "Spooky Mask",
  OOT_MASK_TRUTH: "Mask of Truth (OoT)",
  OOT_MASK_ZORA: "Zora Mask (OoT)",
  OOT_MEDALLION_FIRE: "Fire Medallion",
  OOT_MEDALLION_FOREST: "Forest Medallion",
  OOT_MEDALLION_LIGHT: "Light Medallion",
  OOT_MEDALLION_SHADOW: "Shadow Medallion",
  OOT_MEDALLION_SPIRIT: "Spirit Medallion",
  OOT_MEDALLION_WATER: "Water Medallion",
  OOT_MILK_BOTTLE: "Bottle - Milk (OoT)",
  OOT_NUTS_10: "10 Deku Nuts",
  OOT_NUT_UPGRADE: "Deku Nut Upgrade",
  OOT_OCARINA: "Progressive Ocarina (OoT)",
  OOT_ODD_MUSHROOM: "Odd Mushroom",
  OOT_ODD_POTION: "Odd Potion",
  OOT_POACHER_SAW: "Poacher's Saw",
  OOT_POCKET_CUCCO: "Pocket Cucco",
  OOT_PRESCRIPTION: "Prescription",
  OOT_RECOVERY_HEART: "Recovery Heart (OoT)",
  OOT_RUPEE_BLUE: "Blue Rupee (OoT)",
  OOT_RUPEE_GREEN: "Green Rupee (OoT)",
  OOT_RUPEE_HUGE: "Gold Rupee (OoT)",
  OOT_RUPEE_PURPLE: "Purple Rupee (OoT)",
  OOT_RUPEE_RED: "Red Rupee (OoT)",
  OOT_RUTO_LETTER: "Ruto's Letter",
  OOT_SCALE: "Progressive Scale",
  OOT_SHIELD: "Progressive Shield (OoT)",
  OOT_SHIELD_DEKU: "Deku Shield",
  OOT_SHIELD_HYLIAN: "Hylian Shield",
  OOT_SHIELD_MIRROR: "Mirror Shield",
  OOT_SLINGSHOT: "Slingshot",
  OOT_SMALL_KEY_BOTW: "Small Key (Bottom of the Well)",
  OOT_SMALL_KEY_FIRE: "Small Key (Fire Temple)",
  OOT_SMALL_KEY_FOREST: "Small Key (Forest Temple)",
  OOT_SMALL_KEY_GANON: "Small Key (Ganon's Castle)",
  OOT_SMALL_KEY_GF: "Small Key (Gerudo Fortress)",
  OOT_SMALL_KEY_GTG: "Small Key (Gerudo Training Ground)",
  OOT_SMALL_KEY_SHADOW: "Small Key (Shadow Temple)",
  OOT_SMALL_KEY_SPIRIT: "Small Key (Spirit Temple)",
  OOT_SMALL_KEY_WATER: "Small Key (Water Temple)",
  OOT_SONG_EPONA: "Epona's Song (OoT)",
  OOT_SONG_SARIA: "Saria's Song",
  OOT_SONG_STORMS: "Song of Storms (OoT)",
  OOT_SONG_SUN: "Sun's Song",
  OOT_SONG_TIME: "Song of Time (OoT)",
  OOT_SONG_TP_FIRE: "Bolero of Fire",
  OOT_SONG_TP_FOREST: "Minuet of Forest",
  OOT_SONG_TP_LIGHT: "Prelude of Light",
  OOT_SONG_TP_SHADOW: "Nocturne of Shadow",
  OOT_SONG_TP_SPIRIT: "Requiem of Spirit",
  OOT_SONG_TP_WATER: "Serenade of Water",
  OOT_SONG_ZELDA: "Zelda's Lullaby",
  OOT_SPELL_FIRE: "Din's Fire",
  OOT_SPELL_LOVE: "Nayru's Love",
  OOT_SPELL_WIND: "Farore's Wind",
  OOT_STICK_UPGRADE: "Deku Stick Upgrade",
  OOT_STONE_EMERALD: "Kokiri Emerald",
  OOT_STONE_OF_AGONY: "Stone of Agony",
  OOT_STONE_RUBY: "Goron Ruby",
  OOT_STONE_SAPPHIRE: "Zora Sapphire",
  OOT_STRENGTH: "Progressive Strength",
  OOT_SWORD: "Progressive Sword (OoT)",
  OOT_SWORD_KOKIRI: "Kokiri Sword (OoT)",
  OOT_SWORD_MASTER: "Master Sword",
  OOT_SWORD_GORON: "Progressive Goron Sword",
  OOT_SWORD_KNIFE: "Giant's Knife",
  OOT_SWORD_BIGGORON: "Biggoron Sword",
  OOT_TUNIC_GORON: "Goron Tunic",
  OOT_TUNIC_ZORA: "Zora Tunic",
  OOT_WALLET: "Progressive Wallet (OoT)",
  OOT_ZELDA_LETTER: "Zelda's Letter",
  SHARED_BOW: "Bow",
  SHARED_ARROWS_5: "5 Arrows",
  SHARED_ARROWS_10: "10 Arrows",
  SHARED_ARROWS_30: "30 Arrows",
  SHARED_ARROWS_40: "40 Arrows",
  SHARED_BOMB_BAG: "Bomb Bag",
  SHARED_BOMB: "1 Bomb",
  SHARED_BOMBS_5: "5 Bombs",
  SHARED_BOMBS_10: "10 Bombs",
  SHARED_BOMBS_20: "20 Bombs",
  SHARED_BOMBS_30: "30 Bombs",
  SHARED_MAGIC_UPGRADE: "Magic Upgrade",
};

export const itemName = (item: string) => ITEM_NAMES[item] ?? item;
