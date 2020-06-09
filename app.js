  
(function () {
    'use strict';
    
    angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController',AlreadyBoughtController)
    .service('ShoppingListCheckOffService',ShoppingListCheckOffService);
    
    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService) {
        var toBuy = this;
        toBuy.toBuyItems = ShoppingListCheckOffService.getToBuyItems();
        toBuy.removeItem = function(itemIndex){
            ShoppingListCheckOffService.removeItem(itemIndex);
        };
      }
      

    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService) {
        var bought = this;
        bought.boughtItems = ShoppingListCheckOffService.getBoughtItems();
      
    }

    function ShoppingListCheckOffService(){
        var service = this;

        var itemList = [
            {
              name: "Milk Packets",
              quantity: "2"
            },
            {
              name: "Donuts",
              quantity: "200"
            },
            {
              name: "Cookies",
              quantity: "300"
            },
            {
              name: "Chocolates",
              quantity: "5"
            },
            {
              name: "Biscuits",
              quantity: "6" 
            },
            {
              name: "Lays Packets",
              quantity: "4" 
            }
          ];

        var boughtItems = [];

        service.getBoughtItems = function(){
            return boughtItems;
        }

        service.getToBuyItems = function(){
            return itemList;
        };

        service.removeItem = function(itemIndex){
            var item = itemList.splice(itemIndex, 1);
            var temp = {
                name : item[0]['name'],
                quantity : item[0]['quantity']
            };
            boughtItems.push(temp);
        }
              
    }

})();