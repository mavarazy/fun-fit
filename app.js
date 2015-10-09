if (Meteor.isClient) {

  angular.module('fun-fit', ['angular-meteor']);

  function onReady() {
    angular.bootstrap(document, ['fun-fit']);
  }

  if (Meteor.isCordova)
    angular.element(document).on('deviceready', onReady);
  else
    angular.element(document).ready(onReady);

}

if (Meteor.isServer) {
  Meteor.publish('tasks', function () {
    return Tasks.find({
      $or: [
        { private: { $ne: true }},
        { owner: this.userId }
      ]
    });
  });
}