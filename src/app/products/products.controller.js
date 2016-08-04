(function() {
  'use strict';

  angular
    .module('marvelShop')
    .controller('PageController', PageController);

  /** @ngInject */
	function PageController($http,Cart) {
		var vm = this;

		var baseUrl = 'http://gateway.marvel.com/v1/public';
		var apiKey = 'c6e5c775a0e14c0200183cbf0cce0aca';
		vm.limit = 5;
		vm.offset = 0;
		vm.maxPages = 10;	
		vm.totalprice = 0;
		vm.totalquantity =0;
	
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
		
		/*vm.addCart = function(id,price,quantity) {
			vm.oui = true;
			if (vm.tableau === undefined) {
				vm.tableau = [];
				vm.tableau.push({'id':id,'quantity':quantity,'price':price});
				vm.priceone = price;
			} else {
				var tableauLength = vm.tableau.length;
				var find = false; 

				for (var i=0; i < tableauLength; i++) {
					if(vm.tableau[i].id === id) {
						find = true; 
						vm.tableau[i].quantity++;
					} 
				}
				if (find === false) {
					vm.tableau.push({'id':id,'quantity':quantity,'price':price});
				}	

			}

			vm.totalquantity += quantity; 
			var pricetotalbd = price * quantity; 
			vm.totalprice += pricetotalbd;
			vm.totalprice = Math.round(vm.totalprice*100)/100;
		}*/

		vm.addCart = Cart;
		console.log(vm.addCart);

		vm.delCart = function(id,quantity,price){

			var tableauLength = vm.tableau.length;
			for(var i=0; i<tableauLength;i++){
				if(vm.tableau[i].id === id){
					vm.tableau[i].quantity -=1;	
					vm.totalquantity-=1;
					vm.totalprice -= price; 	
					vm.totalprice = Math.round(vm.totalprice*100)/100;
					if (vm.tableau[i].quantity === 0) {
						vm.tableau.splice (i,1);
					} 

				}
			}
		}
	}


})();