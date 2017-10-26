;(function() {
  'use strict';

  angular
    .module('abacus')
    .controller('MainController', MainController);

  MainController.$inject = ['$state', '$http', '$scope', '$window', 'toaster' ,'$uibModal','$document', 'MainService', '$cookieStore', '$uibModalStack', 'webNotification'];
  function MainController($state, $http, $scope, $window, toaster, $uibModal,$document, MainService, $cookieStore, $uibModalStack, webNotification ){


    var ctrl = this;
    var bodyRef = angular.element( $document[0].body );
    console.log("Success!");
    ctrl.showNav = false;
    ctrl.maxWidth = 0;
    ctrl.loggedIn = false;
    ctrl.phoneNumberNotValid = false;
    ctrl.passwordInvalid = false;
    ctrl.isSubmitting = false;
    ctrl.right = false;
    ctrl.publicKey = "6LetiBcUAAAAAHEsMJERL8lZNkryc0EfYbhK8XVR";
    detect();
    checkCookies();
    notification('Abacus17 schedule', 'Click to open the schedule', 'https://drive.google.com/file/d/0B16nUyywUnKPMEtiXzVVRXVoUUk/view');
    /*routes();*/
    schedule();
    init();

    function init() {
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
      /*ctrl.department = ctrl.departments[1];*/

      $(document).ready(function(){
        $('[data-toggle="tooltip"]').tooltip();
      });
    }

    function schedule() {
      toaster.pop("info", "Info", "Check out the schedule @ https://drive.google.com/file/d/0B16nUyywUnKPMEtiXzVVRXVoUUk/view", 30000)
    }

    /*function routes() {
      console.log("router");
      ctrl.right = true;
      toaster.pop("success", "Bus Route", "From koyambedu : M70, koyambedu to guindy, guindy to Anna university, Pondicherry buses.", 5000);
      setTimeout(function () {
        toaster.pop("success", "Bus Route", "From guindy : all Anna university buses.", 5000);
      }, 50001);
      setTimeout(function () {
        toaster.pop("success", "Bus Route", "From egmore: Egmore to guindy Railway Station to Anna university.", 5000);
      }, 100002);
      ctrl.right = false;
    }*/


    function notification(title, body, link) {
      webNotification.showNotification(title, {
        body: body,
        icon: '../images/test.png',
        onClick: function onNotificationClicked() {
          /*console.log('Notification clicked.');*/
          $window.open(link);
        },
        autoClose: 15000
      });
    }

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
    
    function detect () {
      angular.element(window).bind("scroll", function(){
        ctrl.page = window.pageYOffset;
        console.log(ctrl.page);
      });
    }
    ctrl.page = window.pageYOffset;
    console.log(ctrl.page);

    ctrl.displayNav = function() {
      ctrl.maxWidth = ctrl.maxWidth === 0 ? '50px' : 0;
      ctrl.showNav = !ctrl.showNav;
    };

    ctrl.stateChange = function(page) {
      $state.go(page);
    };

    ctrl.scrollDown = function () {
      var esc = $.Event("keydown", { keyCode: 40 });
      /*$(document).ready(function() {
        $("body").trigger(esc);
      });*/
      var keyboardEvent = new KeyboardEvent("keydown", {bubbles : true, cancelable : true, key : "", char : "", shiftKey : false, code: "ArrowDown", keyCode: 40, which: 40, charCode: 0});
      document.getElementById('main').dispatchEvent(keyboardEvent);
    };

    ctrl.resetFullpage = function() {
      $.fn.fullpage.moveTo(1);
    };

    ctrl.openModal = function(page, size){
      $.fn.fullpage.setAllowScrolling(false);
      $.fn.fullpage.setKeyboardScrolling(false);
      $.fn.fullpage.moveTo(1);
      bodyRef.addClass('ovh');
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
        $.fn.fullpage.setAllowScrolling(true);
        $.fn.fullpage.setKeyboardScrolling(true);
        bodyRef.removeClass('ovh');

      }, function () {
        // Remove it on dismissal
        $.fn.fullpage.setAllowScrolling(true);
        $.fn.fullpage.setKeyboardScrolling(true);
        bodyRef.removeClass('ovh');

      });
    };

    ctrl.check= function(){
      console.log("-a--------------");
    //  alert('ok');
    };

    ctrl.login = function(){
      var obj = {
        email:  ctrl.email,
        pass: ctrl.password
      };

      console.log(JSON.stringify(obj));
      MainService.Login(obj).then(function (response) {
        if(response.status == 200){
          if(response.data != 404){
            toaster.pop("success", "Success", "Successfully Logged In", 3000);
            $cookieStore.put('userDetails', response.data);
            //checkCookies();
            $window.location.reload();
          }
          else{
            toaster.pop("error", "Error", "Invalid Username or Password", 3000);
            console.log("Invalid Username or Password");
          }
        }
      })
    };

    ctrl.register = function () {
      ctrl.isSubmitting = true;
      /*if(vcRecaptchaService.getResponse() === ""){ //if string is empty
         toaster.pop("error", "Error", "Please resolve the captcha and submit!", 3000);
      }
      else {*/
        /*if(ctrl.phoneNumber >= 7000000000 && ctrl.phoneNumber <= 9999999999 && ctrl.password.length >= 8) {*/
          /*console.log(vcRecaptchaService.getResponse());*/
          var obj = {
            user_email    : ctrl.emailId,
            user_password : ctrl.password,
            user_name     : ctrl.name,
            user_phone    : ctrl.phoneNumber,
            user_college  : ctrl.collegeName,
            user_dept     : ctrl.department,
            user_year     : ctrl.year
            /*recaptcha     : 'abc'*/
          };

          console.log(JSON.stringify(obj));

          MainService.Register(obj).then(function (response) {
            //console.log(response);
            if(response.status == 200){
              if(response.data.a_id){
                toaster.pop("success", "Success", "Successfully Logged In", 3000);
                $cookieStore.put('userDetails', response.data);
                //checkCookies();
                $window.location.reload();
              }
              else{
                toaster.pop("error", "Error", response.data, 3000);
                console.log(response.data);
              }
            }
            ctrl.isSubmitting = false;
          });
        /*}
        else {
          toaster.pop("error", "Error", "Enter valid phone number or password", 5000);
        }*/
      /*}*/
    };

    ctrl.openRegister = function() {
      $uibModalStack.dismissAll();
      var modalInstance = $uibModal.open({
        templateUrl: '../views/register.html',
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

    ctrl.logout = function(){
      $cookieStore.remove('userDetails');
      ctrl.loggedIn = false;
      toaster.pop("success", "Success", "Successfully Logged Out!");
    };

    ctrl.openUniq = function() {
      $window.open("http://www.inplanttraining.org/");
      $window.open("http://www.internshipinchennai.com/");
      $window.open("http://www.ieeefinalyearprojects.org/");
      $window.open("http://www.androidtraininginchennai.com/");
    };

    ctrl.checkPhoneNumber = function() {
      console.log("Phoen");
        if(ctrl.phoneNumber >= 7000000000 && ctrl.phoneNumber <= 9999999999){
          ctrl.phoneNumberNotValid = false;
        }
      else {
          ctrl.phoneNumberNotValid = true;
        }
    };

    ctrl.checkPassword = function () {
      console.log("pppp");
      if(ctrl.password.length < 8){
        ctrl.passwordInvalid = true;
      }
      else{
        ctrl.passwordInvalid = false;
      }
    };

    ctrl.openLink = function(link){
      $window.open(link);
    }
  }

})();
