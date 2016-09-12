(function () {
  'use strict';

  angular.module('LunchCheck', [])

  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope){
    $scope.name = "Lacatus Flori";
    $scope.dishes = "";

    $scope.checkIfTooMuch = function () {
      var dishes = $scope.dishes;

      var noWhiteSpaceDishes = removeAllWhiteSpaces(dishes);
      var arrayString = transformStringInArray(noWhiteSpaceDishes);

      if (countNonEmptyStrings(arrayString) <= 0) {
        $scope.message = "Please insert data first";
        return;
      }
      if(countNonEmptyStrings(arrayString) <=3){
        $scope.message = "Enjoy!";
        return;
      }
      $scope.message = "Too much!"
      return;
    }
  }
})();

function countNonEmptyStrings (stringArray) {
  var count = 0;
  for(var i = 0, len = stringArray.length; i < len; i++){
    if(stringArray[i].length != 0){
      count++;
    }
  }
  return count;
}

function removeAllWhiteSpaces (string) {
  return string.replace(/\s/g, '');
}

function transformStringInArray (string) {
  return removeAllWhiteSpaces(string).split(/[,.]+/);
}
