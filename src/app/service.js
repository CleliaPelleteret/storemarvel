 angular
    .module('marvelShop')
    .service('Cart',Cart);

function Cart() {
	return{
		addCart : Cart.prototype.addCart
	}
}
Cart.prototype.addCart = function(id,price,quantity){
	
	var vm = this;
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

}
