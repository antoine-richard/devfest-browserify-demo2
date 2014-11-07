angular
.module('event', [])
.controller('EventListCtrl', require('./controllers/list'))
.factory('events', require('./data/events'))
;