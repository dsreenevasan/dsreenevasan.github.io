(function() {
    'use strict';

    var states = [
        {
            name: 'main',
            state:
            {
                url:'/main',
                templateUrl: 'views/main.html',
                data: {
                    text: "Main",
                    visible: false
                }
            }
        },
        {
            name: 'events',
            state:
            {
                url:'/events',
                templateUrl: 'views/events.html?v=2',
                data: {
                    text: "Sample",
                    visible: false
                }
            }
        },
        {
            name: 'workshops',
            state:
            {
                url:'/workshops',
                templateUrl: 'views/workshop.html?v=1',
                data: {
                    text: "Workshops",
                    visible: false
                }
            }
        },
        {
            name: 'workshops_reg_success',
            state:
            {
                url:'/workshops_reg_success',
                templateUrl: 'views/workshop_reg_success.html',
                data: {
                    text: "Workshops",
                    visible: false
                }
            }
        },
        {
            name: 'check',
            state:
            {
                url:'/check',
                templateUrl: 'views/login.html',
                data: {
                    text: "Student Ambassador",
                    visible: false
                }
            }
        },
        {
            name: 'register',
            state:
            {
                url:'/register',
                templateUrl: 'views/register.html',
                data: {
                    text: "register",
                    visible: false
                }
            }
        }
    ];

    var abacus = angular.module('abacus', [
        'ui.router',
        'ngAnimate',
        'ngCookies',
        'toaster',
        'fullPage.js',
        'swipe',
        'ui.bootstrap',
        /*'vcRecaptcha',*/
        'ngSanitize',
        'angular-web-notification'
    ]);
    /*.run(
     function($location) {
     $location.path('');
     }
     )*/

   /* abacus.run(function($rootScope, $uibModalStack, $window, $location) {
        $window.ga('create', 'UA-93008925-1', 'auto');

        // track pageview on state change
        $rootScope.$on('$stateChangeSuccess', function (event) {
            $window.ga('send', 'pageview', $location.path());
        });

        $rootScope.$on('$locationChangeStart', function (event) {
            $uibModalStack.dismissAll();
        });
    });*/

    abacus.config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/main');

        angular.forEach(states, function (state) {
            $stateProvider.state(state.name, state.state);
        });
    });

})();