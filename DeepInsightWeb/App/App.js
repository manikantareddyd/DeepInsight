/* Common app functionality */

var app = (function () {
    "use strict";
    var app = {};

    // Common initialization function (to be called from each page)
    app.initialize = function () {
        $('#action-box').hide();
        
        $('#action-box-close').click(function () {
            $('#get-data-from-selection-head').slideUp('fast');
            $('#action-box').slideUp('fast');
            $('#wikipedia').html('');
        });

        // After initialization, expose a common notification function
        app.showActionBox = function ( text) {

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
            //$("#articles").html('<iframe src="https://scholar.google.co.in/scholar?hl=en&q=Hello" />');
            //$.ajax({
            //    "url": "https://scholar.google.co.in/scholar?hl=en&q=Hello",
            //    headers: {
            //        'Access-Control-Allow-Origin': '*',
            //        'Origin':"google.co.in"
            //    },
            //    dataType: 'text/html',
            //    error: function (xhr, ajaxOptions, thrownError) {
            //        console.log("Boom");
            //        console.log(thrownError);
            //    },
            //    success: function (data) {
            //        console.log(data);

            //    }
            //});

            var invocation = new XMLHttpRequest();
            var url = 'https://scholar.google.co.in/scholar?hl=en&q=Hello';

            function callOtherDomain() {
                if (invocation) {
                    invocation.open('GET', url, true);
                    invocation.onreadystatechange = function (data) { console.log("Huuuu"+data)};
                    invocation.send();
                }
            }


            //});
            //$("#articles").html('<object type="text/html" data="https://scholar.google.co.in/scholar?hl=en&q=Hello" style="width:100%; height:100%"/>');
            //$("#articles").load('https://scholar.google.co.in/scholar?hl=en&q=Hello');
            //var site = 'https://scholar.google.co.in/scholar?hl=en&q=Hello';
            //var yql = 'http://query.yahooapis.com/v1/public/yql?q=' + encodeURIComponent('select * from html where url="' + site + '"') + '&format=xml&callback=cbFunc';
            //console.log("Haha "+yql);
            //$.getJSON( yql, function(data){
            //    console.log("Humm "+data);
            //});
            //$.ajax({
            //    type: "GET",
            //    "url": 'https://query.yahooapis.com/v1/public/yql?q=' + encodeURIComponent('select * from html where url="' +
            //        'https://scholar.google.co.in/scholar?hl=en&q=Hello' +
            //        '"') + '&format=json',
            //    dataType: "jsonp",
            //    error: function (xhr, ajaxOptions, thrownError) {
            //        console.log("Boom2"+thrownError);
                    
            //    },
            //    success: function (data) {
            //        console.log(data);
            //    },
            //});

            return;
        }
    };

    return app;
})();