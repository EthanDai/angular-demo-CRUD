'use strict';

/* Filters */

angular.module('myApp.filters', []).
  filter('nl2br', [function() {
    return function(text) {
      return text.replace(/\n/g,"<br>");
    }
  }]);
