/**
 *
 * Dependencies:
 * - veeva-library.js
 * - iscroll.js (if utilizing trackScrolling)
 * - jquery
 *
 * Requirements:
 * - top.htm -- <body> must have attribute: data-slideId="<%=s.slide_id%>"
 *
 * Based on:
 * Veeva ClickStream tracking class.
 * Author: Jeremy Daley
 * Liscence: MIT
 */

ClickStream.prototype.calls             = []; // Queued calls
ClickStream.prototype.debug             = false; // Set true or false for debugging


function ClickStream(debug){
    var is_veeva_env           = false; //only start the clickstream in veeva env
    var match_environment_url  = 'localhost:3000';
    var get_current_url = window.location.host,
    is_veeva_env = (get_current_url.indexOf(match_environment_url) > -1)? false : true;
    if(!is_veeva_env){
        debug = true;
    }
    if (debug === true){
        this.debug = debug;
        com.veeva.clm.testMode = debug;
    }
}

/**
 * Veeva can't take more than one action at a time, so we have to queue up each call
 * @param  {string}   action    'update' or 'create'
 * @param  {string}   type      Something like 'Call_Clickstream_vod__c'
 * @param  {string}   id        ID if updating
 * @param  {object}   obj       Tracking fields/values to send to Veeva
 * @param  {Function} callback
 */
ClickStream.prototype.queue = function(action, type, id, obj, callback){
    var self = this;
    var call = {
        action:     action,
        type:       type,
        id:         id,
        obj:        obj,
        callback:   callback
    };
    this.calls.push( call );

    // If this is the first item in the queue, go ahead and call it right away
    if (this.calls.length == 1){
        makeCall( call );
    }else{
        makeCall( this.calls[0] );
    }

    function makeCall(call){
        console.log(call);

        // If we're running in debug mode, we wanna make act like the records were successfully created/updated
        if (self.debug === true) {
            queueCallback( {Call_Clickstream_vod__c: {ID: new Date().getTime()}} );
            return;
        }

        switch( call.action ) {
            case 'update':
                console.log('running update');
                com.veeva.clm.updateRecord(call.type, call.id, call.obj, queueCallback);
                break;
            case 'create':
                console.log('running call');
                com.veeva.clm.createRecord(call.type, call.obj, queueCallback);
                break;
        }
    }

    function queueCallback(data, _action){
        // Call the original callback function
        self.calls[0].callback( data );
        // Remove the current item in the queue
        self.calls.shift();

        // If there's anything left in the queue, let's call it.
        if (self.calls.length > 0)
            makeCall( self.calls[0] );
    }
}

/**
 * A callback "ground".
 */
ClickStream.prototype.noop = function(data){
    // Do nothing
    console.log('results', data);
};

/**
 * Tracking a swipe action, no duration.
 *
 * @param  {string} description Descriptive string value of event | ex: 'Safety Information' | compiles to: 'Swipe left/next on Safety Information'
 * @param  {string} direction Descriptive string value of swipe direction | ex: 'left/next' | compiles to: 'Swipe left/next on Safety Information'
 * @param  {function} callback Callback function
 */
ClickStream.prototype.trackSwipeAction = function(description, direction, callback){
    var self = this;
    var id = $('body').attr('data-slideId');
    var completeDescription = 'Swipe ' + direction + ' on ' + description;
    var obj = {
        'Track_Element_Id_vod__c':          id,
        'Track_Element_Type_vod__c':        'Swipe Action',
        'Track_Element_Description_vod__c': completeDescription,
        'Answer_vod__c':                    completeDescription,
        'Usage_Start_Time_vod__c':          new Date()
    };

    if (self.debug){
        console.log('trackSwipeAction:', obj);
    }else{
        self.queue('create', 'Call_Clickstream_vod__c', null, obj, callback);
    }
};

/**
 * Tracking a button tap, no duration.
 *
 * @param  {string} description Descriptive string value of event | ex: 'MOA modal open' | compiles to: 'MOA modal open button tapped'
 *
 * - Automatically triggered for all modal buttons in: boilerplate.modal.js. Buttons must have attr 'data-button-name'.
 */
