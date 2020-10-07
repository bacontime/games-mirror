---
title: Bug
parent: Abstract Games
---



# Bug

*Bug:Go::Hive:Chess.*


## Winning
You win if you cannot place a stone. This happens if the board is full of your bugs.

## Bugs

Bugs are the name for connected groups of allied stones. (Hex board, so no diagonals.)

## Each Turn

1. Grow - Place a stone on the hexagonal board to either:
    - Start a new bug
    - Grow an existing bug
      - You can't merge bugs
      - You can't grow a bug larger than the largest bug on the board
2. Eat - If your bug is adjacent to an enemy bug of the same shape (up to reflection/rotation), then your bug eats the other one.
3. Bonus Grow - grow the bugs that ate
    - This time, you can grow past the current maximum size
    - Still no mergers allowed.
        - If a merger would be forced, then you can't eat that bug.
    - Growth can trigger another Eat, which triggers growth, etc.

---

Game by Nick Bently.
[Full rules and design concept](https://www.nickbentley.games/bug-polyomino-perceptual-binding/).
