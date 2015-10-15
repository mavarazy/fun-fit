// Expose points to external application
Meteor.publish('points', function () {
    console.log("Publishing points");
    return Points.find({});
});

// When adding new user create a new record in points collection
Accounts.onCreateUser(function(options, user) {
    console.log("Creating user " + user._id);
    Points.update(
        { _id: user._id },
        { points: 0 },
        { upsert: true }
    );
    return user;
});

// Exposing pointsGet operation
Meteor.methods({
    pointsGet: function() {
        console.log("Get points called for " + Meteor.userId());
        if (!Meteor.userId()) {
            throw new Meteor.Error('not-authorized');
        }
        return Points.findOne({ _id: Meteor.userId() });
    }
});