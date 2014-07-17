function CartController($scope) {
    $scope.bill = {};
    
    $scope.items = [
        {title: "ペイントポット", quantity: 8, price: 3.95},
        {title: "ポルカドット", quantity: 17, price: 12.95},
        {title: "ペブル", quantity: 5, price: 6.95}
    ];

    var calculateTotals = function () {
        var total = 0;
        for (var i = 0, len = $scope.items.length; i < len; i++) {
            total = total + $scope.items[i].price * $scope.items[i].quantity;
        }
        $scope.bill.total = total;
        $scope.bill.discount = total > 100 ? 10 : 0;
        $scope.bill.subTotal = total - $scope.bill.discount;
        console.log('debug');
    };

    $scope.$watch("items", calculateTotals, true);
}
