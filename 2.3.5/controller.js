var myAppModule = angular.module("myApp", []);

myAppModule.controller("HeaderController", function ($scope) {
    $scope.isError = false;
    $scope.isWarning = false;

    $scope.showError = function () {
        $scope.messageText = "エラー発生！";
        $scope.isError = true;
        $scope.isWarning = false;
    };

    $scope.showWarning = function () {
        $scope.messageText = "警告発生！";
        $scope.isWarning = true;
        $scope.isError = false;
    };
});

myAppModule.controller("RestaurantTableController", function ($scope) {
    $scope.directory = [
        {name: "ハンサム・ヘファー", cuisine: "BBQ"},
        {name: "グリーンズ・グリーン・グリーンズ", cuisine: "サラダ"},
        {name: "ハウス・オブ・ファイン・フィッシュ", cuisine: "シーフード"}
    ];

    $scope.selectRestaurant = function (row) {
        $scope.selectedRow = row;
    };
});
