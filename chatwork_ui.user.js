// ==UserScript==
// @name        chatwork_ui
// @version     1.0
// @namespace   http://fluidapp.com
// @description Better ChatWork UI.
// @include     https://www.chat-work.com/*
// @author      Marica Odagaki
// ==/UserScript==
//
// Released under the Simplified BSD License.


function main() {
    $(function() {
        function focusInputArea() {
            $("#cw_chattext").focus();
        }

        function wrapFocusEvent(target, funcname) {
            var oldFunc = target[funcname];
            target[funcname] = function() {
                oldFunc.apply(target, arguments);
                focusInputArea();
            };
        }

        if (RL) {
            wrapFocusEvent(RL, 'selectCategory');
            wrapFocusEvent(RL, 'selectRoom');
        }

        // focus on the input area on startup
        focusInputArea();
    });
};

// warp through Chrome's isolated world
var script = document.createElement('script');
script.appendChild(document.createTextNode('('+ main +')();'));
(document.body || document.head || document.documentElement).appendChild(script);
