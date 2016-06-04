//This part binds the data with office and then send the text to the 'app'. 
//Look at getDataFromSelection... Its has a asynchronous method whose output callbacks a method SendDataToApp


(function () {
    "use strict";
    // The initialize function must be run each time a new page is loaded
    Office.initialize = function (reason) {
        $(document).ready(function () {
            app.initialize();
            $('#get-data-from-selection-head').hide();
            $('#get-data-from-selection').click(getDataFromSelection);
            $('#get-data-from-selection-head').click(getDataFromSelection);
            
        });
    };

    // Reads data from current document selection and displays a notification
    function getDataFromSelection() {
        $('#get-data-from-selection-head').slideDown('fast');

        Office.context.document.getSelectedDataAsync(Office.CoercionType.Text, function (result) {
            if (result.status === Office.AsyncResultStatus.Succeeded) {
                app.showActionBox(result.value);
            } else {
                app.showActionBox('Error:', result.error.message);
            }
        });
    }
})();
 