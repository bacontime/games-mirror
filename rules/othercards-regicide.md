---
title: Regicide
parent: Other Card Games
---

# Regicide

*Cooperative Hand Managment.*

Players
: 2-4

| Players | Number of Jokers | Max Hand Size |
|:-:|:-:|:-:|
| 2 | 0 | 7 |
| 3 | 1 | 6 |
| 4 | 2 | 5 |


## Setup

- Build the *Castle Deck*:
    - Shuffled Jacks, on top of shuffled Queens, on top of Shuffled Kings.
    - Flip the top card.
- Shuffle all the non-face cards together into the *Tavern Deck*
    - Everyone draws up to maximum hand size.
    - (Mulligan if you don't have any diamonds.)



## The Royals to 'Cide

| Card | Attack Power | Health |
|:-:|:-:|:-:|
| Jack | 10 | 20 |
| Queen | 15 | 30 |
| King | 20 | 40 |

- A Royal is "immune" to their own suit. 
    - Those cards can still be used to attack, 
    - but suit abilities don't activate while a matching Royal is active.
    - Jokers cancel immunity.



## Each Turn:

1. **Play a card or cards onto the table.** Do one of the following and determine *X*.
    - Play a single card. *X* = the rank of that card.
        - Jacks count as 10, Queens as 15, Kings as 20.
    - Play a matching set of low valued cards. *X* = the total sum of those cards.
        - The cards must be the same rank.
        - Their sum must be no greater than 10.
    - Play an Ace along with any other non-joker card. The Ace adds +1 to the other card's *X*.
    - Play a joker:
        - The current Royal's immunity is cancelled. 
        - Skip the rest of the turn (The Royal doesn't get to attack.)
        - Choose which player takes the next turn.
    - Or yield. *X* = 0. 
        - The rest of the turn still happens.
2. **Activate the Suit Powers of the cards played.**
    - If you played multiple cards, then activate the power of each played suit.
    - <b><span style="color:red">♥</span></b> Hearts: Refill the deck.
        1. Shuffle the discard pile.
        2. Draw *X* cards at random from the discard pile.
        3. Put those cards on the bottom of the Tavern Deck (without looking at them).
    - <b><span style="color:blue">♦</span></b> Diamonds: Draw cards.
        - Starting with the current player, go around in clockwise order drawing cards until *X* cards have been drawn or hands are full.
    - <b><span style="color:black">♠</span></b> Spades: Shield.
        - The current Royal's attack is permanently reduced by *X*.
    - <b><span style="color:green">♣</span></b> Clubs: Double damage towards beating the royal.
3. **Check if the Royal is Defeated.** 
    1. Deal *X* damage to the Royal.
        - If the Royal's health < 0, then place the Royal in the discard pile.
        - If the Royal's health = 0, then place the Royal on top of the Tavern deck.
    3. Flip over the next Royal, and discard all cards on the table.
    5. The current player immediately starts a new turn.
4. **Suffer damage by discarding cards.**
    - Discard cards until the total value of the discarded cards meets or exceeds the Royal's attack power.
    - If the current player runs out, then the next player has to start discarding cards.
    - If all the players run out of cards, then they lose.

---

[Regicide](https://www.badgersfrommars.com/regicide), by Paul Abrahams, Luke Badger, and Andy Richdale