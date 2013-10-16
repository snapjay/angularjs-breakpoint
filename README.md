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



License
-------

This module is licensed using the MIT License:

```
The MIT License (MIT)

Copyright (c) 2013 Dan Shreim

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```




Credit
------
Dan Shreim <br />
<a href="http://www.twitter.com/snapjay/">@snapjay</a> <br />
http://snapjay.com
If you use the script, please let me know @snapjay;  Don't worry, I won't ask for anything!
