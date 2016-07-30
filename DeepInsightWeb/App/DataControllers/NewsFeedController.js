var genNews = function (topicsList) {
    var topics = [];
    var count;
    for (count = 0; count < 4; count++) {
        topics.push(topicsList[count]);
    }
    var query = topics.join(" OR ");
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.cognitive.microsoft.com/bing/v5.0/news/search?q=" + encodeURI(query) + "&count=20&safesearch=moderate",
        "method": "GET",
        "headers": {
            "ocp-apim-subscription-key": "e0dba888cd24432792bb7473c05a3858",
            "cache-control": "no-cache",
        }
    }
    $.ajax(settings).done(function (response) {
        console.log("Received good response from Bing news");
        genNewsHtml(response);
    });
}

var genNewsHtml = function (dataObj) {
    var count, imgurl, name, desc;
    var html = '<h1 class="josefin"><b>Recent News</b></h1><p>Look what I found! Latest happenings in the world that relate to your text...</p>';
    for (count = 0; count < dataObj.value.length; count++) {
        try {
            imgurl = dataObj.value[count].image.thumbnail.contentUrl;
            name = dataObj.value[count].name;
            desc = dataObj.value[count].description;
            url = dataObj.value[count].url;
            html = html +
                '<div class="well">' +
                    '<div class="row">' +
                        '<div class="col-xs-3" >'+
                            '<img style="margin:10%" width="110%"  class="img-responsive img-circle" src="' + imgurl + '"/>
                        '</div>' +
                        '<div class="col-xs-9" style="text-overflow:ellipsis;"><div>'+
                            '<h4 class=" josefin">'+
                                '<b><a href="' + url + '">' + name + '</a></b>'+
                            '</h4>'+
                        '</div>'+
                        '<p>' + desc + '</p></div>' +
                    '</div>' +
                '</div>';
        }
        catch (err) {
            ;
        }
    }
    $('#news').html(html);
}