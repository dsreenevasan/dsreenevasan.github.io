;(function() {
    'use strict';

    angular
        .module('abacus')
        .controller('IndexController', IndexController);

    IndexController.$inject = ['$state', '$compile', '$scope', '$cookieStore', 'MainService'];

    function IndexController($state, $compile, $scope, $cookieStore, MainService){
        //console.log($cookieStore.get('REGISTERED_SUCCESS'));

        var ctrl = this;
        
        
        


    }

})();
