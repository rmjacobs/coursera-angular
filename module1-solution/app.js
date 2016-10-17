(function () {
'use strict';
angular.module("LunchCheck", [])

    .controller("LunchCheckController", LunchCheckController);
        function LunchCheckController ($scope) {
            $scope.lunchItems="";
            $scope.errorMessage = "";
            $scope.checkLunch = function () {
                var listSize = $scope.lunchItems.split(",");
                //Filter out empty strings.
                listSize = listSize.filter(function(x) {
                    return (x.trim()!==(undefined ||''))
                });
                console.log(listSize.length);
                if(!$scope.lunchItems) {
                    $scope.errorMessage = "Please enter data first"
                } else if(listSize.length > 3) {
                    $scope.errorMessage = "Too Much!";
                } else {
                    $scope.errorMessage = "Enjoy!";
                }
            }
        }
})();
