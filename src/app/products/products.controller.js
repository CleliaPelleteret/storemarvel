(function() {
  'use strict';

  angular
    .module('marvelShop')
    .controller('PageController', PageController);

  /** @ngInject */
	function PageController($http,cartService) {
		var vm = this;
		var baseUrl = 'http://gateway.marvel.com/v1/public';
		var apiKey = 'c6e5c775a0e14c0200183cbf0cce0aca';
		vm.limit = 5;
		vm.offset = 0;
		vm.maxPages = 10;
		
		//fonction pour avoir les données de l'API marvel 
		$http.get(baseUrl + '/comics?limit='+vm.limit+'&offset='+vm.offset+'&apikey=' + apiKey).then(function(response) {
			vm.reponseData = response.data; 								//regrouper toutes les données(reponses) en une variable
			vm.nbrPage = vm.reponseData.data.total /vm.limit ; 				//calcul le nombre de page qu'on aura dans la pagination 
			vm.getNumber = function(num) {									//fonction pour avoir un nombre arrondi de page 
				var rounded = Math.round(num);
				return new Array(rounded);
			}	
		});

		//fonction pour avoir un depart et une limit de bd sur une pages changeant selon le click sur la pagination
		vm.gotoPage = function($index) {
			vm.offset= (vm.limit * $index);
			$http.get(baseUrl +'/comics?limit=' +vm.limit +'&offset=' +vm.offset +'&apikey=' +apiKey).then(function(response) {
				vm.reponseData = response.data;
			});
		};

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