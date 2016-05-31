genWikipedia = function (topicsList, topicsWikiLink) {
    var count;
    for (count = 0; count < topicsList.length; count++) {
        $.ajax({
            type: "GET",
            "url": topicsWikiLink[count],
            dataType: "jsonp",
            error: function (xhr, ajaxOptions, thrownError) {

                console.log("Boom");
            },
            success: function (data) {
                var items = [];
                console.log("Oops");
                var pagesId = Object.keys(data.query.pages);

                $.each(pagesId, function (key, val) {
                    var extract = data.query.pages[val].extract
                    var boo = extract.split('');
                    boo.splice(300, extract.length);
                    extract = boo.join('');
                    items.push(
                        '<li class="well">' +
                            '<h4>' + data.query.pages[val].title + '</h4>' +
                            '<p>' + extract + ' ...</p>' +
                        '</li>');
                });
                $('<ul>', {
                    html: items.join('')
                }, '</ul>').appendTo('#wikipedia');
                console.log(pagesId);
            },
        });

    }

    //deferred.then(console.log('LOL ' + temphtml));
    console.log('LOL ');
    return;
}