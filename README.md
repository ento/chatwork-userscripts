## About: chatwork_alert ##

A userscript for better [ChatWork](http://www.chat-work.com/) notification.
Supports Growl and dock badge when running in Fluid.

Tested on Fluid and Google Chrome on Mac OS X 10.6.

### Features ###

When a new message arrives, the script will

 * Change the color of the page header to a nice red

   ![Screenshot of a red page header][1]

 * Blink the favicon

[1]: https://img.skitch.com/20110420-guggcy81fe54jfgnnaik8che8m.png
[2]: https://img.skitch.com/20110423-jxj5twftchy175s5ws388pjsiy.png


### Fluid extras ###

 * Show a Growl notification (on Fluid)

   ![Screenshot of a Growl notification][2]

 * Add a dock icon badge with the number of unread messages (on Fluid)

   ![Screenshot of a dock icon badge][3]

[3]: https://img.skitch.com/20110420-8nida44kjaynqxm988fu358cjx.png
[4]: https://img.skitch.com/20110420-ewruckm161cakrhdin3781484r.png


## About: chatwork_ui ##

Another userscript for various user interface enhancements for ChatWork.
Currently it only includes the following modification:

 * Return focus to the input area immediately after changing rooms and categories.


## How to install: Fluid ##

First, create a site-specific browser for ChatWork with [Fluid](http://www.fluidapp.com/). Then add the scripts ([chatwork_alert][chatwork_alert.user.js], [chatwork_ui][chatwork_ui.user.js]) from the scripts menu.

[chatwork_alert.user.js]: https://github.com/ento/chatwork_alert/blob/master/chatwork_alert.user.js
[chatwork_ui.user.js]: https://github.com/ento/chatwork_alert/blob/master/chatwork_ui.user.js


### To install with git goodness ###

    cd /path/to/somewhere
    git clone https://github.com/ento/chatwork_alert.git
    ln -s /path/to/somewhere/chatwork_alert/chatwork_alert.user.js \
      /Users/<Your username>/Library/Application\ Support/Fluid/SSB/<Your ChatWork Fluid app name>/Userscripts/


## How to install: Google Chrome ##

Open the raw script ([chatwork_alert][chatwork_alert.user.js], [chatwork_ui][chatwork_ui.user.js]) in your browser and install it. Chrome will automatically convert it into an extension.



## How to install: Safari and Firefox ##

Get GreaseKit if you're on Safari, Greasemonkey on Firefox, and install the scripts ([chatwork_alert][chatwork_alert.user.js], [chatwork_ui][chatwork_ui.user.js]) as usual.
