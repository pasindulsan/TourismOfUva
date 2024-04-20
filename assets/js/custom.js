(function ($) {
    "use strict";
    var mainApp = {

        main_fun: function () {
          
       
            // PRETTYPHOTO FUNCTION 

            $("a.preview").prettyPhoto({
                social_tools: false
            });

          
            /*====================================
               WRITE YOUR SCRIPTS BELOW 
           ======================================*/


        },

        initialization: function () {
            mainApp.main_fun();

        }

    }
    // Initializing ///

    $(document).ready(function () {
        mainApp.main_fun();
    });

}(jQuery));



