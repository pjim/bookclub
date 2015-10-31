'use strict';

angular.module('bookclubApp')
  .directive('typer', function () {
    return {
      template: '<div><p></p></div>',
      restrict: 'EA',
      link: function (scope, element, attrs) {

        element.find('p').typed({
          strings:["Welcome to Book Land","Here you can swap old books  and find something new to read"],

          typeSpeed:0});
      }
    };
  });
