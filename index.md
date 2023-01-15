---
title: Home
nav_order: 1
nav_exclude: true
---

# Game Rules and Tools

This site has 
rules blurbs for games
I know how to play,
as well as a few assorted little widgets.
Card games should be assumed to use a standard 52 card deck unless otherwise mentioned. 

## Quick Links

- [Poker Hand ranking chart](rules/category-poker), along with a list of games that use poker hands.
- [My Board Game Collection](ref/bgcollection.html), with the ability to sort by rules complexity and language dependence.

<!--- [Game Links](links), to games like Spyfall which can be played with phones.-->


### Partial Site Map

- Card or Tile Games:
    - [Climbing Games](rules/category-climbing.html)
    - [Mahjong Set Games](rules/category-mahjong.html)
    - [Poker Hand Games](rules/category-poker.html)
    - [Trick-Taking Games](rules/category-tricktaking.html)
    - [Other Card Games](rules/category-othercards.html)
- Info for Other Types of Games:
    - [My Board Game Collection](ref/bgcollection.html)
    - [Rules References for Complicated Board Games](ref/rules-references.html)
    - [Rules for Abstract Games](rules/category-abstract.html)
    - [Rules for Simple Tabletop RPGs](rules/category-rpg.html)
- [Assorted Useful Widgets](tools/):
    - [Random Wiki Pages](tools/randomwiki.html), either from Wikipedia (with the option to draw from a specific category), or from the Superpowers Wiki 
    - [An simple tool which draws from a short list of words.](tools/randomwords.html) I tried to choose the list to be charadesable.


## Related Sites

- [Pagat](https://www.pagat.com/) is a fantastic website, which hundreds of in-depth rulesets for all sorts of card games, but it can be a bit *too* much. Sometimes I don't need  an in-depth history of the game, with fifteen different variants and a detailed explanation of the regionally-favored shuffling technique. Sometimes I just want some bullet points reminding me how to score.
- Kevan Davis' [Freeze-dried Game Pack](https://kevan.org/fdgp/index.php), which has rules for games in 100 words or less.



## List of Games

<ul>
{%- assign game_pages = site.pages   |   where:"layout", "game"   |   sort:"title" -%}
{% for game_page in game_pages %}
{%- if game_page.nav_exclude != true -%}
<li>
    <b><a href="{{ game_page.url | absolute_url }}">{{ game_page.title }}</a></b>
    <small style="display: inline-block;"><i>{% if game_page.players %}({{ game_page.players }} Players){% endif %}</i></small>
    {% if game_page.subtitle %}{{ game_page.subtitle }}{% endif %}
    {% if game_page.description %}<br>{{ game_page.description }}{% endif %}
</li>
{% endif %}
{% endfor %}
</ul>

