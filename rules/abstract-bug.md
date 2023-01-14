---
title: Bug
subtitle: "Bug:Go::Hive:Chess."
players: 2
equipment: Uses an hexagonal grid and two colors of stones.
author: Nick Bently
layout: game
parent: Abstract Games
nav_exclude: false
---


A hex grid with side-length 3 is recommended.
This game can be played with *Hive* pieces.

## Winning
You win if you cannot place a stone. This happens if the board is full of your bugs.

## Bugs

Bugs are the name for connected groups of allied stones. (Hex board, so no diagonals.)

## Each Turn

1. **Grow** - Place a stone on the hexagonal board to either:
    - Start a new bug
    - Grow an existing bug
      - You can't merge bugs
      - You can't grow a bug larger than the largest bug on the board
2. **Eat** - If your bug is adjacent to an enemy bug of the same shape (up to reflection/rotation), then your bug eats the other one.
    - Remove the eaten bug from the board.  
3. **Bonus Grow** - grow any bugs that ate by 1 stone.
    - This time, you can grow past the current maximum size
    - Still no mergers allowed.
        - If a merger would be forced by this growth, then the bug doesn't get eaten.
    - Growth can trigger another Eat, which triggers growth, etc.


---

Game by Nick Bently.
[Full rules and design concept](https://www.nickbentley.games/bug-polyomino-perceptual-binding/).
