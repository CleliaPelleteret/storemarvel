(function() {
  'use strict';

  angular
    .module('marvelShop')
    .controller('DescriptionController', DescriptionController);

  /** @ngInject */
	function DescriptionController($http,$stateParams) {
		var vm = this; 
		vm.data = 'non';	
		var baseUrl = 'http://gateway.marvel.com/v1/public';
		var apiKey = 'c6e5c775a0e14c0200183cbf0cce0aca';

		vm.id = $stateParams.id;


		$http.get(baseUrl +'/comics/'+ vm.id +'?apikey=' +apiKey).then(function(response) {
			vm.cData = response.data;

			vm.dates = vm.cData.data.results[0].dates[0].date;
			vm.base= vm.cData.data.results[0];
		
		});
		
	}

})();