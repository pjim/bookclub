'use strict';

angular.module('bookclubApp')
  .controller('SettingsCtrl', function ($scope, User, Auth,$http) {
    $scope.errors = {};

    $scope.changePassword = function(form) {
      $scope.submitted = true;
      if(form.$valid) {
        Auth.changePassword( $scope.user.oldPassword, $scope.user.newPassword )
        .then( function() {
          $scope.message = 'Password successfully changed.';
        })
        .catch( function() {
          form.password.$setValidity('mongoose', false);
          $scope.errors.other = 'Incorrect password';
          $scope.message = '';
        });
      }
		};
    $scope.addDetails = function(){
      console.log(Auth.getCurrentUser());
      var usId = Auth.getCurrentUser()._id;
        $http.put('api/users/details',{id:usId,name:$scope.userName,city:$scope.userCity}).success(function(data){
          console.log(data);
       });
    }
  });
