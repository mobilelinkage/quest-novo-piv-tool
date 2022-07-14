/**
 * *
 * Feature: Get needed info (segment ID, Account ID, etc) and store it to localStorage for future access
 * Note : Clearing localStorage items when it's first session
 *
 *  Required Storage Data :
 *
 **/

var segment = (function ($) {

    //Constants
    const match_environment_url = 'localhost:3000';
    const SEGMENT_ID_TEST = "GLP-1 Skippers";

    //Private variables
    var _is_veeva_env;
    var _call_id;
    var _is_incall;
    var _account_id;
    var _segment_id;
    var _product_id;

    var init = function () {
        checkEnv();

        // console.log("_is_veeva_env Env : " + _is_veeva_env);
        // console.log("_call_id :" + _call_id);
        // console.log("_account_id :" + _account_id);
        // console.log("_segment_id :" + _segment_id);
        // console.log("_product_id :" + _product_id);
    };

    /**
    *
    * Check environment
    *
    **/

    var checkEnv = function () {
        var get_current_url = window.location.host;

        //only start the segmentation in veeva env
        _is_veeva_env = false;
        _is_veeva_env = (get_current_url.indexOf(match_environment_url) > -1) ? false : true;

        //moving to 1st step "Call ID"
        checkCallID();
    }

    /**
    *
    * Call ID
    *
    **/
    //TODO : replace by getting from storage instead of doing twice
    var checkCallID = function () {

        //Example for checking if user is in a Call and if it’s a new Call
        _call_id = localStorage.getItem('ozempic-call-id');
        _is_incall = localStorage.getItem('ozempic-is-in-call');

        //check is user is in veeva environment first
        if (_is_veeva_env) {
            com.veeva.clm.getDataForCurrentObject('Call', 'Id', setCallLocalStorage)

        } else {
            var resultC = checkForCallTest();
            setCallLocalStorage(resultC);
        }

    }

    var setCallLocalStorage = function (result) {
        if (result.success) {
            //user is in a call (includeing local fake call)
            _is_incall = true;

            if (result.Call.Id === _call_id) {

                //same call ID as before, so no need to do anything for storing ID datas. Release stored event so that related code start executing.
                releaseCompleteEvent();
                return;

            } else {
                //new call ID

                //Clear storage item for new session
                clearLocalStorage();

                _call_id = result.Call.Id;

                //reset tab history storage when new call starts.
                localStorage.removeItem('ozempic-study-history');
            }
        } else {
            //user is not in a call
            _is_incall = false;

            //Clear storage and set call id as undefined. (when swithed from call to no call...)
            //TODO : figure out the way to detect first session when not in call
            // if (localStorage.getItem('ozempic-call-id') !== 'undefined') {
            //     clearLocalStorage();
            //     _call_id = 'undefined'
            // }

            clearLocalStorage();
            _call_id = 'undefined'
        }

        localStorage.setItem('ozempic-call-id', _call_id);
        localStorage.setItem('ozempic-is-in-call', _is_incall);

        //moving to 2nd step "account ID"
        checkAccountID();
    }

    var clearLocalStorage = function () {
        localStorage.removeItem('ozempic-account-id');
        localStorage.removeItem('ozempic-call-id');
        localStorage.removeItem('ozempic-is-in-call');
        localStorage.removeItem('ozempic-seen-slide');
        localStorage.removeItem('ozempic-segment-type');
        localStorage.removeItem('ozempic-segment-id');
        localStorage.removeItem('ozempic-product-id');
    }

    var checkForCallTest = function () {
        return {
            Call: {
                Id: "D5466499-D318-4370-8757-6ACCD29D1DEX"
            },
            success: true
        };
    };

    /**
    *
    * Account ID
    *
    **/

    var checkAccountID = function () {

        //get account id
        _account_id = localStorage.getItem('ozempic-account-id');

        if (_is_veeva_env) {

            if (_is_incall) {
                com.veeva.clm.getDataForCurrentObject("Account", "Id", setAccountLocalStorage);

            } else {
                // not in call, set false
                setAccountLocalStorage(false);
            }

        } else {
            //local test, get and pass fake data
            var resultA = checkForAccountTest();
            setAccountLocalStorage(resultA);
        }

    }

    var checkProductID = function () {
       
        if (_is_veeva_env) {

           com.veeva.clm.getDataForCurrentObject("Presentation", "Product_vod__c", setProductLocalStorage);

        } else {
            //local test, get and pass fake data
            var resultA = checkForProductTest();
            setProductLocalStorage(resultA);
        }

    }

    var setAccountLocalStorage = function (result) {
        if (!result) {
            _account_id = undefined;
            localStorage.setItem('ozempic-account-id', _account_id);

        } else if (result.success) {
            if (result.Account.Id === _account_id) {
                //same Account ID as before
            }
            else {
                _account_id = result.Account.Id;
                localStorage.setItem('ozempic-account-id', _account_id);
                //new Account ID
            }
        } else {
            //user no account
            _account_id = undefined;
            localStorage.setItem('ozempic-account-id', _account_id);
        }

        //moving to 3rd step "Segment ID"
        checkProductID();
    }

    var setProductLocalStorage = function (result) {
        if (!result) {
            _product_id = undefined;
            localStorage.setItem('ozempic-product-id', _product_id);

        } else if (result.success) {
            if (result.Presentation.Product_vod__c === _product_id) {
                //same Product ID as before
            }
            else {
                _product_id = result.Presentation.Product_vod__c;
                localStorage.setItem('ozempic-product-id', _product_id);
                //new Product ID

            }
        } else {
            //user no Product ID
            _product_id = undefined;
            localStorage.setItem('ozempic-product-id', _product_id);
        }

        //moving to 3rd step "Segment ID"
        checkSegmentID();
    }

    var checkForAccountTest = function () {
        return {
            Account: {
                Id: "0015B00000K9zZWQAZ"
                // Id: "0015B00000K9zZWQAY"
            },
            success: true
        };
    };

    var checkForProductTest = function () {
        return {
            Presentation: {
                Product_vod__c: "a004C000002ZnV7QAK"
            },
            success: true
        };

    };

    /**
    *
    * Segment ID
    *
    **/

    var checkSegmentID = function () {

        //get segment id
        _segment_id = localStorage.getItem('ozempic-segment-id');

        if (_is_veeva_env) {

            if (_is_incall) {

                querySegment();

            } else {
                // not in call, set as default
                setSegmentLocalStorage("default");
            }

        } else {
            var resultS = checkForSegmentTest();
            setSegmentLocalStorage(resultS);
        }
    }

    var setSegmentLocalStorage = function (result) {

        if (result == "default") {

            _segment_id = "Default";
            localStorage.setItem('ozempic-segment-id', _segment_id);

        } else if (result.success) {

            if (result.Product_Metrics_vod__c.nni_Behavior_Segment__c === _segment_id) {
                //same Segment ID as before
            } else {
                //new Segment ID
                _segment_id = result.Product_Metrics_vod__c[0].nni_Behavior_Segment__c;
                localStorage.setItem('ozempic-segment-id', _segment_id);
            }
        } else {
            //user no account
            _segment_id = "Default";
            localStorage.setItem('ozempic-segment-id', _segment_id);
        }

        releaseCompleteEvent();

    }

    var checkForSegmentTest = function () {
        return {
            "success": true,
            "Product_Metrics_vod__c": [{
                nni_Behavior_Segment__c: SEGMENT_ID_TEST,
                Account_vod__c: "0015B00000K9zZWQAZ"
            }],
            "record_count": 1
        }
    };

    //get segment id function
    var querySegment = function () {
        var objectName = "Product_Metrics_vod__c";
        var fields = ["Account_vod__c", "nni_Behavior_Segment__c", "Products_vod__c"];
        var whereClause = "WHERE Account_vod__c='" + _account_id + "' AND Products_vod__c ='"+ _product_id +"'";
        var sortClause = ["nni_Behavior_Segment__c, ASC"];
        var limit = "10";
        com.veeva.clm.queryRecord(objectName, fields, whereClause, sortClause, limit, function (result) {
            setSegmentLocalStorage(result);
        });
    }

    var releaseCompleteEvent = function () {
        //releasing custom event "segmentIdStored" for proceeding related script
        console.log("releasing custom event 'segmentIdStored'")
        $(window).trigger("segmentIdStored");
    }

    var public_interface = {};
    public_interface.init = function () {
        init();
    };

    return public_interface;

}(jQuery));

(function ($) {
    $(document).ready(function () {
        $(window).on("BriefcaseCompleted", function () {
            segment.init();
        });
    });
})(jQuery);