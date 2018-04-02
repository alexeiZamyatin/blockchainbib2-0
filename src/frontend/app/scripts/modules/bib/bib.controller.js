(function () {
    'use strict';

    angular
        .module('frontendApp.bib')
        .controller('BibController', BibController);

    BibController.$inject = [
        '$state',
        '$scope',
        '$rootScope',
        '$log',
        '$filter',
        'Bib',
        'NotificationHandler'];
    function BibController($state, $scope, $rootScope, $log, $filter, Bib, NotificationHandler) {

        var vm = this;
        $rootScope.pageTitle = "Blockchain Bibliography";

        /**
         * Configuration needed for sorting lectures
         * @type {string}
         */
        vm.predicate = 'year';
        vm.reverse = false;

        /**
         * Extract all bib entries from backend
         * @error: Shows error notification
         */
        vm.bibs = {};
        var promise = Bib.readAll();
        promise.success(function(result){
            vm.bibs = result;
        }).error(function (error) {
            NotificationHandler.error(error);
        });


        /**
         * Sorts the lecture list by the given predicate
         * @param predicate - predicate to sort by
         */
        vm.order = function (predicate) {
            vm.reverse = (vm.predicate === predicate) ? !vm.reverse : false;
            vm.predicate = predicate;
        };

        /**
         *  deactivate http interceptor on this page (causes problems with
         *  type-ahead  functionality)
         */
        function pauseInterceptor() {
            $rootScope.deactivateHttpInterceptor();
        }

        /**
         * Re-activate interceptor
         */
        function resumeInterceptor() {
            $rootScope.activateHttpInterceptor();
        }
    }
})();
