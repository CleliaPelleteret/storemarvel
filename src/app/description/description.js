(function() {
  'use strict';

  angular
    .module('marvelShop')
    .controller('DescriptionController', DescriptionController);

  /** @ngInject */
	function DescriptionController($http,$stateParams,CartService) {
		var vm = this; 
		vm.data = 'non';	
		var baseUrl = 'http://gateway.marvel.com/v1/public';
		var apiKey = 'c6e5c775a0e14c0200183cbf0cce0aca';

		$http.get(baseUrl +'/comics/'+ vm.id +'?apikey=' +apiKey).then(function(response) {
			vm.cData = response.data;

			vm.dates = vm.cData.data.results[0].dates[0].date;
			vm.base= vm.cData.data.results[0];
			console.log(vm.base.prices[0].price)
			
		});

		vm.addCart = function(id,price,quantity,tableau) {
			vm.tableau = CartService.addCart(id,price,quantity,tableau);
			vm.totalprice = CartService.addPrice(vm.tableau).totalprice;
			console.log(vm.tableau);
		};



		
	}

})();