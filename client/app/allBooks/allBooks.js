'use strict';

angular.module('bookclubApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/allBooks', {
        templateUrl: 'app/allBooks/allBooks.html',
        controller: 'AllBooksCtrl'
      });
  });
