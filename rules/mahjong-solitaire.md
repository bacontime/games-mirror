---
title: Mahjong Solitaire
subtitle: A matching game that just happens to use mahjong tiles.
players: 1-4
layout: game
parent: Mahjong Set Games
---

## Basic Singleplayer Rules

Despite common claims to the contrary, this version of "Mahjong" has nothing to do with the classic game of Mahjong. 
In fact, this game originates as a computer game from the 80s.

- Pile the mahjong tiles in a stack with multiple layers. All tiles should be face up.
- A tile is open if at least one long edge is free, and if it has no tiles atop it.
- Remove pairs of identical open tiles.
- You win if you match up all the tiles.

How do you match up the seasons and flowers? I guess either remove them or treat all the seasons/flowers as identical.


## Dragon Castle (2-4 Players)

[Dragon Castle](https://boardgamegeek.com/boardgame/232219/dragon-castle) is 
a game by Hjalmar Hach, Luca Ricci, and Lorenzo Silva
which attempts to boardgamify the mechanics in Mahjong Solitaire.

A basic version of the game can be played with Mahjong Tiles,
along with some markers (such as black go stones) to represent shrines.
Some coins or other means of keeping score would also be handy.

### Setup

Use the Dragons, Winds, and pip tiles 1-7 to build a face-up **Dragon's Castle** with three floors in the middle of the table.

Here are some suggested layouts:
```
  2332        1111 1111           1         
 123321      11112 21111       1112111      
 233332      11123 32111       1223221      
12333321     11233 33211     3 1233321 3    
12333321                     31233233213    
 233332      11233 33211     3 1233321 3    
 223321      11123 32111       1223221      
  2332       11112 21111       1112111      
              1111 1111           1         
```
<!--
Rulebook:
116 tiles:
    72 pip tiles (6*4*3)
    12 Dragons
    16 Winds
    16 Seasons

My recommendation above:
112 tiles:
    84 pip tiles (7*4*3)
    12 Dragons
    16 Winds

Rulebook layouts can't be done.
No duplicate season tiles. (-16 tile)
Increase pip range by 1 from 6 to 7 get +12 more tiles.
This leaves us 4 short of the count in the rulebook.

Alternately, Using all pips
136 tiles:
    108 pip tiles (9*4*3)
    12 Dragons
    16 Winds

Poker tiles doesn't really work because there are only 2 of a kind using both decks.
On the other hand, use both decks and we have
52*2+8 cards = 112 cards.
I suppose the rule changes could be:
- option 1: take a second open tile of the same rank.
- Jokers build two shrines and get bonus point.
Or you could tweak the consolidation rules to be based on suit/rank or maybe poker hands?
-->



Each player also has their own separate castle which has yet to be built.
The footprint of each player's castle should stay inside a 6x6 area.


### Each Turn

On Your Turn:

1. **TAKE** an open tile from the top floor of the Dragon's Castle. (Or Summon the Elder Dragon)
2.  After Taking a Tile, also do exactly one of the following three actions:
    - Take an second, identical, open tile from any floor.
    - Take a shrine from the pool and put it in your reserve.
    - Discard that tile you took, and earn +1 point.
3. **BUILD**: Place any tiles you just collected face-up in your castle.
    - A tile may be placed:
        - On top of a face-down tile.
        - On the ground diagonally or orthogonally adjacent to a tile in your castle.
    - But may not be placed:
        - On top of a face-up tile.
        - On top of a shrine.
4. **FLIP**: If there are any groups of more than 4 connected tiles of the same type in your castle, consolidate those groups by flipping them.
    - Tiles are connected via orthogonal adjacencies. Height doesn't matter.
    - Types are coins, strings of coins, myriads, winds, and dragons.
    - To consolidate the tiles, flip them all face down.
    - This is not optional.
    - Earn points for each set of tiles consolidated: 
        - 4 tiles: +2 points.
        - 5 tiles: +3 points.
        - 6 tiles: +5 points.
        - 7 tiles: +6 points.
        - 8 tiles: +8 points.
        - N tiles for N > 8: +N points.
        - For a consolidated group of dragons, Earn +1 bonus point.
5. **PLACE SHRINES**: Optionally, you may build shrines from your reserve on top of tiles you just consolidated.
    - The shrines must be placed on tiles that were consolidated this turn.
    - On a consolidated group of coins, strings, or myriads, you may only build one shrines.
    - On a consolidated group of winds or dragons, you may build up to two shrines.
    - When you build a shrine, earn +1 point if it's on top of the first floor of your castle, +2 points if it's on the second floor, and +3 points if it's on the third floor or higher.

### Game End

As soon as the Dragon's Castle is down to its bottom floor, 
you may skip the **TAKE** step on your turn to instead
**Summon the Elder Dragon**.
If you do so, earn +2 points. Don't take any tiles this turn.

The game end is triggered after player's have collectively chosen to 
Summon the Elder Dragon a number of times equal to the number of players. 
Continue playing until the last player in turn order has gone.
(Players can still Summon the Elder Dragon if they want to.)

Most points wins. 

As a reminder, points are earned by discarding tiles, Summoning the Elder Dragon, consolidating tiles, and building shrines.

Ties go to the player with the most stacks which are topped by a face-down tile. After that, ties are broken by the number of shrines in your castle.