'use strict';

/**
 * @ngdoc directive
 * @name izzyposWebApp.directive:adminPosHeader
 * @description
 * # adminPosHeader
 */
angular.module('frontendApp')
    .directive('header', function () {
        return {
            templateUrl: 'scripts/directives/header/header.html',
            restrict: 'E',
            replace: true,
            controller: 'HeaderController'
        };
    });


