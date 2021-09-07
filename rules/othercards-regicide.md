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
    1. Shuffle the 4 Kings
    2. Shuffle the 4 Queens and put them on top of the Kings
    3. Shuffle the 4 Jacks and put them on top of the Queens
    4. Flip the top card.
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
    - but their suit abilities don't activate while a matching Royal is active.



## Each Turn:

1. **Play a card or cards onto the table.** Do one of the following and determine your *attack value*.
    - Play a single card. Your attack value is the rank of that card.
        - Aces count as 1.
        - Jacks count as 10, Queens as 15, Kings as 20.
    - Play a matching set of low valued cards. Your attack value is the total sum of those cards.
        - The cards must be the same rank.
        - Their sum must be no greater than 10.
        - Examples: a pair of 5s, a triplet of 3s, a quartet of 2s.
    - Play an Ace along with any other non-joker card. Your attack value is 1 + the attack value of the second card.
    - Play a joker:
        - The current Royal's immunity is cancelled. 
        - Skip the rest of the turn (The Royal doesn't get to attack.)
        - Choose which player takes the next turn.
    - Or yield. Your attack value is 0. 
        - The rest of the turn still happens.
2. **Activate the Suit Power of the cards played.**
    - If you played multiple cards, then activate the power of each played suit.
    - Hearts: Refill the deck.
        - Shuffle the discard pile.
        - Draw [attack power] cards at random from the discard pile.
        - Put those cards on the bottom of the Tavern Deck (without looking at them).
    - Diamonds: Draw cards.
        - Starting with the current player, go around in clockwise order drawing cards.
        - If a player is at max hand size, then skip their draw.
        - Keep going until a total of [attack power] cards have been drawn or all players have full hands.
    - Clubs: Shield.
        - The Royal's attack is reduced by [attack power].
        - This persists until the current royal is defeated.
    - Spades: Double the current attack's attack power.
3. **Check if the Royal is Defeated.** 
    - If the total attack value is > the Royal's health, then place the Royal in the discard pile.
    - If the total attack value = the Royal's health, then place the Royal on top of the Tavern deck.
    - Flip over the next Royal.
    - Wipe the table clean.
    - The current player immediately starts a new turn.
4. **Suffer damage by discarding cards.**
    - Look at the Royal's attack power.
        - (Reduce it according to the Shields that have been played.)
    - The current player discards cards until the total attack value of the discarded cards meets or exceeds the Royal's attack power.
    - If the current player runs out, then the next player has to start discarding cards.
    - If all the players run out of cards, then they lose.

---

[Regicide](https://www.badgersfrommars.com/regicide), by Paul Abrahams, Luke Badger, and Andy Richdale