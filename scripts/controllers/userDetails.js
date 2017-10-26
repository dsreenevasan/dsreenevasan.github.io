;(function() {
    'use strict';

    angular
        .module('abacus')
        .controller('UserDetailsController', UserDetailsController);

    UserDetailsController.$inject = ['$state', '$compile', '$scope', '$cookieStore', 'MainService', '$uibModal', 'toaster', '$uibModalStack'];

    function UserDetailsController($state, $compile, $scope, $cookieStore, MainService, $uibModal, toaster, $uibModalStack){
        //console.log($cookieStore.get('REGISTERED_SUCCESS'));

        var ctrl = this;
        ctrl.loggedIn = false;
        /*ctrl.userCollege = "Other";
        ctrl.userDepartment = "Civil Engineering";*/
        checkCookies();

        ctrl.workshops = [
            "HOW TO DO WEB DEVELOPMENT WITH REACT [FRONT END FRAMEWORK]",
            "HOW TO BUILD YOUR OWN FITBIT [FITNESS TRACKER]",
            "HOW TO BUILD YOUR OWN AMAZON.COM [ECOMMERCE DEVELOPMENT]",
            "HOW TO ENHANCE THE REAL WORLD: AUGMENTED REALITY WORKSHOP",
            "LINUX",
            "MACHINE LEARNING"
        ];
        

        function checkCookies() {
            if($cookieStore.get('userDetails')){
                console.log("logged in");
                ctrl.userDetails = $cookieStore.get('userDetails');
                ctrl.loggedIn = true;
                var obj = {
                    a_id : ctrl.userDetails.a_id
                };
                MainService.GetUserDetails(obj).then(function (response) {
                    if(response.status == 200){
                        console.log("success");
                        ctrl.details = response.data;
                        ctrl.userDepartment = ctrl.details.dept;
                        ctrl.userCollege = ctrl.details.college;
                        console.log("college, dept - " + ctrl.userCollege + ctrl.userDepartment);
                        console.log(JSON.stringify(ctrl.details));
                    }
                    else{
                        toaster.pop("error", "Error", "Check your internet connection", 3000);
                    }
                });
            }
            else{
                console.log("not logged in");
            }
        };

        ctrl.stateChange = function(page) {
            $state.go(page);
        };
        

        ctrl.cancel = function () {
            $uibModalStack.dismissAll();
        };

        ctrl.departments = [
            "Aeronautical Engineering","Aerospace Engineering","Agricultural & Irrigation Engineering","Aircraft Maintenance Engineering","Animation","Apparel technology","Applied electronics","Applied Mathematics","Architecture","Automobile Engineering","Avionics","Bio Informatics","Bio Medical Engineering","Biotechnology","Ceramic Technology","Charted Accountancy","Chemical Engineering","Chemistry","Civil Engineering","Communication Systems","Computer Science & Engineering","Cryogenic Engineering","Elecrical Engineering","Electrical & Electronics Engineering","Electronic media","Electronics & Communication Engineering","Electronics & Instrumentation","Embedded Systems","Energy Engineering","Engineering Design","Engineering Physics","English Literature","Finance","Fluid Mechanics","Food Technology","Geo Informatics","Harbour Engineering ","High Voltage Engineering","Hospitality Administration","HR","Humanities & Social Sciences","Industrial Engineering","Information & Communications Technology","Information Technology","Internal Combustion Engineering","Logistics","M.Sc. CS-IT","M.Sc. E-Media","Manufacturing Engineering","Marine Engineering","Marketing","Material Science ","Mathematics","Mechanical Engineering","Mechatronics","Media Sciences","Metallurgy","Mining Engineering","Nano Science and Technology","Other","Photonics ","Physics","Printing Technology","Production Engineering","Remote Sensing","Software Engineering","Systems Engineering & Operations Research","Technology Managment","Telecommunication Engineering","Textile Technology","Theoretical Computer Science","Thermal","Transportation Engineering","VLSI Design","Other"
        ];

        MainService.GetColleges().then(function (response) {
            if(response.status == 200){
                ctrl.colleges = response.data.colleges;
            }
            else{
                toaster.pop("error", "Error", "Error loading college list", 3000);
            }
        });

        ctrl.updateUserDetails = function(){
            $uibModalStack.dismissAll();
            var modalInstance = $uibModal.open({
                templateUrl: '../views/updateUserDetails.html',
                backdrop: true,
                size: 'md',
                windowTopClass: 'modal-margin',
                resolve: {

                }
            });
            modalInstance.result.then(function (selectedItem) {


            }, function () {

            });
        };

        ctrl.update = function () {
            var obj = {
                aid : ctrl.userDetails.a_id,
                user_dept: ctrl.userDepartment,
                user_college: ctrl.userCollege
            };

            console.log(JSON.stringify(obj));

            MainService.UpdateUser(obj).then(function (response) {
                if(response.status == 200){
                    if(response.data == "SUCCESS"){
                        toaster.pop("success", "Success", "Successfully Updated", 3000);
                        $uibModalStack.dismissAll();
                    }
                    else{
                        toaster.pop("error", "Error", "Update Failed! Contact 9655804033 or mail at webteam@abacus.org.in", 3000);
                    }
                }
                else{
                    toaster.pop("error", "Error", "Check Your Internet Connection and Try again", 3000);
                }
            })
        }
    }

})();
