function SomeController($scope) {
    $scope.message = {text: "クリックされていません"};

    $scope.clickUnfocused = function () {
        $scope.message.text = "フォーカスなしのボタンがクリックされました";
    };

    $scope.clickFocused = function () {
        $scope.message.text = "フォーカスありのボタンがクリックされました";
    }
}

var appModule = angular.module("app", []);

appModule.directive("ngbkFocus", function () {
    return {
        link: function (scope, element, attrs, controller) {
            element[0].focus();
        }
    };
});
