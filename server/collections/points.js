Points = new Mongo.Collection("points");

Meteor.publish('points', function () {
    return Points.find({
        $or: [
            { owner: this.userId }
        ]
    });
});

Meteor.methods({
    'points.get': function() {
        if (!Meteor.userId) {
            throw new Meteor.Error('not-authorized');
        }
        Points.findOne({ owner: userId })
    }
});
//  addTask: function(text) {
//      if (!Meteor.userId) {
//        throw new Meteor.Error('not-authorized');
//      }
//
//      Tasks.insert({
//        text: text,
//        createdAt: new Date(),
//        owner: Meteor.userId(),
//        username: Meteor.user().username
//      });
//    },
//  deleteTask: function(taskId) {
//    var task = Tasks.findOne(taskId);
//    if (task.private && task.owner !== Meteor.userId()) {
//      throw new Meteor.Error('not-authorized');
//    }
//
//    Tasks.remove(taskId);
//  },
//  setChecked: function(taskId, setChecked) {
//    var task = Tasks.findOne(taskId);
//    if (task.owner !== Meteor.userId()) {
//      throw new Meteor.Error('not-authorized');
//    }
//
//    Tasks.update(taskId, { $set: { checked: setChecked }})
//  },
//  setPrivate: function(taskId, setToPrivate) {
//    console.log("set private called " + taskId + " " + setToPrivate);
//    var task = Tasks.findOne(taskId);
//
//    if (task.owner != Meteor.userId()) {
//      throw new Meteor.Error('not-authorized');
//    }
//
//    Tasks.update(taskId, { $set: { private: setToPrivate }});
//  }
//});
//
