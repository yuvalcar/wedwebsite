/**
 * Created by yuvalc on 4/14/16.
 */

var app = angular.module('wedwebApp', []);
            app.controller('rsvpController', function($scope, $http) {
                $scope.dynamicStyle = {
                    "background": 'url(static/img/button1.png) no-repeat center center',
                };

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
                            "background": 'url(static/img/button_receive.png) no-repeat center center',
                            "disabled": 'true',
                        };
                    },
                    function error_cb(reponse) {
                        alert("Ho no!!!" + reponse.msg);
                        $scope.dynamicStyle = {
                            "background": 'url(static/img/button1.png) no-repeat center center'
                        };
                    })
            }
        });