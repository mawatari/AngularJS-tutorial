function AddUserController($scope) {
    $scope.message = "";

    $scope.addUser = function () {
        $scope.message = $scope.user.first + "さんが登録されました！";
    };
}
