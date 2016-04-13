/**
 * Created by yuvalc on 4/14/16.
 */

var app = angular.module('wedwebApp', []);
            app.controller('rsvpController', function($scope, $http, $location) {
            $scope.submit = function(){
                params = {
                    "name": $scope.username,
                    "phone": $scope.phone,
                    "guests": $scope.guests
                };

                $http.post('/rsvp', params).then(function success_cb(response){
                        alert("Great success!");
                        $location.url($location.host());
                    },
                    function error_cb(reponse) {
                        alert("Ho no!!!" + reponse.msg)
                    })
            }
        });