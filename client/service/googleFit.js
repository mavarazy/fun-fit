angular.
    module('fun-fit').
    controller("GoogleFitCtrl", ['$scope', '$meteor', '$log', function($scope, $meteor, $log) {
        var vm = this;

        $meteor.call('google.sessions').then(function (result) {
            $log.debug("Returned " + result);
            vm.my = result;
        });

        vm.dataPoints = []

        $meteor.call('google.dataSources').then(function (sources) {
          $log.debug("Returned " + JSON.stringify(sources));
          vm.sources = sources;
          sources.dataSource.forEach(function(source) {
              var sourceId = source.dataStreamId;
              $meteor.call('google.dataPoints', sourceId).then(function(points) {
                vm.dataPoints.push({
                  source: sourceId,
                  origin: 'google',
                  points: points
                });
              });
          });
        });

    }]);
