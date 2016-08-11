(function() {
  'use strict';

  angular
    .module('marvelShop')
    .controller('DescriptionController', DescriptionController);

  /** @ngInject */
	function DescriptionController($http,$stateParams,cartService) {
		var vm = this; 	
		var baseUrl = 'http://gateway.marvel.com/v1/public';
		var apiKey = 'c6e5c775a0e14c0200183cbf0cce0aca';
		vm.id = $stateParams.id;	

		$http.get(baseUrl +'/comics/'+ vm.id +'?apikey=' +apiKey).then(function(response) {
			vm.responseData = response.data;
			vm.base= vm.responseData.data.results[0];	
			vm.dates = vm.base.dates[0].date;	
		});

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