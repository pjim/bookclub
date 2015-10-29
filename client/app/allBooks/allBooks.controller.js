'use strict';

angular.module('bookclubApp')
  .controller('AllBooksCtrl', function ($scope,$http) {
    $scope.message = 'Hello';
    $scope.bookList = [{title:'bobsbook'},{title:'billsbook'}];
    
  });
