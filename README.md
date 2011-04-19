## About ##

A userscript which integrates Growl notification for ChatWork running as a Fluid site-specific browser.
When a new message arrives, the script will

 * Show a Growl notification
 * Change the color of the page header to a nice red
 * Add a dock icon badge with the number of unread messages


## Usage ##

First, create a site-specific browser for ChatWork with [Fluid](http://www.fluidapp.com/). Then,

    cd /path/to/somewhere
    git clone https://github.com/ento/chatwork_growl.git
    ln -s /path/to/somewhere/chatwork_growl.user.js/chatwork_growl/ \
      /Users/<Your username>/Library/Application\ Support/Fluid/SSB/<Your ChatWork Fluid app name>/Userscripts/
