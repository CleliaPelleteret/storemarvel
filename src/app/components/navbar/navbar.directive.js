(function() {
  'use strict';

    angular
        .module('marvelShop')
        .directive('acmeNavbar', acmeNavbar);

  /** @ngInject */
    function acmeNavbar() {
        var directive = {
        restrict: 'E',
        templateUrl: 'app/components/navbar/navbar.html',
        scope: {
            creationDate: '='
        },
        controller: NavbarController,
        controllerAs: 'vm',
        bindToController: true
    };
    return directive;
    }

    /** @ngInject */
    function NavbarController(moment,cartService) {
        var vm = this;
        vm.cartService = cartService;

    }
})();
