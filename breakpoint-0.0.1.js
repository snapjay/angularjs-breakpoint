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
var breakpointApp = angular.module('breakpointApp',[]);

breakpointApp.directive('breakpoint', ['$window', '$rootScope', function($window, $rootScope){
    return {
        restrict:"A",
        link:function(scope, element, attr){
            scope.breakpoint = {class:'', windowSize:$window.innerWidth }; // Initialise Values

            var breakpoints = (scope.$eval(attr.breakpoint));
            var firstTime = true;

            angular.element($window).bind('resize', setWindowSize);

            scope.$watch('breakpoint.windowSize', function(windowWidth, oldValue){
                setClass(windowWidth);
            });

            scope.$watch('breakpoint.class', function(newClass, oldClass) {
                if (newClass != oldClass || firstTime) {
                    broadcastEvent(oldClass);
                    firstTime = false;
                }
            });

            function broadcastEvent (oldClass) {
                $rootScope.$broadcast('breakpointChange', scope.breakpoint, oldClass);
            }

            function setWindowSize (){
                scope.breakpoint.windowSize = $window.innerWidth;
                if(!scope.$$phase) scope.$apply();
            }

            function setClass(windowWidth){
                var setClass = breakpoints[Object.keys(breakpoints)[0]];
                for (var breakpoint in breakpoints){
                    if (breakpoint < windowWidth) setClass = breakpoints[breakpoint];
                    element.removeClass(breakpoints[breakpoint]);
                }
                element.addClass(setClass);
                scope.breakpoint.class  = setClass;
                if(!scope.$$phase) scope.$apply();
            }
        }
    }
}]);
