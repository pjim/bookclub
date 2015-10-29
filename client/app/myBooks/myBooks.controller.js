'use strict';

angular.module('bookclubApp')
  .controller('MyBooksCtrl', function ($scope,$http) {
    $scope.message = 'Hello';
    $scope.myBookList = [{title:"examplebook"},{title:'secondexamplebook'}];
    var newBook = $scope.newBookTitle;
    $scope.addNewBook = $http.post('/api/books',{title:newBook});
  });
