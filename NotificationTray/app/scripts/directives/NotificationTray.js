/**
 * Created by SANGAM on 11-03-2015.
 */
(function() {
    var app = angular.module('notificationTrayApp')
    app.directive("ngNotificationTray",function(){
        return {
            restrict: 'E',
            templateUrl: "app/scripts/templates/Notification.html"
        }
    })
})();