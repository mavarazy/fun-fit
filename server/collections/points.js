Points = new Mongo.Collection("points");

// Expose points to external application
Meteor.publish('points', function () {
    console.log("Publishing points");
    return Points.find({});
});

// When adding new user create a new record in points collection
Accounts.onCreateUser(function(options, user) {
    Points.update(
        { _id: user._id },
        { points: 0 },
        { upsert: true }
    )
    return user;
});

//
Meteor.methods({
    'points.get': function() {
        if (!Meteor.userId()) {
            throw new Meteor.Error('not-authorized');
        }
        Points.findOne({ _id: Meteor.userId() })
    }
});