'use strict';

angular.module('bookclubApp')
  .directive('typer', function () {
    return {
      template: '<div><p></p></div>',
      restrict: 'EA',
      link: function (scope, element, attrs) {

        element.find('p').typed({
          strings:["Welcome to Book Land","Here you can store your books and loan books from others"],
          typeSpeed:0});
      }
    };
  });
