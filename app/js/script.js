'use strict';
var wapp = angular.module("miPrimerWebApp", []);

wapp.controller('controladorBasico', ['$scope',
  function controladorBasico($scope){
    var misDogs = [
    {nombre:"nobmre uno", edad: 24},
    {nombre:"nobmre udos", edad: 41},
    {nombre:"nobmre tres", edad: 4}
    ];
    $scope.superDogs = misDogs;
  }
  ]);