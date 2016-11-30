(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) {
  $scope.food = "";
  $scope.message = "";

  var re = /\s*,\s*/;

  $scope.CheckNumberOfItems = function (){
  	var nameList = $scope.food.split(re);
  	var numberOfItems = nameList.length;
  	var numberOfItemsUp = 0;
  	$scope.customStyle = {};


  	for(var i = 0; i < numberOfItems; i++){
  		if(nameList[i] != ''){
  			numberOfItemsUp++;
  		}
  	}

  	console.log(numberOfItemsUp);

  	if(numberOfItemsUp == 0){
  		$scope.customStyle.style = {"color":"red", "border":"1px solid red", "padding":"5px"};
  		$scope.message = 'Please enter data first';
  	}
  	else{
	  	if(numberOfItemsUp <= 3 && numberOfItemsUp > 0)
	  	{
	  		$scope.customStyle.style = {"color":"green", "border":"1px solid green", "padding":"5px"};
	  		$scope.message = 'Enjoy!';
	  	}

	  	else{
	  		$scope.customStyle.style = {"color":"green", "border":"1px solid green", "padding":"5px"};
	  		$scope.message = 'Too much!';
	  	}
  	}

  	return $scope.message;
  }

}

})();
