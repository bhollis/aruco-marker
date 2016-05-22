// AngularJS Directive for Aruco marker images
// Usage:
// <aruco-marker marker-id="{{markerId}}" size="500px"/>
(function (root, factory) {
  if (typeof module !== 'undefined' && module.exports) {
    // CommonJS
    if (typeof angular === 'undefined') {
      factory(require('angular'));
    } else {
      factory(angular);
    }
    module.exports = 'ngDialog';
  } else if (typeof define === 'function' && define.amd) {
    // AMD
    define(['angular'], factory);
  } else {
    // Global Variables
    factory(root.angular);
  }
}(this, function (angular) {
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
}));
