var shoppingModule = angular.module("ShoppingModule", []);

shoppingModule.factory("Items", function () {
    var items = {};

    items.query = function () {
        return [
            {title: "ペイントポット", description: "柄物の鍋", price: 3.95},
            {title: "ポルカドット", description: "水玉模様", price: 2.95},
            {title: "ペブル", description: "小石", price: 6.95}
        ];
    };

    return items;
});

function ShoppingController($scope, Items){
    $scope.items = Items.query();
}
