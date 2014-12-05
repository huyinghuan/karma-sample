angular.module('myApp', [])
  .controller('MainController', ($scope)->
    $scope.name = "Ari"
    $scope.sayHello = ->
      $scope.greeting = "Hello " + $scope.name
  )