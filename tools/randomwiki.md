---
title: Random Wiki Articles
parent: Tools
layout: post
---

<!--https://en.wikipedia.org/wiki/Wikipedia:Wiki-Link_Game-->




## Random Pages from the Superpower Wiki

- [Random Superpower](https://powerlisting.fandom.com/wiki/Special:Random/main)
- [Random Archetype](https://powerlisting.fandom.com/wiki/Special:Random/Archetype)
- [Random Trait](https://powerlisting.fandom.com/wiki/Special:Random/Trait)


## Random Wikipedia Articles



### Random Wikipedia Article within Category 

Wikipedia has a [Random page in category tool](https://en.wikipedia.org/wiki/Special:RandomInCategory), 
which returns a random article or subcategory, but it doesn't recurse. 
It can only find articles within the top level of the category.
My little widget below does recurse.
If it selects a subcategory, will enter that subcategory and then draw one of *its* members,
and so on.

Here is [a list of high-level Wikipedia categories](https://en.wikipedia.org/wiki/Wikipedia:Contents/Categories) for reference.



<form id="categorySelectionForm">
<input placeholder="Type the name of a Wikipedia Category." value="Physical_objects" type="search" id="categoryInput" autofocus />
<button id="randomArticleButton">Click to get an article from this category.</button><br>
Depth bias: <input id="depthBiasSlider" type="range" min="0" max="20" value="5">
</form>

<style>
    #wikiDiveResults a {font-size: small; display:block;}
    #wikiDiveResults a:last-child {font-size: xx-large;}
</style>
<div id="wikiDiveResults"></div>
<div id="articleExcerptHolder"></div>

<script src="./randomWikipedia.js"></script>




### Wikipedia's Special:Random


- <a href="https://en.wikipedia.org/wiki/Special:Random">Random English Wikipedia Article</a>
- <a href="https://simple.wikipedia.org/wiki/Special:Random">Random Simple English Wikipedia Article</a>



### Wikipedia Vital Articles

- [Click for a random Level-3 Vital Article](https://randomincategory.toolforge.org/?category=Wikipedia%20level-3%20vital%20articles&server=en.wikipedia.org&cmnamespace=&cmtype=&returntype=subject) ([1k articles](https://en.wikipedia.org/wiki/Wikipedia:Vital_articles))
- [Click for a random Level-4 Vital Article](https://randomincategory.toolforge.org/?category=Wikipedia%20level-4%20vital%20articles&server=en.wikipedia.org&cmnamespace=&cmtype=&returntype=subject) ([10k articles](https://en.wikipedia.org/wiki/Wikipedia:Vital_articles/Level/4))
- [Click for a random Level-5 Vital Article](https://randomincategory.toolforge.org/?category=Wikipedia%20level-5%20vital%20articles&server=en.wikipedia.org&cmnamespace=&cmtype=&returntype=subject) ([50k articles](https://en.wikipedia.org/wiki/Wikipedia:Vital_articles/Level/5))
