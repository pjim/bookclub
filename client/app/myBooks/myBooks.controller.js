'use strict';

angular.module('bookclubApp')
  .controller('MyBooksCtrl', function ($scope,$http,Auth) {
    $scope.message = 'Hello';
    $http.post('api/books/sub',{'owner':Auth.getCurrentUser().name}).success(function(data){
      console.log(data);
      $scope.myBookList = data;
    });
    $scope.addNewBook = function(){
      var newBook = {
        title:$scope.newBookTitle,
        author:$scope.newBookAuthor,
        owner:Auth.getCurrentUser().name
      }
      $http.post('/api/books',newBook);
    }
  });
