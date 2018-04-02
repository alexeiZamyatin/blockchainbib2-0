(function () {
    'use strict';


/**
 * @ngdoc directive
 * @name izzyposWebApp.directive:adminPosHeader
 * @description
 * # adminPosHeader
 */
angular.module('frontendApp')
    .directive('sidebar', sidebar);

    function sidebar(){
        return {
            templateUrl:'scripts/directives/sidebar/sidebar.html',
            restrict: 'E',
            replace: true,
            controller: 'SidebarController'
        };
    }

})();
