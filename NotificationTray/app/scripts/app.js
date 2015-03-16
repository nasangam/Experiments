/**
 * Created by SANGAM on 11-03-2015.
 */
(function () {
    var app = angular.module('notificationTrayApp', ["ngRoute"]);
    app.config(function ($routeProvider) {
       $routeProvider
                .when("/home",{
                    templateUrl: 'app/scripts/views/home.html',
                    controller: 'HomeCtrl'
                })
                .otherwise({redirectTo: "/home"});

        });
})();
