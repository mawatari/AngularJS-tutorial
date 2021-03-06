function CartController($scope) {
    $scope.bill = {};
    
    $scope.items = [
        {title: "ペイントポット", quantity: 8, price: 3.95},
        {title: "ポルカドット", quantity: 17, price: 12.95},
        {title: "ペブル", quantity: 5, price: 6.95}
    ];
    
    $scope.totalCart = function () {
        var total = 0;
        for (var i = 0, len = $scope.items.length; i < len; i++) {
            total = total + $scope.items[i].price * $scope.items[i].quantity;
        }
        console.log('debug');

        return total;
    };

    $scope.subTotal = function () {
        return $scope.totalCart() - $scope.bill.discount;
    };

    function calculateDiscount(newValue, oldValue, scope) {
        $scope.bill.discount = newValue > 100 ? 10 : 0;
    }

    $scope.$watch($scope.totalCart, calculateDiscount);
}
