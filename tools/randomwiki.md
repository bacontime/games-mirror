---
title: Random Wiki Articles
parent: Tools
layout: post
---

## Random Wikipedia Articles

### Random Article within Category

<form id="categorySelectionForm">
<input placeholder="Type the name of a Wikipedia Category." value="Physical_objects" type="search" id="categoryInput" autofocus />
<button id="randomArticleButton">Click to get an article from this category.</button><br>
Depth bias: <input id="depthBiasSlider" type="range" min="0" max="100" value="10">
</form>

<style>
    #wikiDiveResults a {font-size: small; display:block;}
    #wikiDiveResults a:last-child {font-size: xx-large;}
</style>
<div id="wikiDiveResults"></div>
<div id="articleExcerptHolder"></div>

  
<script src="./randomWikipedia.js"></script>

