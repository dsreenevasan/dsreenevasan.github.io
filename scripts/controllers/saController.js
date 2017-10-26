;(function() {
    'use strict';

    angular
        .module('abacus')
        .controller('SAController', SAController);

    SAController.$inject = ['$state', '$compile', '$scope', '$cookieStore', 'MainService', '$uibModal', 'toaster', '$uibModalStack'];

    function SAController($state, $compile, $scope, $cookieStore, MainService, $uibModal, toaster, $uibModalStack){
        //console.log($cookieStore.get('REGISTERED_SUCCESS'));

        var ctrl = this;
        ctrl.loggedIn = false;

        checkCookies();

        function checkCookies() {
            if($cookieStore.get('userDetails')){
                console.log("logged in");
                ctrl.userDetails = $cookieStore.get('userDetails');
                ctrl.loggedIn = true;
            }
            else{
                console.log("not logged in");
            }
        }

        ctrl.stateChange = function(page) {
            $state.go(page);
        };

        ctrl.openModal = function(page, size){
            var modalInstance = $uibModal.open({
                templateUrl: '../views/' + page + '.html',
                backdrop: true,
                size: size,
                windowTopClass: 'modal-margin',
                resolve: {

                }
            });
            modalInstance.result.then(function (selectedItem) {
                // Remove it on closing

            }, function () {
                // Remove it on dismissal

            });
        };

        ctrl.openConfirmModal = function(){
            if(ctrl.loggedIn){
                var modalInstance = $uibModal.open({
                    templateUrl: '../views/saConfirm.html',
                    backdrop: true,
                    size: 'md',
                    windowTopClass: 'modal-margin',
                    controller: 'SAController',
                    controllerAs: 'ctrl',
                    resolve: {

                    }
                });
                modalInstance.result.then(function () {


                }, function () {

                });
            }
            else{
                toaster.pop('info', "", "Login to Continue!", 2000);
                setTimeout(function () {
                    ctrl.openModal('login', 'sm');
                }, 2000);
            }
        };

        ctrl.ok = function () {

            console.log(ctrl.userDetails);

            if(ctrl.loggedIn){
                var saObj = {
                    a_id : ctrl.userDetails.a_id
                };

                console.log(saObj);

                 MainService.RegisterSA(saObj).then(function(response){
                     if(response.status == 200){
                         if(response.data == "done"){
                            toaster.pop("success", "Success", "Registration Successful", 3000);
                         }
                         else{
                            toaster.pop("info", "", "You have already registered as Student Ambassador", 3000);
                         }
                     }
                     else{
                            toaster.pop("error", "Error", "Error Registering", 3000);
                     }
                 });
            }
            else{
                console.log($rootScope.workshop);
                toaster.pop("info", "", "Login to continue", 2000);
                setTimeout(function () {
                    ctrl.openModal('login', 'sm');
                }, 2000);
            }
            $uibModalStack.dismissAll();
        };

        ctrl.cancel = function () {
            $uibModalStack.dismissAll();
        };

    }

})();
