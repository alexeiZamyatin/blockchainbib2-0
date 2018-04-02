(function () {
    'use strict';

    angular
        .module('frontendApp')
        .controller('HeaderController', HeaderController);

    HeaderController.$inject = ['$scope', '$state', '$log', '$rootScope', '$cookies'];
    function HeaderController($scope, $state, $log, $rootScope, $cookies) {


        $scope.logout = function(){
            $cookies.remove($rootScope.port);
            $cookies.remove('username');
            $cookies.remove('port');
            $cookies.remove("orderFinished", $rootScope.port);
            $cookies.remove('orderId');
            $rootScope.username = undefined;
            $rootScope.port = undefined;
            $state.go('main.login');
        }

    }

})();
