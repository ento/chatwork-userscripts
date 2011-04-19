// ==UserScript==
// @name        chatwork_growl
// @namespace   http://fluidapp.com
// @description ChatWork Growl notification for fluid
// @include     https://www.chat-work.com/*
// @author      Marica Odagaki
// ==/UserScript==

(function () {
    var NORMAL_SECTION_HEADER_BG = "#769D03";
    var ALERT_SECTION_HEADER_BG = "#9D0303";
    var NORMAL_PAGE_HEADER_BG = "-webkit-gradient(linear, 0% 0%, 0% 100%, from(#3F5A86), to(#243553))";
    var ALERT_PAGE_HEADER_BG = "-webkit-gradient(linear, 0% 0%, 0% 100%, from(#CB5454), to(#7D2F2F))";
    function updateAlert() {
        if (!RL) {
            return;
        }
        var sectionHeaderBackground = NORMAL_SECTION_HEADER_BG;
        var pageHeaderBackground = NORMAL_PAGE_HEADER_BG;
        var unreadCount = countNewMessages(RL.rooms)
        if (unreadCount > 0) {
            sectionHeaderBackground = ALERT_SECTION_HEADER_BG;
            pageHeaderBackground = ALERT_PAGE_HEADER_BG;
        }

        fluid.dockBadge = unreadCount > 0 ? unreadCount : null;

        var currentBG = $(".tm_header_bg").css("background-image");
        currentBG = replaceRGBWithHex(currentBG);
        if(currentBG.toLowerCase() != pageHeaderBackground.toLowerCase()) {
            if (unreadCount > 0) {
                // rising edge: new message has just arrived
                showGrowlNotification("New message.");
            }
            // falling edge: no more new messages
            $(".tm_header_bg").css("background-image", pageHeaderBackground);
        }
    }
    function showGrowlNotification(description) {
        fluid.showGrowlNotification({
				title: "ChatWork",
				description: description,
				priority: 0,
				sticky: false
        });
    }
    function countNewMessages(rooms) {
        var count = 0
        for(var i in rooms) {
            count += rooms[i].getUnreadNum();
        }
        return count;
    }
    function replaceRGBWithHex(str) {
        return str.replace(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/g, rgb2hex);
    }
    function rgb2hex(str, r, g, b, offset, s) {
        function hex(x) {
            return ("0" + parseInt(x).toString(16)).slice(-2);
        }
        return "#" + hex(r) + hex(g) + hex(b);
    }
    if (window.fluid) {
		// do yer thang!
        window.updateAlertInterval = setInterval(updateAlert, 1000);
        for (var i in fluid) {
            window.console.log(i + ": " + fluid[i]);
        }
    }
})();