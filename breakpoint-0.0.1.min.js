
/*!
 * angularjs-breakpoint v0.0.1
 *
 * BREAKPOINT DIRECTIVE FOR RESPONSIVE WEBSITES
 *
 *  http://snapjay.github.com/angularjs-breakpoint/
 *  Apply as a attribute of the body tag. Set
 *  breakpoint="{1250:'break1250', 1000:'break1000',1120:'break1120'}
 *
 *  Values are available on scope as
 *  {{breakpoint.class}} = current set class
 *  {{breakpoint.windowSize}} = current width of window
 */
var breakpointApp=angular.module("breakpointApp",[]);breakpointApp.directive("breakpoint",["$window","$rootScope",function(a,b){return{restrict:"A",link:function(c,d,e){function f(a){b.$broadcast("breakpointChange",c.breakpoint,a)}function g(){c.breakpoint.windowSize=a.innerWidth,c.$$phase||c.$apply()}function h(a){var b=i[Object.keys(i)[0]];for(var e in i)a>e&&(b=i[e]),d.removeClass(i[e]);d.addClass(b),c.breakpoint.class=b,c.$$phase||c.$apply()}c.breakpoint={"class":"",windowSize:a.innerWidth};var i=c.$eval(e.breakpoint);angular.element(a).bind("resize",g),c.$watch("breakpoint.windowSize",function(a){h(a)}),c.$watch("breakpoint.class",function(a,b){a!=b&&f()})}}}]);