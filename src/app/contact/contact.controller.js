(function() {
  'use strict';

  angular
    .module('marvelShop')
    .controller('ContactController', ContactController);

  /** @ngInject */
  function ContactController() {
    var vm = this;

    vm.data = 'je sui fier detre la ';
  }

})();