(function(){
  'use strict';

  angular.module('ShoppingListCheckOff', [])
  .controller("ToBuyShoppingController", ToBuyShoppingController)
  .controller("AlreadyBoughtShoppingController", AlreadyBoughtShoppingController)
  .service("ShoppingListCheckOffService", ShoppingListCheckOffService);


ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
function ToBuyShoppingController (ShoppingListCheckOffService) {
  var toBuy = this;

  toBuy.items = ShoppingListCheckOffService.showToBuyList();

  toBuy.moveItem = function (itemIndex) {
    ShoppingListCheckOffService.moveItem(itemIndex);
  }
}

AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtShoppingController (ShoppingListCheckOffService) {
  var alreadyBought = this;

  alreadyBought.items = ShoppingListCheckOffService.getBoughtItems();
}

function ShoppingListCheckOffService () {
  var service = this;

  var toBuyList = [
    { name: 'Chocolates',
      quantity: 10
    },
    { name: 'Eggs',
      quantity: 20
    },
    { name: 'Bananas',
      quantity: 6
    },
    { name: 'Tomatoes',
      quantity: 15
    },
    { name: 'Potatoes',
      quantity: 25
    }
 ];

 var alreadyBoughtList = [];

 service.showToBuyList = function () {
   return toBuyList;
 }

 service.moveItem = function (itemIndex) {
   var boughtItem = {
     name: toBuyList[itemIndex].name,
     quantity: toBuyList[itemIndex].quantity
   }

   alreadyBoughtList.push(boughtItem); //add the removed element to the alreadyBoughtList
   toBuyList.splice(itemIndex, 1); //remove the selected item from toBuyList
 }

 service.getBoughtItems = function () {
   return alreadyBoughtList;
 }
}







})();
