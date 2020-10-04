


document.write(`
<div class="rulesBlock"   style="">
    <center>
        <!--<img src="imgs/H.svg" class="lch">
        <img src="imgs/H.svg" class="lch">
        <img src="imgs/H.svg" class="rch">
        <img src="imgs/H.svg" class="rch">-->
        <h4 id="noThanks">No Merci!</h4> 
        <p><i>Yet To Play</i></p>
        <p>(3-5) Inverse Bidding. 2-10 in 4 suits, chips.</p>
    </center>
    <div class="rulesBody"  style="">
        <ul>
        <li>Give each player 13 chips.</li>
        <li>Randomly remove 7 cards.</li>
        <li>Each turn, the active player either:</li>
            <ul>
            <li>Places a chip on the active card to avoid taking it.</li>
            <li>OR takes the active card and the chips on it, and flips a new card.</li>
            </ul>
        <li>After all cards have been taken, scoring:</li>
            <ul>
            <li>Each card scores its face value. </li>
            <li><span class="cD">♦&#xFE0E;</span> scores +0; Each <span class="cS">♠&#xFE0E;</span> +10; Each  <span class="cH">♥&#xFE0E;</span> +20; Each <span class="cC">♣&#xFE0E;</span> +30
            <li>If you have a mono-suit run of cards, only score the lowest card in the run.</li>
            <li>Each chip is -1 Point.</li>
            </ul>
        </ul>
        <li><i>Fewest</i> points wins.</li>
    </div>
    <p class="cardAuthor">adapted from "No Thanks", by Thorsten Gimmler</p>
</div><br>
`)