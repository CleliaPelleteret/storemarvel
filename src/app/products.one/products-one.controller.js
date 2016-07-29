(function() {
  'use strict';

  angular
    .module('marvelShop')
    .controller('PageController', PageController);

  /** @ngInject */
	function PageController($http) {
		var vm = this;

		
		var baseUrl = 'http://gateway.marvel.com/v1/public';
		var apiKey = 'c6e5c775a0e14c0200183cbf0cce0aca';
		vm.limit = 5;
		vm.offset = 0;
		

		$http.get(baseUrl + '/comics?limit='+vm.limit+'&offset='+vm.offset+'&apikey=' + apiKey).then(function(response, status) {
				console.log('status', status, 'response', response);
				vm.cData = response.data;

				vm.nbrpage = vm.cData.data.total/ vm.limit ;

				vm.getNumber = function(num){
					var rounded = Math.round(num);
					return new Array(rounded);
				}

				console.log(vm.cData.data.results[0].creators);
		});
		
		vm.gotoPage = function($index){
			vm.offset= (vm.limit * $index)+ 1;
			$http.get(baseUrl +'/comics?limit=' +vm.limit +'&offset=' +vm.offset +'&apikey=' +apiKey).then(function(response, status) {
				console.log('status', status, 'response', response);
				vm.cData = response.data;
			});
		}
	}
})();