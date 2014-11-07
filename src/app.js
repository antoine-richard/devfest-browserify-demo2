require('angular/angular');
require('angular-route/angular-route');

require('./event');

angular
.module('demoApp', ['ngRoute', 'event'])
.config(require('./routes'))
;