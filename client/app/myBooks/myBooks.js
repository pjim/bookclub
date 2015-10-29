'use strict';

angular.module('bookclubApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/myBooks', {
        templateUrl: 'app/myBooks/myBooks.html',
        controller: 'MyBooksCtrl'
      });
  });
