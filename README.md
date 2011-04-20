## About ##

A userscript for better [ChatWork](http://www.chat-work.com/) notification.
Supports Growl and dock badge when running in Fluid.

When a new message arrives, the script will

 * Change the color of the page header to a nice red
 * Show a Growl notification (on Fluid)
 * Add a dock icon badge with the number of unread messages (on Fluid)


Tested on Fluid and Google Chrome on Mac OS X 10.6.


## How to install: Fluid ##

First, create a site-specific browser for ChatWork with [Fluid](http://www.fluidapp.com/). Then add [the script](https://github.com/ento/chatwork_alert/blob/master/chatwork_growl.user.js) from the scripts menu.


### To install with git goodness ###

    cd /path/to/somewhere
    git clone https://github.com/ento/chatwork_alert.git
    ln -s /path/to/somewhere/chatwork_alert/chatwork_alert.user.js \
      /Users/<Your username>/Library/Application\ Support/Fluid/SSB/<Your ChatWork Fluid app name>/Userscripts/


## How to install: Google Chrome ##

Open [the raw script](https://github.com/ento/chatwork_alert/blob/master/chatwork_growl.user.js) in your browser and install it. Chrome will automatically convert it into an extension.


## How to install: Safari and Firefox ##

Get GreaseKit if you're on Safari, Greasemonkey on Firefox, and install [the script](https://github.com/ento/chatwork_alert/blob/master/chatwork_growl.user.js) as usual.
