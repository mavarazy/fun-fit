angular.module('fun-fit', ['ui.router', 'angular-meteor']);

function onReady() {
    angular.bootstrap(document, ['fun-fit']);
}

if (Meteor.isCordova)
    angular.element(document).on('deviceready', onReady);
else
    angular.element(document).ready(onReady);
