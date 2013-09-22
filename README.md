AngularJS Breakpoint
--------------------

http://snapjay.github.com/angularjs-breakpoint/


AngularJS directive that set breakpoints for responsive websites.
-----------------------------------------------------------------
Add the breakpoint directive to the body tag
Define as many breakpoints as you want in an object
Current breakpoint class and window width available in scope


Setup
-----
Add the breakpoint attribute to the body tag and give it a value off an object defined as follows:
Set the key as the smallest value you want the breakpoint to start at and the value as the name of the class you want added to the body tag.
The values do not need to be in numerical order.
I recommend that the lowest value is 0
```
<body breakpoint="{0:'smallscreen', 750:'break750', 500:'break500', 1000:'break1000', 1500:'break1500'}">
... 
</body>
```
The 'current class' and 'current window width' are available on the scope as break1500 and 1680



Events
-------
You can set a listener on any scope within your app, by using the scope method $on. The triggered event is called
right after the class of the element has been changed.
```
$scope.$on('breakpointChange', function(event, breakpoint, oldClass) {
   console.log('Entering:' + breakpoint.class);
   console.log('Leaving:' + oldClass);
   console.log('windowSize' + breakpoint.windowSize);
});
```

Contribution
------------
This project is built with GruntJS. To contribute to this project make sure to install node.js and npm.
Assuming npm is installed, run `$ npm install` inside the project directory to install the dependencies and you should
be ready to go.
Once you make a change, use `$ grunt build` inside the project folder to build the distribution files.
The version number is determined from the `package.json` file inside the project directory.


Download on Github
------------------
Version 0.0.1: https://github.com/snapjay/angularjs-breakpoint



Licence
-------
This work is licensed under a Creative Commons Attribution 3.0 Unported License. <br />
http://creativecommons.org/licenses/by/3.0/deed.en_GB <br />
If you use the script, please let me know @snapjay;  Don't worry, I won't ask for anything!



Credit
------
Dan Shreim <br />
<a href="http://www.twitter.com/snapjay/">@snapjay</a> <br />
http://snapjay.com
