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

<body breakpoint="{0:'smallscreen', 750:'break750', 500:'break500', 1000:'break1000', 1500:'break1500'}">
... 
</body>
The 'current class' and 'current window width' are available on the scope as break1500 and 1680



Events
-------
If you want to capture when a breakpoint is entered or left, set up a $watch on the breakpoint.class.
$scope.$watch('breakpoint.class', function(newBreakpoint, oldBreakpoint){ <br />
   console.log('Entering:' + newBreakpoint);  <br />
   console.log('Leaving:' + oldBreakpoint); <br />
});


Download on Github
------------------
Version 0.1: https://github.com/snapjay/angularjs-breakpoint



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
