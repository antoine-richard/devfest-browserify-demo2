(function() {

  angular
  .module('event')
  .controller('EventListCtrl', function(events) {

    this.events = events.list();

  });

}());