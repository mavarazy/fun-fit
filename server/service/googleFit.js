
// Exposing google API
Meteor.methods({
    'google.dataSources': function() {
        console.log("Calling Google API");
        var userId = Meteor.user().services.google.id;
        console.log("Calculated user identifier " + userId);
        var url = "fitness/v1/users/me/dataSources";
        console.log("Calculated request url " + url);
        return GoogleApi.get(url);
    },
    'google.sessions': function () {
      var url = "fitness/v1/users/me/sessions";
      console.log("Calculated request url " + url);
      var callback = function(result) {
          console.log("Result " + JSON.stringify(result));
          var nextToken = result.nextPageToken;
          console.log("Received " + JSON.stringify(nextToken));
          if (nextToken === undefined) {
            console.log("Finished processing");
          } else {
            callback(GoogleApi.get(url + "?" + nextToken, {}));
          }
      };
      //"https://www.googleapis.com/fitness/v1/users/me/dataSources/derived:com.google.activity.segment:com.google.android.gms:LGE:LG-D722:36744dd5:activity_from_steps/datasets"
      var finalUrl = url + "?startTime=2015-10-01T00:00:00.000Z&endTime=2015-10-10T00:00:00.000Z";
      console.log("Calculated URL " + finalUrl);
      callback(GoogleApi.get(finalUrl, {}));
      return GoogleApi.get(url);
    },
    'google.dataSources': function() {
      console.log("Google data sources called");
      var url = "fitness/v1/users/me/dataSources";
      return GoogleApi.get(url, {});
    },
    'google.dataPoints': function(source) {
      console.log("Google fetching data points for " + source);
      var url = "fitness/v1/users/me/dataSources/" + source + "/datasets/1443625200000000000-1445025200000000000";
      return GoogleApi.get(url, {});
    }
});
