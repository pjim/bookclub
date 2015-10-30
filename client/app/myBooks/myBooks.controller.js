'use strict';

angular.module('bookclubApp')
  .controller('MyBooksCtrl', function ($scope,$http) {
    $scope.message = 'Hello';
    $scope.myBookList = [{title:"examplebook"},{title:'secondexamplebook'}];
    $scope.addNewBook = function(){
      var newBook = {
        title:$scope.newBookTitle,
        author:$scope.newBookAuthor
      }
      $http.post('/api/books',newBook);
    }
  });
