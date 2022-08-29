---
title: Poker Hand Games
has_children: true
nav_order: 2
---

# Poker Hand Rankings

<style>
    .bigCard {
        width: 17%; 
        vertical-align: text-bottom;
        }
</style>

<table style="">
    <tr><td><span>5 of a Kind</span></td><td>
        <img class="bigCard" src="imgs/cardA.svg">
        <img class="bigCard" src="imgs/cardA.svg">
        <img class="bigCard" src="imgs/cardA.svg">
        <img class="bigCard" src="imgs/cardA.svg">
        <img class="bigCard" src="imgs/cardA.svg"></td></tr>
    <tr><td><span>Straight Flush</span></td><td>
        <img class="bigCard" src="imgs/9C.svg">
        <img class="bigCard" src="imgs/8C.svg">
        <img class="bigCard" src="imgs/7C.svg">
        <img class="bigCard" src="imgs/6C.svg">
        <img class="bigCard" src="imgs/5C.svg"></td></tr>
    <tr><td><span>4 of a Kind</span></td><td>
        <img class="bigCard" src="imgs/cardK.svg">
        <img class="bigCard" src="imgs/cardK.svg">
        <img class="bigCard" src="imgs/cardK.svg">
        <img class="bigCard" src="imgs/cardK.svg">
        <img class="bigCard" src="imgs/cardBlank.svg"></td></tr>
    <tr><td><span>Full House</span></td><td>
        <img class="bigCard" src="imgs/card3.svg">
        <img class="bigCard" src="imgs/card3.svg">
        <img class="bigCard" src="imgs/card3.svg">
        <img class="bigCard" src="imgs/card8.svg">
        <img class="bigCard" src="imgs/card8.svg"></td></tr>
    <tr><td><span>Flush</span></td><td>
        <img class="bigCard" src="imgs/D.svg">
        <img class="bigCard" src="imgs/D.svg">
        <img class="bigCard" src="imgs/D.svg">
        <img class="bigCard" src="imgs/D.svg">
        <img class="bigCard" src="imgs/D.svg"></td></tr>
    <tr><td><span>Straight</span></td><td>
        <img class="bigCard" src="imgs/card6.svg">
        <img class="bigCard" src="imgs/card5.svg">
        <img class="bigCard" src="imgs/card4.svg">
        <img class="bigCard" src="imgs/card3.svg">
        <img class="bigCard" src="imgs/card2.svg"></td></tr>
    <tr><td><span>3 of a Kind</span></td><td>
        <img class="bigCard" src="imgs/card8.svg">
        <img class="bigCard" src="imgs/card8.svg">
        <img class="bigCard" src="imgs/card8.svg">
        <img class="bigCard" src="imgs/cardBlank.svg">
        <img class="bigCard" src="imgs/cardBlank.svg"></td></tr>
    <tr><td><span>Two Pair</span></td><td>
        <img class="bigCard" src="imgs/cardQ.svg">
        <img class="bigCard" src="imgs/cardQ.svg">
        <img class="bigCard" src="imgs/card10.svg">
        <img class="bigCard" src="imgs/card10.svg">
        <img class="bigCard" src="imgs/cardBlank.svg"></td></tr>
    <tr><td><span>One Pair</span></td><td>
        <img class="bigCard" src="imgs/cardA.svg">
        <img class="bigCard" src="imgs/cardA.svg">
        <img class="bigCard" src="imgs/cardBlank.svg">
        <img class="bigCard" src="imgs/cardBlank.svg">
        <img class="bigCard" src="imgs/cardBlank.svg"></td></tr>
</table>




## Other Notes on Rankings

Individual Cards are ranked AKQJT98765432A, highest-to-lowest.

Ace can be high or low, but not both. So you can have a run of A2345 or TJQKA, but not QKA23.

To break ties between hands:

- Look at the ranks of the cards that count towards the hand.
- Look at the rank of other cards in the hole.
- Compare the suits.


<p>When comparing two exactly identical hands, <b><span style="color:black">♠</span></b> is ranked highest, followed by  <b><span style="color:red">♥</span></b>,  <b><span style="color:blue">♦</span></b> , and then  <b><span style="color:green">♣</span></b>. Reverse of alphabetical order: SHDC.</p>

With two exactly identical hands, the winner is <span id="tiebreaker"></span>.


<script>
function rD(i){return i[Math.floor(Math.random()*i.length)];} //draw a random item from a list.
tiebreakerList = [
    "determined via arm wrestling",
    "the tallest player",
    "the youngest player",
    "the player with the cleanest hands",
    "the first player to slap the table",
    "chosen randomly",
    "chosen via popular vote",
    "chosen via electoral college",
    "chosen by Mom",
    "determined via bake-off",
    "determined via cash auction",
    "both players together. Friendship is more important",
    "the northern-most player",
    "whichever player makes the biggest fuss",
    "whichever player has spent the most time in Texas",
    "determined via sudden-death Ping Pong",
    "chosen via Rock Paper Scissors",
    "determined via Chess match",
    "determined via a match of The Campaign for North Africa",
    "you personally — the person reading this — even if you aren't one of the players",
]
document.getElementById("tiebreaker").innerHTML = rD(tiebreakerList);
</script>

