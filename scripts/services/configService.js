(function () {
    'use strict';

    angular
        .module('abacus')
        .factory('ConfigService', ConfigService);

    ConfigService.$inject = ['$http','$rootScope'];
    function ConfigService($http,$rootScope) {
        var service={};
        var server = {
            "local": "localhost",
            "wedo" : "abacus.org.in/php",
            "port": "8080"
        };
        service.BaseURI = BaseURI;
        return service;

        function BaseURI()
        {
            return "https://"+server.wedo;
        }

    }
})();