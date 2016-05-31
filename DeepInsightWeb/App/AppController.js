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
            console.log(data);
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

populateSentiment = function (text) {
    var data = JSON.stringify({
        "documents": [
          {
              "language": "en",
              "id": "string",
              "text": text
          }
        ]
    });

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            
            genSentiment(JSON.parse(this.response)["documents"][0]["score"])
            console.log(this.response);
        }
    });

    xhr.open("POST", "https://westus.api.cognitive.microsoft.com/text/analytics/v2.0/sentiment");
    xhr.setRequestHeader("ocp-apim-subscription-key", "62e3adb14665494986b47b8b69449432");
    xhr.setRequestHeader("content-type", "application/json");
    xhr.send(data);
}


runAllJobs = function (topicsList, topicsWikiNamesList) {

    $('#wikipedia').html('');
    genWikipediaPage(topicsList, topicsWikiNamesList);

    $('#images').html('<div class="circle" id="circles-1"></div>');

    //genImagesPage(topicsList);

    $('#articles').html('');
    //genArticlesPage(topicsList);
}