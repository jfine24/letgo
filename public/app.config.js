angular.
  module('letgoApp').
  config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/login', {
          template: '<login></login>'
        }).
        when('/newUser', {
          template: '<new-user></new-user>'
        }).
        when('/forSale', {
          template: '<for-sale></for-sale>'
        }).
        when('/forSale/:listId', {
          template: '<item-detail></item-detail>'
        }).
        otherwise('/login');
    }
  ]);