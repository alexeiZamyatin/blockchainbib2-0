(function (angular, undefined) {
    'use strict';
    angular.module('frontendApp.rest', [])

        .service('Bib', function($http, $rootScope, BACKEND_API){
            var vm = this;

            vm.readAll = function () {
                return $http({
                    method: 'GET',
                    url: BACKEND_API + "bib",
                    isArray: true
                });
            };
        });


})(angular);
