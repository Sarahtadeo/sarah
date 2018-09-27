angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('contacts', {
    url: '/page1',
    templateUrl: 'templates/contacts.html',
    controller: 'contactsCtrl'
  })

  .state('carloCortez', {
    url: '/page1',
    templateUrl: 'templates/carloCortez.html',
    controller: 'carloCortezCtrl'
  })

  .state('sarahAbdeen', {
    url: '/page3',
    templateUrl: 'templates/sarahAbdeen.html',
    controller: 'sarahAbdeenCtrl'
  })

  .state('shaireenTongol', {
    url: '/page5',
    templateUrl: 'templates/shaireenTongol.html',
    controller: 'shaireenTongolCtrl'
  })

  .state('seanLimpin', {
    url: '/page4',
    templateUrl: 'templates/seanLimpin.html',
    controller: 'seanLimpinCtrl'
  })

  .state('sherinaPena', {
    url: '/page2',
    templateUrl: 'templates/sherinaPena.html',
    controller: 'sherinaPenaCtrl'
  })

$urlRouterProvider.otherwise('/page1')


});