'use strict';

angular.module('bookclubApp')
  .controller('MyBooksCtrl', function ($scope,$http,Auth) {
    $scope.message = 'Hello';
    $scope.myBookList = [{title:"examplebook"},{title:'secondexamplebook'}];
    $scope.addNewBook = function(){
      var newBook = {
        title:$scope.newBookTitle,
        author:$scope.newBookAuthor,
        owner:Auth.getCurrentUser().name
      }
      $http.post('/api/books',newBook);
    }
  });
