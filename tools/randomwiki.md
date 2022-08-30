---
title: Random Wiki Articles
parent: Tools
layout: post
---

## Random Wikipedia Articles

### Random Article within Category

<iframe id="randomFromCategoryIframe" src="./randomWikipedia.html" width="100%" onClick="adjustIframeHeight()"></iframe>
<script>
    function adjustIframeHeight(){
        var frame = document.getElementById("randomFromCategoryIframe");
        frameContentHeight =  frame.contentWindow.document.body.scrollHeight;
        frameHeight = Math.max(350,frameContentHeight)
        frame.style.height = frameHeight + 'px';
    }
</script>
