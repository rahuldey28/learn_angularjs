(function(){
'use strict';

angular.module('LunchCheck',[])
.controller('LunchCheckController',LunchCheckController);
LunchCheckController.$inject=['$scope'];

function LunchCheckController($scope){
$scope.DietList="";
$scope.finalMsg="";
//$scope.style={"color":'black',"border-color":"black"};
$scope.displayMsg= function() {
  var totalFoodItem = calculateNumberOfItem($scope.DietList);
  if (totalFoodItem == 1){

      $scope.finalMsg ="Please enter data first";
      $scope.style={"color":'red',"border-color":"red"};
  }
  else if (totalFoodItem > 1 && totalFoodItem <= 3){

      $scope.finalMsg ="Enjoy!";
      $scope.style={"color":'green',"border-color":"green"};

    }
  else if (totalFoodItem > 3){

     $scope.finalMsg ="Too Much!";
$scope.style={"color":'green',"border-color":"green"};
  }


}

function calculateNumberOfItem(string){
  var numberOfString = 0;
  var arrayOfString = string.split(",");
  numberOfString = arrayOfString.length;
  return numberOfString;
}

}

})();
