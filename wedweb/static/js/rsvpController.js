/**
 * Created by yuvalc on 4/14/16.
 */

var app = angular.module('wedwebApp', []);
    app.controller('rsvpController', function($scope, $http) {
        $scope.dynamicStyle = {
            "background": 'url(static/img/button1.png) no-repeat center center',
        };

        $scope.submit = function(){
            $scope.inputStyle = {
                "display": 'none',
            };

            $scope.dynamicStyle = {
                "background": 'url(static/img/buffering.gif) no-repeat center center',
                "height": '300px',
                "outline": 'none'
            };

            params = {
                "name": $scope.username,
                "phone": $scope.phone,
                "guests": $scope.guests
            };

            $http.post('/rsvp', params).then(function success_cb(response){
                    $scope.dynamicStyle = {
                        "background": 'url(static/img/button_receive.png) no-repeat center center',
                        "outline": 'none',
                        "padding-top": 'none'
                    };

                    $scope.inputStyle = {
                        "display": 'none',
                    };
                }, function error_cb(reponse) {
                    alert("Ho no!!! not all fields were filled :(");
                    $scope.dynamicStyle = {
                        "background": 'url(static/img/button1.png) no-repeat center center',
                    };

                    $scope.inputStyle = {
                        "display": 'true',
                    };
                })
        }
    });