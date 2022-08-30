
async function drawMemberFromWikipediaCategory(categoryName, depthBias=0 ) {
    /**
    Talks to Wikipedia to get a random category member.
    This is drawn uniformly from both subcategories and 
    from pages which are directly included in the category.

    API Weirdness
    -------------
    origin=* : Tell wikipedia to treat us like a non-logged-in user.
    format=json : defines format I want the results in
    action=query and prop=info : Tells wikipedia we are asking for basic information about the page
    list=categorymembers : This is what we are specifically asking for.
    cmtitle=${categoryName} : And here is where we plug in the title we want to query.

    Parameters
    ----------
    categoryName : string
        Category to pull the members from. Must include `Category:` prefix. EG "Category:Objects".
    depthBias : int
        Redraw this many times when running into an article. A simple way of reducing the frequency of top-level articles.

    Returns
    -------
    page: dict
        A dictionary containing the information for the randomly selected category member.
        "ns" is namespace. 14 for a category, 0 for an actual article.
        "title" is self explanatory. EG 'Category:Lost objects' or 'Bread'
        "pageid" is ... I think a unique identifier. I dunno. I'm not using it.
    */
    const endpoint = `https://en.wikipedia.org/w/api.php?origin=*&format=json&action=query&prop=info&list=categorymembers&cmtitle=${categoryName}`;
    const response = await fetch(endpoint);
    if (!response.ok) {
        throw Error(response.statusText);
    }
    const json = await response.json();
    memberList = json.query.categorymembers;
    /*Now choose a random member*/
    member = memberList[Math.floor(Math.random()*memberList.length)];

    while (depthBias > 0 && member.ns == 0){
        // If depth bias is set to X, redraw the first X articles we get.
        console.log("redrawing "+member.title);
        member = memberList[Math.floor(Math.random()*memberList.length)];
        depthBias -= 1;
    }

    return member;
}


async function diveIntoWikipediaCategory(categoryName,  depthBias=0) {
    /**
    This function repeatedly selects random members from wikipedia categories.
    It continues crawling bewteen categories until a page is selected.
    Then it returns a list of the places it's been.

    Parameters
    ----------
    categoryName : string
        Top level category to start the search at. 
        Must include `Category:` prefix. EG "Category:Objects".

    Returns
    -------
    breadcrumbs: list
        A list containing the titles of all of the categories and pages that were seen during the dive.
        The last item in the list contains the title of the actual article.
    */
    breadcrumbs = Array(0);
    do {
        breadcrumbs.push(categoryName);
        randomMember = await drawMemberFromWikipediaCategory(categoryName, depthBias=depthBias);
        categoryName = randomMember.title;
        namespace = randomMember.ns;
        console.log(categoryName);
    } while (namespace == 14)
    
    breadcrumbs.push(categoryName); // The final category is the article we found.
    return breadcrumbs
}

async function grabPlaintextExcerpt(title){
    const endpoint = `https://en.wikipedia.org/w/api.php?origin=*&format=json&action=query&prop=extracts&exintro&explaintext&indexpageids&redirects=1&titles=${title}`;
    //api call copied from https://stackoverflow.com/questions/8555320/is-there-a-wikipedia-api-just-for-retrieve-the-content-summary
    const response = await fetch(endpoint);
    if (!response.ok) {throw Error(response.statusText);}
    const json = await response.json();
    // Turns out I actually *do* need to use the pageid paramater.
    pageid = json.query.pageids[0];
    pageExtract = json.query.pages[pageid].extract;
    return pageExtract;
}


async function displayDiveResults(breadcrumbs) {
    htmlSnippet = "";
    console.log(breadcrumbs)
    breadcrumbs.forEach(
        element => htmlSnippet += `<a href="https://en.wikipedia.org/wiki/${element}">${element}</a>\n`
    );
    document.getElementById("wikiDiveResults").innerHTML = htmlSnippet;
    articleTitle = breadcrumbs[breadcrumbs.length - 1];
    articleExcerpt = await grabPlaintextExcerpt(articleTitle);
    document.getElementById("articleExcerptHolder").innerHTML = `<blockquote>${articleExcerpt}</blockquote>`;
    //`<iframe src="https://m.wikipedia.org/wiki/${articleTitle}" width="100%"></iframe>`
    
}

async function handleSubmit(event) {
    event.preventDefault(); // prevent page from reloading when form is submitted
    
    categoryInput = document.getElementById('categoryInput').value;
    if (! categoryInput.startsWith("Category:")){
        categoryInput = "Category:"+categoryInput;
    }

    depthBiasInput =  document.getElementById('depthBiasSlider').value;
    
    console.log()
    diveResults = await diveIntoWikipediaCategory(categoryInput, depthBias=depthBiasInput);
    
    displayDiveResults(diveResults);
    console.log(diveResults);
}

const form = document.getElementById("categorySelectionForm");
form.addEventListener('submit', handleSubmit);