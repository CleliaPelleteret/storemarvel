(function() {
  'use strict';

  angular
    .module('marvelShop')
    .controller('CrewController', CrewController);

  /** @ngInject */
  function CrewController() {
    var vm = this;

    vm.data = 'non';
  }

})();