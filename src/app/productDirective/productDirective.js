(function() {
	'use strict';

	angular
	.module('marvelShop')
	.directive('productDirective',function(){
		var directive =  {
			restrict: 'EA',							//sur element et attribut 
			templateUrl : 'app/productDirective/productDirective.html', //fichier où mon html est 
			controller : DirectiveController,		//controller que je vais utiliser
			controllerAs: 'vm',						
			scope: {},								//pour avoir son scope a lui
			bindToController: {						//toutes les données necessaire pour que le projet marche 
				'allbd': '=',
				'img': '=',
				'title' : '=',
				'creators' : '=',
				'description' : '=',
				'price' : '=',
				'id' : '='
			}
		};
		return directive;

		function DirectiveController(cartService){				//le controller de ma directive 
			var vm = this;
			vm.cartService = cartService;

			//ajout de la quantité ou de la bd dans le panier			//fonction utiliser pour les bouttons
			vm.addToCart = function(id,price,quantity,title) {
				cartService.creationCart(id,price,quantity,title);
			};

			//suppression d'une quantité d'une bd
			vm.delQuantityToCart = function(id) {
				cartService.delQuantityBD(id);
			};
		}
	});

})();
