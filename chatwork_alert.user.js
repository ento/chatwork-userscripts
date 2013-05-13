// ==UserScript==
// @name        chatwork_alert
// @version     1.2.0
// @namespace   http://fluidapp.com
// @description Better ChatWork notification. Supports notification via Growl and dock badge when running in Fluid.
// @include     https://www.chat-work.com/*
// @include     https://www.chatwork.com/*
// @author      Marica Odagaki
// ==/UserScript==
//
// Released under the Simplified BSD License.


function main() {


// Favicon.js - Change favicon dynamically [http://ajaxify.com/run/favicon].
// Copyright (c) 2008 Michael Mahemoff. Icon updates only work in Firefox and Opera.
// Background and MIT License notice at end of file, see the homepage for more.

/* USAGE:

    favicon.change("/icon/active.ico", "new title"); // Cancels any animation/scrolling
    favicon.change("/icon/active.ico"); // leaves title alone. Cancels any animation.
    favicon.change(null, "new title"); // leaves icon alone. Cancels any scrolling.

    favicon.animate(["icon1.ico", "icon2.ico", ...]);
    favicon.animate(["icon1.ico", "icon2.ico", ...], {delay: 500} );
      // Tip: Use "" as the last element to make an empty icon between cycles.
      // Default delay is 2000ms
    // animate() cancels any previous animation

    favicon.scrollTitle("new title");
    favicon.scrollTitle("new title", { delay: 200, gap: "------"} )
      // delay is delay between each scroll unit
      // gap is string appended to title (default: "      ")
    // scrollTitle() cancels any previous scrolling

    favicon.unscroll();

    favicon.unanimate();
*/

var favicon = {

// -- "PUBLIC" ----------------------------------------------------------------

change: function(optionalIconURL, optionalDocTitle) {
  if (optionalIconURL) {
    clearTimeout(this.animateTimer);
    this.addLink(optionalIconURL, true);
  }
  if (optionalDocTitle) {
    clearTimeout(this.scrollTimer);
    document.title = optionalDocTitle;
  }
},

animate: function(iconSequence, options) {
  this.unanimate();
  options = options || {};
  options["delay"] = parseInt(options["delay"]) || 2000;
  this.preloadIcons(iconSequence);
  this.iconSequence = iconSequence;
  favicon.index = 0;
  favicon.change(iconSequence[0]);
  this.animateTimer = setInterval(function() {
    favicon.index = (favicon.index+1) % favicon.iconSequence.length;
    favicon.addLink(favicon.iconSequence[favicon.index], false);
  }, options["delay"]);
},

unanimate: function() {
  clearTimeout(this.animateTimer);
},

scrollTitle: function(title, options) {
  this.unscroll();
  options = options || {};
  options["delay"] = options["delay"] || 250;
  options["gap"]   = options["gap"]   || "     ";
  title = title+options["gap"];
  document.title = title;
  titleOffset = 0;
  this.scrollTimer = setInterval(function() { 
    var startPos = (titleOffset++) % title.length;
    var newTitle = title.substr(startPos);
    newTitle += title.substr(0,startPos);
    document.title = newTitle;
  }, options["delay"]); 
},  

unscroll: function() {
  clearTimeout(this.scrollTimer);
},
    
changeTitle: function(title) {
  document.title = title;
},

// -- "PRIVATE" ---------------------------------------------------------------

scrollTimer: null,
animateTimer: null,

preloadIcons: function(iconSequence) {
  var dummyImageForPreloading = document.createElement("img");
  for (var i=0; i<iconSequence.length; i++) {
    dummyImageForPreloading.src = iconSequence[i];
  }
},

addLink: function(iconURL) {
  var link = document.createElement("link");
  link.type = "image/x-icon";
  link.rel = "shortcut icon";
  link.href = iconURL;
  this.removeLinkIfExists();
  this.docHead.appendChild(link);
},

removeLinkIfExists: function() {
  var links = this.docHead.getElementsByTagName("link");
  for (var i=0; i<links.length; i++) {
    var link = links[i];
    if (link.type=="image/x-icon" && link.rel=="shortcut icon") {
      this.docHead.removeChild(link);
      return; // Assuming only one match at most.
    }
  }
},

docHead:document.getElementsByTagName("head")[0]
}
// -- end of favicon.js ---------------------------------------------------------------

    var $globalHeader = $('.globalHeader');
    var NORMAL_GLOBAL_HEADER_STYLE = {
      "background":  $globalHeader.css('background'),
      "border-top-color": $globalHeader.css('border-top-color'),
      "border-bottom-color": $globalHeader.css('border-bottom-color')
    };
    var ALERT_GLOBAL_HEADER_STYLE = {
      "background":  '#fd0006', // normal: #0058a8
      "border-top-color": "#fd0006", // normal: #0062bb
      "border-bottom-color": "#830000" // normal: #002d55
    };
    $('<style type="text/css">' + 
      '.globalHeader.globalHeaderAlert {' +
      'background:' + ALERT_GLOBAL_HEADER_STYLE['background'] + ';' +
      'border-top-color:' + ALERT_GLOBAL_HEADER_STYLE['border-top-color'] + ';' +
      'border-bottom-color:' + ALERT_GLOBAL_HEADER_STYLE['border-bottom-color'] + ';' +
      '}' +
      '.globalHeader.globalHeaderAlert:after {' +
      'border-bottom-color:' + ALERT_GLOBAL_HEADER_STYLE['border-top-color'] + ';' +
      '}</style>').appendTo($("head"));
    var NORMAL_FAVICON_SRC = $('link[rel="shortcut icon"]').attr("href");
    var ALERT_FAVICON_SRC = 'data:image/png;base64,' +
		'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAADC0lEQVQ4jYWTTWgcdQDFf/+ZndkPMtnd' +
		'aHa7aXZjuqlBtEpJYWkSUZB66bkVBAm2ED0VRagXhdykXvSSEq2goNC09iQebLEHP0pSKLTRhJZs1tim' +
		'ceMm3e/ZnY//zHgoFqsU3+3Bew8evCd4BD7rpS8UDp8SinpMOp0TRo25o+D9Wyf+SU6CkdHIdwRyz/Dw' +
		'3NiJdya03Vkqly+x9NXs6a7FWT0g9KfFtRloPxRwOsIL2cLkXPr5F/e2y2V36OVDkdTBcexaDa9rUTo3' +
		'T6eyRUhR+WPhxxvtjTuvTNusCoBTYOydKFw7fPbCk3p2kEBKpGnSrVax6nVkpwuui9NuITsm3ZUVrp/5' +
		'6MJUuX0kBCDC7OofKwxrAxl8x4EgoPz7bW5fXUR02ihCIRqPY/QYSMtCS6fR+zJPz5SLoRCA9OlzG3VX' +
		'mqYmhGCzVOLm+XmSiooiBIEAPwA/EkUAdq2GXS3fmgEZmo2SzTx34Nzoa1Mxq9EARWXt0kV6zA5SUdAS' +
		'CRKjo+g9BrJj4koJkQiRZGb/x81iWokZ4c+fOT49FN09gNtsYu5s01pepr1eQk0myb50iNjjKXzHwXOc' +
		'+xV1jYEDhSdiYd4NIcQ4kQh2vYEQgkAIOht3aK0usbNeolmtMjQxiaYo+LaD77r4lo2IJ9CF8rZ6OCyL' +
		'Uc04knx2H9LqoiBwbJvK4mVEp0l9aZHyjV/wtDBRw8C3bQLPw1xeorqx9oE61uWmvPtr0qt19xv5vOo5' +
		'DvHBQWQQprVexHcs/MYO0nSJj4yA51G58rN3d+Hi1+Y9/60HQzpj8MnB9z+c1nM5Ak8iVJV2uUx3awtF' +
		'04gmk/iOg99osPLlp4tTm7VxIFD+DpDwXWXhCkGriW+aONvbaLpOby5HLN573+w4dNeK2GbteyB4aMrn' +
		'QW0mOZnIPXUsCEVintXWRo6+2t9aLbJ59af1WGogo3qef++35W+Fa73xep36f84EMAMxHaK7Hgt905/f' +
		'V9gqXp9r13hPhElHwH/TpvioBz/A/Egq/0Wq54fZKJP/p/0LAq9nQqBdV08AAAAASUVORK5CYII=';

    var showingAlert = false;

    function updateAlert() {
        var unreadCount = getUnreadCount();
        updateDockBadge(unreadCount);

        prevShowingAlert = showingAlert;
        showingAlert = unreadCount > 0;

        if(showingAlert != prevShowingAlert) {
            updateGlobalHeaderBackground(showingAlert);
            if (showingAlert) {
                // rising edge: new message has just arrived
                showGrowlNotification("New message.");
                startFaviconNotification();
            } else {
                // falling edge: no more new messages
                hideFaviconNotification();
            }
        }
    }

    function getUnreadCount() {
        if (typeof RL == 'undefined') {
            return 0;
        }
        return countNewMessages(RL.rooms);
    }

    function updateGlobalHeaderBackground(isAlert) {
        var op =  isAlert ? 'addClass' : 'removeClass';
        $globalHeader[op]('globalHeaderAlert');
    }

    function updateDockBadge(unreadCount) {
        if (window.fluid) {
            fluid.dockBadge = unreadCount > 0 ? unreadCount : null;
        }
    }

    function showGrowlNotification(description) {
        if (window.fluid) {
            fluid.showGrowlNotification({
		title: "ChatWork",
		description: description,
		priority: 0,
		sticky: false
            });
        }
    }

    function startFaviconNotification() {
        favicon.animate([ALERT_FAVICON_SRC, NORMAL_FAVICON_SRC], {delay: 1000});
        setTimeout(function() {
            if (showingAlert) {
                showFaviconNotification();
            }
        }, 10000);
    }

    function showFaviconNotification() {
        favicon.change(ALERT_FAVICON_SRC);
    }

    function hideFaviconNotification() {
        favicon.change(NORMAL_FAVICON_SRC);
    }

    function countNewMessages(rooms) {
        var count = 0;
        for(var i in rooms) {
            count += rooms[i].getUnreadNum();
        }
        return count;
    }

    // do yer thang!
    var updateAlertInterval = setInterval(updateAlert, 500);
}

// warp through Chrome's isolated world
var script = document.createElement('script');
script.setAttribute('id', 'chatwork-alert-user-js');
script.appendChild(document.createTextNode('('+ main +')();'));
(document.body || document.head || document.documentElement).appendChild(script);
console.log("chatwork_alert loaded");