ClickStream.prototype.trackButtonTap = function(description, callback){
    var self = this;
    var id = $('body').attr('data-slideId');
    var completeDescription = description + ' button tapped';
    var obj = {
        'Track_Element_Id_vod__c':          id,
        'Track_Element_Type_vod__c':        'Button Tap',
        'Track_Element_Description_vod__c': completeDescription,
        'Answer_vod__c':                    completeDescription,
        'Usage_Start_Time_vod__c':          new Date()
    };

    if (self.debug){
        console.log('trackButtonTap:', obj);
    }else{
        //self.queue('create', 'Call_Clickstream_vod__c', null, obj, self.noop);
        self.queue('create', 'Call_Clickstream_vod__c', null, obj, callback);
    }
};

/**
 * Tracking a modal opening, no duration.
 *
 * @param  {string} description Descriptive string value of event | ex: 'References Modal' | compiles to: 'References Modal open'
 *
 * - Automatically triggered for all modal buttons in: boilerplate.modal.js. Buttons must have attr 'data-modal-name'.
 */
ClickStream.prototype.trackModalOpen = function(description){
    var self = this;
    var id = $('body').attr('data-slideId');
    var completeDescription = description + ' modal opened';
    var obj = {
        'Track_Element_Id_vod__c':          id,
        'Track_Element_Type_vod__c':        'Modal Open',
        'Track_Element_Description_vod__c': completeDescription,
        'Answer_vod__c':                    completeDescription,
        'Usage_Start_Time_vod__c':          new Date()
    };

    if (self.debug){
        console.log('trackModalOpen:', obj);
    }else{
        self.queue('create', 'Call_Clickstream_vod__c', null, obj, self.noop);
    }
};

/**
 * Tracking a video being played, paused or stopped. Tracks duration in seconds and percentage.
 *
 * @param  {string} video Video element being tracked
 * @param  {string} description Descriptive string value of event | ex: 'MOA video' | compiles to: 'MOA video played to 70%'
 */
ClickStream.prototype.trackVideo = function(video, description){
    var self = this;
    var id = $('body').attr('data-slideId');
    var clickstreamID = null;
    var clickstreamObj = {};
    var durationInterval;

    updateVideoDuration = function(e, time) {
        var currentTimePercentage = parseInt(time/e.currentTarget.duration * 100) +  "%";
        var currentTime = parseInt(time);

        var completeDescription = description + ' played to ' + currentTimePercentage;

        console.log('update', completeDescription);

        if (clickstreamID != null) {
            if (currentTime > clickstreamObj.Usage_Duration_vod__c) {
                clickstreamObj.Track_Element_Description_vod__c = completeDescription;
                clickstreamObj.Answer_vod__c = completeDescription;
                clickstreamObj.Usage_Duration_vod__c = currentTime;
                self.queue('update', 'Call_Clickstream_vod__c', clickstreamID, clickstreamObj, self.noop);
            }
        }
    };

    updateVideoDurationEnded = function(e) {
        var currentTimePercentage = '100%';
        var currentTime = e.currentTarget.duration;

        var completeDescription = description + ' played to ' + currentTimePercentage;

        console.log('update', completeDescription);

        if (clickstreamID != null) {
            if (currentTime > clickstreamObj.Usage_Duration_vod__c) {
                clickstreamObj.Track_Element_Description_vod__c = completeDescription;
                clickstreamObj.Answer_vod__c = completeDescription;
                clickstreamObj.Usage_Duration_vod__c = currentTime;
                self.queue('update', 'Call_Clickstream_vod__c', clickstreamID, clickstreamObj, self.noop);
            }
        }
    };

    clearingInterval = function() {
        clearInterval(durationInterval);
    };

    $(video).on('play', function(e) {
        var video = e;

        if (clickstreamID != null) {
            console.log('video already exists');

            durationInterval = setInterval(function() {
                updateVideoDuration(video, video.currentTarget.currentTime);
            }, 1000);

        } else {
            console.log('new video, no ID');

            var completeDescription = description + ' played to 0%';
            var obj = {
                'Track_Element_Id_vod__c':          id,
                'Track_Element_Type_vod__c':        'Video Playing',
                'Track_Element_Description_vod__c': completeDescription,
                'Answer_vod__c':                    completeDescription,
                'Usage_Start_Time_vod__c':          new Date(),
                'Usage_Duration_vod__c':            0
            };

            if (self.debug){
                console.log('trackVideoPlaying', obj);
                clickstreamID = 'debug'; // need fake ID to debug
                clickstreamObj = $.extend(true, {}, obj);
                durationInterval = setInterval(function() {
                    updateVideoDuration(video, video.currentTarget.currentTime);
                }, 1000);
            } else {
                self.queue('create', 'Call_Clickstream_vod__c', null, obj, function(data){
                    if(data.success == true){
                        clickstreamID = data.Call_Clickstream_vod__c.ID;
                        clickstreamObj = $.extend(true, {}, obj);
                        durationInterval = setInterval(function() {
                            updateVideoDuration(video, video.currentTarget.currentTime);
                        }, 1000);
                    }
                });
            }
        }
    });

    $(video).on('pause', function(e) {
        // Check that video is paused, not ended
        if (e.currentTarget.currentTime != e.currentTarget.duration) {
            var completeDescription = description + ' video paused/stopped';
            var obj = {
                'Track_Element_Id_vod__c':          id,
                'Track_Element_Type_vod__c':        'Video Paused/Stopped',
                'Track_Element_Description_vod__c': completeDescription,
                'Answer_vod__c':                    completeDescription,
                'Usage_Start_Time_vod__c':          new Date()
            };

            if (self.debug){
                console.log('trackVideoPaused', obj);
                updateVideoDuration(e, e.currentTarget.currentTime);
                clearingInterval();
            } else {
                updateVideoDuration(e, e.currentTarget.currentTime);
                clearingInterval();
                self.queue('create', 'Call_Clickstream_vod__c', null, obj, self.noop);
            }
        }
    });

    $(video).on('ended', function(e) {
        var completeDescription = description + ' video ended';
        var obj = {
            'Track_Element_Id_vod__c':          id,
            'Track_Element_Type_vod__c':        'Video Ended',
            'Track_Element_Description_vod__c': completeDescription,
            'Answer_vod__c':                    completeDescription,
            'Usage_Start_Time_vod__c':          new Date()
        };

        if (self.debug){
            console.log('trackVideoEnded', obj);
            updateVideoDurationEnded(e);
            clearingInterval();
        }else{
            updateVideoDurationEnded(e);
            clearingInterval();
            self.queue('create', 'Call_Clickstream_vod__c', null, obj, self.noop);
        }
    });
};


