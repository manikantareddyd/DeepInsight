getTopicsData = function (text) {
    $.ajax({
        "async": false,
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
            var coarseTopics = data.response.coarseTopics;
            var topics = data.response.topics;
            var topicsList = [];
            var topicsWikiName = [];
            var count;
            var wikiLink;
            var wikiName;
            var responseLength = topics.length;
            if(topics.length>10) responseLength=10;
            for (count = 0; count < responseLength ; count++) {
                topicsList.push(topics[count]["label"]);
                wikiLink = topics[count]["wikiLink"];
                wikiName = wikiLink.split(":")[2]
                topicsWikiName.push(wikiName)
                console.log(wikiName, topics[count]["label"])
            }
            console.log("Successfully retrived Topics");
        }
    });
    return []
}