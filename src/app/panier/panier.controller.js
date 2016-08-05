(function() {
  'use strict';

  angular
    .module('marvelShop')
    .controller('PanierController', PanierController);

  /** @ngInject */
	function PanierController() {
		var vm = this;
		vm.hello = "helo";
	
	}
})();