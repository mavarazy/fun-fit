Points = new Mongo.Collection("points");

angular.
    module('fun-fit').
    controller("PointsCtrl", ['$scope', '$meteor', function($scope, $meteor) {
        $scope.$meteorSubscribe('points');

        $scope.points = $meteor.collection(function() {
            return Points.find()
        });

        $scope.my = function() {
            $meteor.call('points.get');
        };

        $meteor.call('google.dataSources');

    }]);