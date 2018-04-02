(function () {
    'use strict';

    angular
        .module('frontendApp')
        .controller('SidebarController', SidebarController);

    SidebarController.$inject = ['$scope', '$http', '$state', '$log', '$cookies'];
    function SidebarController($scope, $http, $state, $log, $cookies) {

        /**
         * Sidebar Toggle & Cookie Control
         */
        var mobileView = 1500;

        $scope.getWidth = function() {
            return window.innerWidth;
        };

        $scope.$watch($scope.getWidth, function(newValue, oldValue) {
            if (newValue >= mobileView) {
                if (angular.isDefined($cookies.get('toggle'))) {
                    $scope.toggle = $cookies.get('toggle') ? true : false;
                } else {
                    $scope.toggle = true;
                }
            } else {
                $scope.toggle = false;
            }

        });

        $scope.toggleSidebar = function() {
            $scope.toggle = !$scope.toggle;
            $cookies.put('toggle', $scope.toggle);
        };

        window.onresize = function() {
            $scope.$apply();
        };

    }

})();
