/* Common app functionality */

var app = (function () {
    "use strict";
    var app = {};

    // Common initialization function (to be called from each page)
    app.initialize = function () {
        $.ajaxSetup({
            beforeSend: function (request) {
                request.setRequestHeader("User-Agent", "Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; AS; rv:11.0) like Gecko");
            }
        });
        $('#action-box').hide();
        
        $('#action-box-close').click(function () {
            $('#get-data-from-selection-head').slideUp('fast');
            $('#action-box').slideUp('fast');
            $('#wikipedia').html('');
        });

        // After initialization, expose a common notification function
        app.showActionBox = function ( text) {
            console.log($.browser)
            $('#action-box').slideDown('fast');
            var topicsList = app.getTopics(text);

            $('#topics-dictionary').html('');
            app.genTopicsDictHTML(topicsList);

            $('#images').html('');
            app.genImagesHTML(topicsList);

            $('#wikipedia').html('');
            $(document).ready(app.genWikipedia(topicsList));

            $('#articles').html('');
            app.genArticles(topicsList);
        };

        app.getTopics = function (text) {
            var topicsList = new Array("Hello","India");
            return topicsList;
        };

        app.genTopicsDictHTML = function (topicsList) {
            
            return;
        };

        app.genImagesHTML = function (topicsList) {
            return;
        }

        app.genWikipedia = function (topicsList) {
            var count;
            for (count = 0; count < topicsList.length; count++) {
                $.ajax({
                    type: "GET",
                    "url": "https://en.wikipedia.org/w/api.php?format=json&indexpageids=true&action=query&prop=extracts&exintro=&explaintext=&titles=" + topicsList[count],
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
                        },'</ul>').appendTo('#wikipedia');
                        console.log(pagesId);
                    },
                });

            }
                
            //deferred.then(console.log('LOL ' + temphtml));
            console.log('LOL ');
            return;
        }

        app.genArticles = function (topicsList) {
            //Backend Query
            $('#articles').html('<iframe src="https://www.bing.com/search?form=MSTLP1&q=Intelligent"></iframe>');
            
            Word.
            return;
        }
    };

    return app;
})();