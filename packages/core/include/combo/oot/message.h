#ifndef INCLUDED_COMBO_OOT_MESSAGE_H
#define INCLUDED_COMBO_OOT_MESSAGE_H

#include <combo/util.h>

typedef struct PACKED
{
    char view[0x128];
    char unk_0128[0xdc88];
    char textBuffer[0x550]; /* Probably smaller */
    /* 0xE300 */ s32 msgLength;
    /* 0xE304 */ u8 msgMode;
    /* 0xE305 */ u8 unk_e305;
    char unk_e306[0xdf];
    u8   choice;
    char unk_e3e6[0x06];
    u16  lastSongPlayed;
    u16  ocarinaMode;
    u16  ocarinaAction;
    char unk_e3f2[0x26];
}
MessageContext;

#define OCARINA_SONG_MINUET             0x0
#define OCARINA_SONG_BOLERO             0x1
#define OCARINA_SONG_SERENADE           0x2
#define OCARINA_SONG_REQUIEM            0x3
#define OCARINA_SONG_NOCTURNE           0x4
#define OCARINA_SONG_PRELUDE            0x5
#define OCARINA_SONG_SARIAS             0x6
#define OCARINA_SONG_EPONAS             0x7
#define OCARINA_SONG_LULLABY            0x8
#define OCARINA_SONG_SUNS               0x9
#define OCARINA_SONG_TIME               0xa
#define OCARINA_SONG_STORMS             0xb
#define OCARINA_SONG_SCARECROW_SPAWN    0xc
#define OCARINA_SONG_MEMORY_GAME        0xd

#endif
