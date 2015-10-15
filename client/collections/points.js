angular.
    module('fun-fit').
    controller("PointsCtrl", ['$scope', '$meteor', function($scope, $meteor) {
        var vm = this;
        $scope.$meteorSubscribe('points');

        vm.points = $meteor.collection(function() {
            return Points.find()
        });

        $meteor.call('pointsGet').then(function (result, error) {
            console.log("Returned " + result);
            vm.my = result;
        });

        $scope.$watch("vm.my", function(ch) {
           console.log("Tracking changes to " + JSON.stringify(ch));
        });

    }]);