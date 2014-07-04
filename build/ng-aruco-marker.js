/*! aruco-marker 1.0.0 2014-06-19 - MIT Licensed, see http://github.com/bhollis/aruco-marker */
// AngularJS Directive for Aruco marker images
// Usage:
// <aruco-marker marker-id="{{markerId}}" size="500px"/>
(function() {
  angular.module('arucoMarker', []).directive('arucoMarker', function() {
    return {
      restrict: 'E',
      scope: {
        markerId: '@',
        size: '@'
      },
      link: function(scope, element, attrs) {
        scope.$watch('markerId', function(newVal, oldVal) {
          var marker = new ArucoMarker(+scope.markerId);
          element.html(marker.toSVG(scope.size));
        });
      }
    };
  });
})();
