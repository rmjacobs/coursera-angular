(function () {
'use strict';
angular.module("ShoppingListCheckOff", [])
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .controller('ToBuyController', ToBuyController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService)

    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController (ShoppingListCheckOffService) {
        var boughtController = this;
        boughtController.itemsBought = ShoppingListCheckOffService.getItemsBought();

        boughtController.nothingBoughtMessage = "Nothing bought yet";
    }

    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController (ShoppingListCheckOffService) {
        var buyController = this;
        buyController.itemsToBuy = ShoppingListCheckOffService.getItemsToBuy();
        buyController.buyItem = function(name, quantity, index) {
            ShoppingListCheckOffService.addItemBought(name, quantity);
            ShoppingListCheckOffService.removeItemToBuy(index);
        }
        buyController.nothingToBuyMessage = "Everything is bought!";
    }

    function ShoppingListCheckOffService() {
        var service = this;



        var itemsBought = [

        ];

        var itemsToBuy = [
            {
                name: "Cookies",
                quantity: "2"
            },
            {
                name: "Donuts",
                quantity: "1"
            },
            {
                name: "Chocolate",
                quantity: "5"
            },
            {
                name: "Chips",
                quantity:"1"
            },
            {
                name: "Peanuts",
                quantity:"1"
            }
        ];
        service.addItemToBuy = function (itemName, quantity) {
            var item = {
                name: itemName,
                quantity: quantity
            };
            itemsToBuy.push(item);
        };

        service.removeItemToBuy = function (itemIndex) {
            itemsToBuy.splice(itemIndex, 1);
        };
        service.addItemBought = function (itemName, quantity) {
            var item = {
                name: itemName,
                quantity: quantity
            };
            itemsBought.push(item);
        };

        service.removeItemBought = function (itemIndex) {
            itemsBought.splice(itemIndex, 1);
        };

        service.getItemsToBuy = function(){
            return itemsToBuy;
        };
        service.getItemsBought = function() {
            return itemsBought;
        };
    }
})();
