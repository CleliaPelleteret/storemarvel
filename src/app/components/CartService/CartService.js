(function() {
	'use strict';

	angular
	.module('marvelShop')
	.factory('cartService', cartService);

	function cartService() {

		//variable global pour toutes les methodes du service
		var tableau = [];
		var priceTotalCart;
		var quantityTotalCart;
	
		return {

			//appeler les variables global
			getTableau : tableau,
			getPriceTotalCart : function(){
				return priceTotalCart;
			},

			getQuantityTotalCart : function() {
				return quantityTotalCart;
			},

			//fonction qui ajoute et soustrait les quantités et prix
			calculQuantityPriceCart : function(){
				priceTotalCart = 0;
				quantityTotalCart = 0;
				var tableauLength = tableau.length;
				for(var i =0; i < tableauLength; i++){
					priceTotalCart += tableau[i].price * tableau[i].quantity;
					priceTotalCart = Math.round(priceTotalCart*100)/100;
					quantityTotalCart += tableau[i].quantity;
				}
			},

			//fonction pour creer le debut du tableau (quantite augmente sinon on l'ajoute au tableau)		
			creationCart : function(id,price,quantity,title) {
				var tableauLength = tableau.length;
				var find = false; 
				for (var i=0; i < tableauLength; i++) {
					if(tableau[i].id === id) {
						find = true; 
						tableau[i].quantity++;
					} 
				}
				if (find === false) {
					tableau.push({'id':id,'quantity':quantity,'price':price,'title':title});
				}	
				this.calculQuantityPriceCart();
			},

			//fonction pour enlever des quantités ou supprimer dans le tableau
			delQuantityBD : function(id) {
				var tableauLength = tableau.length;
				for(var i =0; i< tableauLength; i++){
					if(tableau[i].id === id){
						tableau[i].quantity--;
						if (tableau[i].quantity <=0) {
							tableau.splice(i,1);
						}
					} 
				}	
				this.calculQuantityPriceCart();
			}
		}
	}
})();
