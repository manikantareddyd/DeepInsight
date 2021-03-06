﻿/* Common app functionality */


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
            genSentiment(text);
            $('#action-box').slideDown('fast');
            //genImages();
            getLocation();
           //  Call everything... The Name is Misleading but befitting.
            populatePage(text);
            genDeepDive(text);
            
            //genNews();
            //genWeb();
            //genTwitter();
            
        };
    };
    return app;
})();
