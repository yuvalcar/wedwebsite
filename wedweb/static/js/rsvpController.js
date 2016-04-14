/**
 * Created by yuvalc on 4/14/16.
 */

var app = angular.module('wedwebApp', []);
            app.controller('rsvpController', function($scope, $http, $window) {
                $scope.dynamicStyle = {
                    "background": 'url(static/img/button1.png) no-repeat center center',
                };

                $scope.md = new $window.MobileDetect($window.navigator.userAgent);

                if($scope.md.mobile()){
                    $scope.headerStyle = {
                        "background-image": 'url(static/img/button1.png)',
                    }
                }


                $scope.submit = function(){
                    $scope.dynamicStyle = {
                        "background": 'url(static/img/buffering.gif) no-repeat center center'
                };
                    params = {
                        "name": $scope.username,
                        "phone": $scope.phone,
                        "guests": $scope.guests
                    };

                $http.post('/rsvp', params).then(function success_cb(response){
                        $scope.dynamicStyle = {
                            "background": 'url(static/img/button_receive.png) no-repeat center center'
                        };

                        //$location.url($location.host());
                    },
                    function error_cb(reponse) {
                        alert("Ho no!!!" + reponse.msg);
                        $scope.dynamicStyle = {
                            "background": 'url(static/img/button1.png) no-repeat center center'
                        };
                    })
            }
        });