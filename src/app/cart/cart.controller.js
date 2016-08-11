(function() {
  'use strict';

  angular
    .module('marvelShop')
    .controller('CartController', CartController);

  /** @ngInject */
	function CartController(cartService) {
		var vm = this;
		vm.cartService = cartService;

		vm.tableau = cartService.getTableau;

		//ajout de la quantité ou de la bd dans le panier
		vm.addToCart = function(id,price,quantity){
			cartService.creationCart(id,price,quantity);
		};

		//suppression d'une quantité d'une bd
		vm.delQuantityToCart = function(id){
			cartService.delQuantityBD(id);
		};
	}

})();