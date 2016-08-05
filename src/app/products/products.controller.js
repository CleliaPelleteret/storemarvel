(function() {
  'use strict';

  angular
    .module('marvelShop')
    .controller('PageController', PageController);

  /** @ngInject */
	function PageController($http, CartService) {
		var vm = this;

		var baseUrl = 'http://gateway.marvel.com/v1/public';
		var apiKey = 'c6e5c775a0e14c0200183cbf0cce0aca';
		vm.limit = 5;
		vm.offset = 0;
		vm.maxPages = 10;	

	
		$http.get(baseUrl + '/comics?limit='+vm.limit+'&offset='+vm.offset+'&apikey=' + apiKey).then(function(response) {
				vm.cData = response.data;

				vm.nbrpage = vm.cData.data.total/ vm.limit ;

				vm.getNumber = function(num){
					var rounded = Math.round(num);
					return new Array(rounded);
				}	
		});

		vm.gotoPage = function($index){
			vm.offset= (vm.limit * $index);
			$http.get(baseUrl +'/comics?limit=' +vm.limit +'&offset=' +vm.offset +'&apikey=' +apiKey).then(function(response) {
				vm.cData = response.data;

			});
		}
		
		vm.addCart = function(id,price,quantity,tableau) {
			vm.tableau = CartService.addCart(id,price,quantity,tableau);
			vm.totalprice = CartService.addPrice(vm.tableau).totalprice;
			vm.totalquantity = CartService.addPrice(vm.tableau).totalquantity;
		};

		vm.delCart = function(id,tableau,totalprice,totalquantity){
			vm.totalprice = CartService.delPrice(id,tableau,totalprice,totalquantity);
			vm.totalquantity = CartService.delQuantity(id,tableau,totalprice,totalquantity);
		}
	}
})();