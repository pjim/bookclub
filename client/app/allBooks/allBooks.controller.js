'use strict';

angular.module('bookclubApp')
  .controller('AllBooksCtrl', function ($scope,$http) {
    $scope.message = 'Hello';
    $http.get('api/books').success(function(data){
      console.log(data);
      $scope.bookList = data;
    });
  });
