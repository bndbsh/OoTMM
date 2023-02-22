#ifndef COMBO_SAVE_H
#define COMBO_SAVE_H

#if !defined(__ASSEMBLER__)
# include <combo/oot/save.h>
# include <combo/mm/save.h>
#endif

#define SAVE_OFFSET_MM_1            0x08000
#define SAVE_OFFSET_MM_1_BACKUP     0x0c000
#define SAVE_OFFSET_MM_2            0x10000
#define SAVE_OFFSET_MM_2_BACKUP     0x14000
#define SAVE_OFFSET_MM_3            0x18000
#define SAVE_OFFSET_MM_3_BACKUP     0x1c000

#if defined(__ASSEMBLER__)
# if defined(GAME_OOT)
#  define gOotSave gSaveContext
# else
#  define gMmSave gSaveContext
# endif
# define SAVE_EXTRA_RECORD(type, index) (gOotSave + 0x1c * (index) + 0x10)
#else
# define SAVE_EXTRA_RECORD(type, index) (*((type*)(gOotSave.perm[index].raw + 0x10)))
#endif

#define gOotExtraTrade SAVE_EXTRA_RECORD(OotExtraTrade, 0)
#define gOotExtraItems SAVE_EXTRA_RECORD(OotExtraItems, 1)
#define gOotExtraFlags SAVE_EXTRA_RECORD(OotExtraFlags, 2)

#define gMmExtraBoss    (*((MmExtraBoss*)(gMmSave.permanentSceneFlags[1].raw + 0x14)))
#define gMmExtraTrade   (*((MmExtraTrade*)(gMmSave.permanentSceneFlags[2].raw + 0x14)))
#define gMmExtraFlags   (*((MmExtraFlags*)(gMmSave.permanentSceneFlags[3].raw + 0x14)))
#define gMmExtraFlags2  (*((MmExtraFlags2*)(gMmSave.permanentSceneFlags[4].raw + 0x14)))

#endif
