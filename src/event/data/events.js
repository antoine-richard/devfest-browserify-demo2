(function() {

  angular
  .module('event')
  .factory('events', function() {

    var events = [
      { name: 'ngEurope', date: '22/10/2014' },
      { name: 'DevFest',  date: '07/11/2014' },
      { name: 'Devoxx',   date: '10/11/2014' },
      { name: 'dotJS',    date: '17/11/2014' }
    ];

    return {
      list: function() {
        return events;
      }
    }

  });

}());