/**
 * Created by SANGAM on 11-03-2015.
 */
'use strict';
angular.module('notificationTrayApp').
    controller('HomeCtrl', function ($http, $scope, appConfig, notifications) {
       $scope.appConfig = appConfig;
       $scope.notifications = notifications;
       $scope.removeNote= function(index){
            index++;
            $(".note:nth-child("+index+")").hide();
            index++;
            $(".note:nth-child("+index+")").show();
       };
       var toggleShowAll=false;
       $scope.showAll=function(){
           toggleShowAll = !toggleShowAll;
           if(toggleShowAll){
               $(".note").show(1000).css({'position':'static'});
               $(".notificationTray").show();
           }else{
               $(".note:nth-child(n+2)").hide(1000);
               $(".notificationTray").hide();
           }
       }

        $scope.hideAll=function(){
            $(".note").hide();
            $(".notificationTray").show();
        }

        $scope.hideToggleTray=function(){
            toggleShowAll = !toggleShowAll;
            if(toggleShowAll){
                $(".note").show(1000).css({'position':'static'});
            }else{
                $(".note").hide(1000);
            }
        }

        $scope.isNotesHidden = function(){
            return toggleShowAll;
        }

    });