/**
 * Tracking form submission, no duration.
 *
 * @param  {string} description Descriptive string value of event | ex: 'Email for CRM' | compiles to: 'Email for CRM form submitted'
 */
ClickStream.prototype.trackFormSubmission = function(description){
    var self = this;
    var id = $('body').attr('data-slideId');
    var completeDescription = description + ' form submitted';
    var obj = {
        'Track_Element_Id_vod__c':          id,
        'Track_Element_Type_vod__c':        'Form Submission',
        'Track_Element_Description_vod__c': completeDescription,
        'Answer_vod__c':                    completeDescription,
        'Usage_Start_Time_vod__c':          new Date()
    };

    if (self.debug){
        console.log('trackFormSubmission:', obj);
    }else{
        self.queue('create', 'Call_Clickstream_vod__c', null, obj, self.noop);
    }
};


/**
 * Tracking content being scrolled, including a percentage of how far the content was scrolled.
 *
 * @param  {string} description Descriptive string value of event | ex: 'ISI' | compiles to: 'ISI scrolled to 70%'
 * @param  {string} scrollObject iScroll Object | ex. 'ISIscroll'
 */
ClickStream.prototype.trackScrolling = function(description, scrollObject){
    var self = this;
    var id = $('body').attr('data-slideId');
    var clickstreamID = null;
    var prevScrollPercentage = 0;

    scrollObject.on('scrollEnd', function() {
        var scrollPercentage = parseInt((this.y / scrollObject.maxScrollY) * 100);

        // Prevent value over 100, if scroll bounces
        if (scrollPercentage > 100)
            scrollPercentage = 100;

        var completeDescription = description + ' scrolled to ' + scrollPercentage + '%';
        var obj = {
            'Track_Element_Id_vod__c':          id,
            'Track_Element_Type_vod__c':        'Content Scroll',
            'Track_Element_Description_vod__c': completeDescription,
            'Answer_vod__c':                    completeDescription,
            'Usage_Start_Time_vod__c':          new Date()
        };


        // if this is the first time user scrolls, create a new clickstream object
        if (clickstreamID == null) {
            if (self.debug){
                console.log('trackScrolling:', obj);
            }else{
                self.queue('create', 'Call_Clickstream_vod__c', null, obj, function(data) {
                // on success, store the clickstream object ID for updating
                if(data.success == true){
                    clickstreamID = data.Call_Clickstream_vod__c.ID;
                    prevScrollPercentage = parseInt(scrollPercentage);
                 }
                 });
            }
        } else {
            // check to ensure the scroll percentage is larger than previous scroll percentage to prevent updating the object to a smaller percentage if the user has scrolled back up in the content
            if (scrollPercentage > prevScrollPercentage) {
                if (self.debug){
                    console.log('trackScrolling:', obj);
                }else{
                    self.queue('update', 'Call_Clickstream_vod__c', clickstreamID, obj, function(data) {
                    prevScrollPercentage = parseInt(scrollPercentage);
                    });
                }
            }
        }

    });
};

