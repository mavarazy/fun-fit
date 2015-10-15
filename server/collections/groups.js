Meteor.publish('groups', function () {
    return Groups.find({
        $or: [
            { private: { $ne: true }},
            { owner: this.userId }
        ]
    });
});
