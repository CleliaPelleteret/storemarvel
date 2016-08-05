(function() {
	'use strict';

	angular
	.module('marvelShop')
	.factory('CartService', CartService);

	function CartService() {
		return {
			addCart : function(id,price,quantity,tableau) {
				if (tableau === undefined) {
					tableau = [];
					tableau.push({'id':id,'quantity':quantity,'price':price});
				} else {
					var tableauLength = tableau.length;
					var find = false; 
					for (var i=0; i < tableauLength; i++) {
						if(tableau[i].id === id) {
							find = true; 
							tableau[i].quantity++;
						} 
					}
					if (find === false) {
						tableau.push({'id':id,'quantity':quantity,'price':price});
					}	
				}
				return tableau; 
			},
			
			addPrice : function(tableau) {
				var length = tableau.length;
				var totalquantity =0;
				var totalprice = 0;
				for (var i =0; i< length; i++){
					totalquantity += tableau[i].quantity;
					var pricetotalbd = tableau[i].price * tableau[i].quantity; 
					totalprice += pricetotalbd;
					totalprice = Math.round(totalprice*100)/100;
				}
				return {
					totalprice: totalprice,
					totalquantity: totalquantity
				}

			},
			delPrice: function(id,tableau,totalprice) {
				var Length = tableau.length;
				for(var i=0; i<Length;i++){
					if(tableau[i].id === id){
						totalprice -= tableau[i].price; 	
						totalprice = Math.round(totalprice*100)/100;
					}
				}
				return totalprice;
			},

			delQuantity: function(id,tableau,totalquantity) {
				var Length = tableau.length;
				for(var i=0; i<Length;i++){
					if(tableau[i].id === id){
						tableau[i].quantity -=1;	
						totalquantity-=1;
						if (tableau[i].quantity === 0) {
							tableau.splice (i,1);
						}
					}
				}
				return totalquantity;
			}
		}
	}
})();
