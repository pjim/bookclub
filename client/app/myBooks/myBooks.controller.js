'use strict';

angular.module('bookclubApp')
  .controller('MyBooksCtrl', function ($scope) {
    $scope.message = 'Hello';
    $scope.myBookList = [{title:"examplebook"},{title:'secondexamplebook'}];
  });
