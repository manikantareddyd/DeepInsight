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
            genImages();
            // Call everything... The Name is Misleading but befitting.
            populatePage(text);
            genSentiment();
            genDeepDive();
            genNews();
            
        };
    };
    return app;
})();