/**
 * Tracking the start of an animation, includes duration.
 *
 * @param  {string} target Animation element to be tracked
 *
 * Note: target element must have 'data-animation-name' attribute |  ex: data-animation-name="Efficacy chart animation"
 */
ClickStream.prototype.trackAnimationPlay = function(target) {

    var self = this;

    $(target).one("animationend", function(event) {
        // console.log('animation ended');

        var description = $(target).attr('data-animation-name');
        var animationTime = event.originalEvent.elapsedTime;

        var id = $('body').attr('data-slideId');
        var completeDescription = description + ' animation play';
        var obj = {
            'Track_Element_Id_vod__c':          id,
            'Track_Element_Type_vod__c':        'Animation Play',
            'Track_Element_Description_vod__c': completeDescription,
            'Answer_vod__c':                    completeDescription,
            'Usage_Start_Time_vod__c':          new Date(),
            'Usage_Duration_vod__c':            animationTime
        };

        if (self.debug){
            console.log('trackAnimationPlay:', obj);
        }else{
            self.queue('create', 'Call_Clickstream_vod__c', null, obj, self.noop);
        }
    });
};


/**
 * This is a page tracking call, that should be started at the load of a page. It uses a
 * timer to continually update the duration on the page
 *
 * @param  {string} description Descriptive string value of event | ex: 'Dosing' | compiles to: 'Dosing slide time on slide'
 */
ClickStream.prototype.trackTimeOnSlide = function(description) {
    var self = this;
    var id = $('body').attr('data-slideId');
    var completeDescription = description + ' slide time on slide';
    var obj = {
        'Track_Element_Id_vod__c':          id,
        'Track_Element_Type_vod__c':        'Time on slide',
        'Track_Element_Description_vod__c': completeDescription,
        'Answer_vod__c':                    completeDescription,
        'Usage_Start_Time_vod__c':          new Date(),
        'Usage_Duration_vod__c':            1
    };

    if (self.debug){
        console.log('trackTimeOnSlide:', obj);
    }else{
        self.queue('create', 'Call_Clickstream_vod__c', null, obj, function(data){
            if(data.success == true){
                var duration = 1;
                // Every second, we need to update the Duration field for this record
                window.setInterval(function(){
                    duration++;
                    obj['Usage_Duration_vod__c'] = duration;

                    self.queue('update', 'Call_Clickstream_vod__c', data.Call_Clickstream_vod__c.ID, obj, self.noop);
                },  5000);
            }
        });
    }
};

/**
 * Tracking a slide being loaded.
 *
 * @param  {string} description Descriptive string value of event | ex: 'Dosing' | compiles to: 'Dosing slide load'
 */
ClickStream.prototype.trackSlideLoad = function(description){
    var self = this;
    var id = $('body').attr('data-slideId');
    var completeDescription = description + ' slide load';
    var obj = {
        'Track_Element_Id_vod__c':          id,
        'Track_Element_Type_vod__c':        'Slide Load',
        'Track_Element_Description_vod__c': completeDescription,
        'Answer_vod__c':                    completeDescription,
        'Usage_Start_Time_vod__c':          new Date()
    };

    if (self.debug){
        console.log('trackSlideLoad:', obj);
    }else{
        self.queue('create', 'Call_Clickstream_vod__c', null, obj, self.noop);
    }

};

var clickstream = new ClickStream();

