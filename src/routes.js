(function() {

  angular
  .module('demoApp')
  .config(function($routeProvider) {

    $routeProvider
      .when('/events', { controller : 'EventListCtrl', controllerAs : 'list', templateUrl : 'partials/event/list.html' })
      .otherwise(      { redirectTo : '/events' });
      
  });

}());