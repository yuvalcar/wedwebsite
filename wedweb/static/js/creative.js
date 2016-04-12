/*!
 * Start Bootstrap - Creative Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

angular.module('wedweb', [])
    .controller('rsvpController', ['$scope', function($scope) {
        $scope.name = 'Name';
        $scope.phone = 'Phone';
        $scope.guests = 'No. of Guests';
        $scope.submit = function() {
            if ($scope.name) {
                $scope.list.push(this.name);
            }

            if ($scope.phone){
                $scope.list.push(this.phone);
            }

            if ($scope.guests){
                $scope.list.push(this.guests);
            }

            this.text = '';
            this.phone = '';
            this.guests = '';
        };
    }]);