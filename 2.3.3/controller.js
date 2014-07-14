var myAppModule = angular.module("myApp", []);

myAppModule.controller("StartUpController", function ($scope) {
    $scope.computeNeeded = function () {
        $scope.needed = $scope.startingEstimate * 10;
    };

    $scope.requestFunding = function () {
        window.alert("もっと顧客をふやしてからにしてください");
    };

    $scope.reset = function () {
        $scope.startingEstimate = 0;
        $scope.needed = 0;
    };
//    $scope.funding = {startingEstimate: 0};
//
//    var computeNeeded = function () {
//        $scope.funding.needed = $scope.funding.startingEstimate * 10;
//    };
//
//    $scope.$watch("funding.startingEstimate", computeNeeded);
});
