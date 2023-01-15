---
title: Hex / Slither
subtitle: Connect a chain of pieces across the board.
players: 2
equipment: Uses a grid and two colors of stones.
author: "Piet Hein, Corey Clark, others"
layout: game
parent: Abstract Games
nav_exclude: false
---



<a href="https://commons.wikimedia.org/wiki/File:Hex_zig-zag.jpg"><img src="https://upload.wikimedia.org/wikipedia/commons/f/fc/Hex_zig-zag.jpg" alt="Public Domain photo of retail version of Hex, from François Haffner on Wikimedia."/></a>

## Rules for Hex

Hex is played on a rhombic hex grid.

### Winning
One player wants to form a connected path of their stones linking the top to the bottom of the board.  
The other wants to form such a path linking the left to the right.

### Each Turn

1.  Place one of your stones on an empty space.

That's it.

### Hex Variants

*Y* is like Hex, but played on a triangular hex grid and the objective is to connect all three sides with a single connected shape.

<!--
Havannah has more complicated movement patterns.
Atoll has more complicated goal zones on the borders. And played on a square hex grid.
-->





## Slither and Other Square Board Connection Games

<!--called particlebond on iggamecenter-->

The basic rules are the same as in Hex.
Players take turns placing stones on the grid. 
One player wants to form an orthogonally-connected path of their stones linking the top to the bottom of the board.  
The other wants to form such a path linking the left to the right.

<!--It's much easier to find a square grid board to play on.
But such a grid creates additional rules complications.-->

### Complications When Playing on a Square Grid 

Firstly: Stones do not connect in the diagonal directions.
Only orthogonal directions
count for connection and adjacency, 
unless otherwise mentioned.
<!--
Orthogonality symbol: ?
-->

Secondly:
Special attention must be paid to "bare diagonals".
Two diagonally-adjacent allied stones form a bare diagonal
unless they're also adjacent to the same third allied stone.

```
Okay:        Bare:     Crosscut:
    ????        ???        ???? 
    ???        ???        ???? 
```

Bare diagonals risk the formation of "crosscuts",
which can block both players from winning.



### Additional Rules for Slither
- Before you place a stone, you may optionally move one of your stones.
	- Stones move like a chess king (to an orthogonally or diagonally adjacent empty space).
- At the end of your turn, there must be no bare diagonals. 
- Optional Advanced variant: You can only move a stone if it's adjacent to a group of stones containing both colors.

<!--
Game by Corey Clark.
[Full](http://www.iggamecenter.com/info/en/particlebond.html) [Rules](https://mindsports.nl/index.php/the-pit/625-slither)
-->

### Rules for Similar Games

#### Quinten
- After placing a stone, some regions of the board are automatically filled in.
	- The *regions* are the maximal connected sets of empty spaces.
	- A *narrow territory* is a region which doesn't contain any 2x2 empty spaces.
	- After placing your stone, fill in all narrow territories with the color of stone which makes up the majority of its border. Ties are broken in favor of non-active player.
- At the end of your turn, there must be no bare diagonals. 

<!--
: A *region* is a set of connected empty spaces which is closed under adjacency.
: A "*region*" is a set of connected empty spaces surrounded by stones.
https://cseweb.ucsd.edu//~clbailey/ClosureOverview.htm
-->

#### Resolve
- Bare diagonals are allowed.
- When a crosscut is formed, the active player swaps two stones in the formation to resolve the crosscut, and continues swapping until no crosscuts remain.

#### Rhode
- Bare diagonals are allowed, but must be dealt with ASAP.
- If you have a bare diagonal at the start of your turn, you have to place your piece to close it.
- At the end of your turn, remove any of your pieces that are part of crosscuts except for the one you just placed.

#### Shifty
- *Either* place or move a stone on your turn. Additional restrictions apply.
	- Stones may only be placed adjacent to allied stones (except on the first move).
	- Stones move like a chess queen. 
	-To move a stone, it must start adjacent to an allied stone, and end *non*-adjacent to any allied stones.
- Bare diagonals are allowed, but crosscuts are not.

<!--https://www.nickbentley.games/new-game-shifty/-->

#### Vimbre
- Instead of placing a stone, you may convert an enemy piece if certain conditions are met:
	- It must be sandwiched between your pieces (OXO), 
	- and it must be adjacent to an empty space. 
- Bare diagonals are *not* allowed.

#### Gonnect
- Bare diagonals are allowed.
- The capturing [rules from Go](abstract-go) are stapled on:
	- Surrounded groups are removed.
	- Board states may not be repeated.

<!--- (Unlike Go, passing is not allowed. And the win condition is different too, of course.)-->

#### Crossway
- Stones are connected both orthogonally *and diagonally*.
- Bare diagonals are allowed, but crosscuts are not.

#### Kopano
- Stones are connected both orthogonally *and diagonally*.
- Bare diagonals are only sometimes allowed.
	- A stone can only be placed to make a bare diagonal if placing an enemy stone in the same position would also create a bare diagonal.
- Crosscuts are not allowed.






<!--
Chain lightning lets only white (P2) connect diagonally. Start with any number of white on the board, then let the other player choose whether they want to play black or white.
Sligo adds the movement rule of Slither to Go.
Tiananmen is a connection game where one player wants to encircle the other but then with a million fiddly extra bits stapled on. 
https://boardgamegeek.com/thread/1556073/beautiful-dance
Konobi has a fiddly hard to understand version of bare diagonal restriction.
https://boardgamegeek.com/boardgame/123213/konobi/ratings?rated=1



Pippinzip
: Played on a square board. No movement. Bare diagonals are allowed.
: Black connects orthogonally and wants to connect any two opposite sides of the board.
: White connects orthogonally and diagonally and wants to connect all 4 sides of the board.
: Game begins with an auction phase to decide who plays which color.


-->



## Inventor Attribution for Each Game

| Game | Author | Date |
|:--|:--|:--|
| Hex | Piet Hein | 1942 |
| Y | John Milnor | 1952 |
| Gonnect | João Pedro Neto | 2000 |
| Crossway | Mark Steere | 2007 |
| Slither | Corey Clark | 2010 |
| Shifty | Nick Bently | 2012 |
| Vimbre | Luis Bolaños Mures | 2012 |
| Quinten | Luis Bolaños Mures | 2012 |
| Kopano | Luis Bolaños Mures | 2013 |
| Rhode | Luis Bolaños Mures | 2016 |
| Resolve | Alek Erickson | 2020 |

Though this family of games is simple enough that independent invention often happens.




<!--
Similar Games with specialized pieces.
https://boardgamegeek.com/boardgame/10989/conhex
https://boardgamegeek.com/boardgame/3370/connections
https://boardgamegeek.com/boardgame/34221/atoll
https://boardgamegeek.com/boardgame/5242/game-y
https://boardgamegeek.com/boardgamefamily/7345/mechanism-connection/linkeditems/boardgamefamily?pageid=1&sort=rank
https://boardgamegeek.com/boardgame/3826/unlur
https://en.wikipedia.org/wiki/TwixT
https://en.wikipedia.org/wiki/Havannah_(board_game)
https://www.iggamecenter.com/en/rules/havannah
-->




