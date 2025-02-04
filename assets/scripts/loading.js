$(window).on('load', function() {
    console.log("Fully loaded");
});

function updateModuleList()
{
    console.log("updateModuleList called");
    
    $.fn.visible = function(partial) {
    
        var viewTop       = $(window).scrollTop();
        var viewBottom    = viewTop + $(window).height();
        var _top          = $(this).offset().top;
        var _bottom       = _top + $(this).height();
        var compareTop    = partial === true ? _bottom : _top;
        var compareBottom = partial === true ? _top : _bottom;
    
        return ((compareBottom <= viewBottom) && (compareTop >= viewTop));
    };
    
    var animateLeft = false;
    
    var allMods = $("div#content div#info, div#content div#title, div#content div#carousel, #show_more_button, div.card");
    // Already visible modules
    allMods.each(function(i, el) {
        var el = $(el);
        if (!el.hasClass("animateme_left")) {
            if (!el.hasClass("animateme_right")) {
                if (el.visible(true)) {
                    if (animateLeft) {
                        el.addClass("animateme_left"); 
                    }
                    else {
                        el.addClass("animateme_right"); 
                    }
                    animateLeft = !animateLeft;
                } 
            }
        }
       
    });
    
    $(document).scroll(function() {
        allMods.each(function(i, el) {
        var el = $(el);
        if (!el.hasClass("animateme_left")) {
            if (!el.hasClass("animateme_right")) {
                if (el.visible(true)) {
                    if (animateLeft) {
                        el.addClass("animateme_left"); 
                    }
                    else {
                        el.addClass("animateme_right"); 
                    }
                    animateLeft = !animateLeft;
                } 
            }
        }
      });
    });
}

$(document).ready(function() {
    console.log("Document loaded");
    /**
    * Copyright 2012, Digital Fusion
    * Licensed under the MIT license.
    * http://teamdf.com/jquery-plugins/license/
    *
    * @author Sam Sehnert
    * @desc A small plugin that checks whether elements are within
    *     the user visible viewport of a web browser.
    *     only accounts for vertical position, not horizontal.
    */
    
    updateModuleList();
});