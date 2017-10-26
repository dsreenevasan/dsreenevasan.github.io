(function () {
    'use strict';

    angular
        .module('abacus')
        .factory('MainService',MainService);

    MainService.$inject = ['$http', '$state', '$rootScope', '$timeout', 'ConfigService'];

    function MainService($http, $state, $rootScope, $timeout, ConfigService){
        
        var service = {};

        service.Login = Login;
        service.Logout = Logout;
        service.Register = Register;
        service.RegisterWorkshop =RegisterWorkshop;
        service.RegisterSA = RegisterSA;
        service.GetUserDetails = GetUserDetails;
        service.GetColleges = GetColleges;
        service.UpdateUser = UpdateUser;

        return service;

        function Login(params) {
            return $http.post(ConfigService.BaseURI() + '/login.php', params).then(handleSuccess, handleRemoteError);
        }

        function Logout(params) {
            return $http.get(ConfigService.BaseURI() + '/api/logout?username=' + params.emailId, params).then(handleSuccess, handleRemoteError);
        }

        function Register(params) {
            return $http.post(ConfigService.BaseURI() + '/register.php', params).then(handleSuccess, handleRemoteError);
        }

        function RegisterWorkshop(params) {
            return $http.post(ConfigService.BaseURI() + '/workshop_reg.php', params).then(handleSuccess, handleRemoteError);
        }

        function RegisterSA(params) {
            return $http.post(ConfigService.BaseURI() + '/sa_reg.php', params).then(handleSuccess, handleRemoteError);
        }

        function UpdateUser(params) {
            return $http.post(ConfigService.BaseURI() + '/update.php', params).then(handleSuccess, handleRemoteError);
        }

        function GetUserDetails(params) {
            return $http.get(ConfigService.BaseURI() + '/details.php', params).then(handleSuccess, handleRemoteError);
        }

        function GetColleges(params) {
            return $http.get("https://gist.githubusercontent.com/dsreenevasan/c50f6e62ce911e3d22413a34182c542f/raw/colleges.json").then(handleSuccess, handleRemoteError);
        }

        function handleRemoteError(data) {
            return data;
        }

        function handleSuccess(data) {
            return data;
        }

    }

})();
