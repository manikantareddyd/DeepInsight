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
            getTopicsData(text);
            //var topicsData = getTopicsData(text);
            //var topicsList = topicsData[0];
            //var topicsWikiLinks = topicsData[1];
            $('#topics-dictionary').html('');
            //app.genTopicsDictHTML(topicsList);

            $('#images').html(text);
            //app.genImagesHTML(topicsList);

            $('#wikipedia').html('');
            //$(document).ready(genWikipedia(topicsList));

            $('#articles').html(Office.toString());
            //app.genArticles(topicsList);
        };

        

        app.genTopicsDictHTML = function (topicsList) {
            
            return;
        };

        app.genImagesHTML = function (topicsList) {
            return;
        }

        

        app.genArticles = function (topicsList) {

            return;
        }
    };

    return app;
})();