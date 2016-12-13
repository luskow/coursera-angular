(function () {
  'use strict';

  angular.module('CheckOffApp', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService) {
    var buy = this;

    buy.items = ShoppingListCheckOffService.getItems();

    buy.removeItem = function (itemIndex) {
     ShoppingListCheckOffService.removeItem(itemIndex);
    };
  }

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var bought = this;

    bought.items = ShoppingListCheckOffService.getBoughtItems();
  }

  function ShoppingListCheckOffService() {
  var service = this;

  // List of shopping items
  var itemsToBuy = [
    {
      name: "Book",
      quantity: "2"
    },
    {
      name: "Note",
      quantity: "4"
    },
    {
      name: "Pen",
      quantity: "30"
    },
    {
      name: "Pencil",
      quantity: "50"
    },

    {
      name: "Piano sheet",
      quantity: "500"
    }    
  ];

  var itemsToBuyHelper = itemsToBuy;

  var startLenghtItems = itemsToBuyHelper.lenght;

  var boughtItems = [];

  service.removeItem = function (itemIdex) {   
    boughtItems.push(itemsToBuy[itemIdex]);   
    itemsToBuy.splice(itemIdex, 1);
  };

  service.getItems = function () {
    return itemsToBuy;
  };

  service.getBoughtItems = function () {
    return boughtItems;
  };   

}

})();
