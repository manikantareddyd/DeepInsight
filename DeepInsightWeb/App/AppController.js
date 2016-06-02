populatePage = function (text) {
    $.ajax({
        "async": true,
        "crossDomain": true,
        "url": "https://api.textrazor.com",
        "method": "POST",
        "headers": {
            "x-textrazor-key": "46886abb9cf9c25cd94f5df28d8e8bdd796338ce1a20d08ddda68939",
            "accept-encoding": "application/gzip",
            "content-type": "application/x-www-form-urlencoded"
        },
        "data": {
            "extractors": "topics",
            "text": text
        },
        "error": function (xhr, ajaxOptions, thrownError) {
            console.log("Boom",thrownError);
        },
        "success": function (data) {
            //console.log(data);
            var coarseTopics = data.response.coarseTopics;
            var topics = data.response.topics;
            var topicsList = [];
            var topicsWikiNamesList = [];
            var count;
            var wikiLink;
            var wikiName;
            try {
                var responseLength = topics.length;
                if (topics.length > 30) responseLength = 30;
                for (count = 0; count < responseLength ; count++) {
                    topicsList.push(topics[count]["label"]);
                    wikiLink = topics[count]["wikiLink"];
                    wikiName = wikiLink.split(":")[2]
                    topicsWikiNamesList.push(wikiName)
                    //console.log(wikiName, topics[count]["label"])
                }
                console.log("Successfully retrived Topics");

                runAllJobs(topicsList, topicsWikiNamesList);
            }
            catch (err) {
                console.log(err);
            };
        }
    });
    return;
}

runAllJobs = function (topicsList, topicsWikiNamesList) {

    $('#wikipedia').html('<h1 class="josefin"><b>Wikipedia Excerpts</b></h1><p>I went through all of wikipedia to fetch articles, that might be relevant to you</p>');
    genWikipediaPage(topicsList, topicsWikiNamesList);

    $('#images').html('');
    genImages();

    $('#articles').html('');

    $('#news').html('');
    genNews();
    //genArticlesPage(topicsList);

    $('#topics-list').html('<h3 class="josefin">Identifying the context of discussion...</h3>');
    genTopicsListCard(topicsList);
    
}
