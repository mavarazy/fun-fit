
// Exposing google API
Meteor.methods({
    'google.dataSources': function() {
        console.log("Calling Google API");
        var userId = Meteor.user().services.google.id;
        console.log("Calculated user identifier " + userId);
        var url = "fitness/v1/users/" + userId + "/dataSources";
        console.log("Calculated request url " + url);
        GoogleApi.get(url, [ function(response) {
            console.log("Users response " + JSON.stringify(respnse));
        }]);
        console.log(JSON.stringify(Meteor.user()));
    }
});
