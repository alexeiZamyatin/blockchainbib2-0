(function(angular, undefined) {
  "use strict";

  angular.module('frontendApp.config', [])

    .constant('BACKEND_API', 'http://http://146.169.47.91:8080/')
    //.constant('BACKEND_API', 'http://localhost:8080/')
    .constant('VERSION_INFO', {version: '0.0.1', build: 'test build'})

    .constant('DEBUG', true)

  ;
})(angular);
