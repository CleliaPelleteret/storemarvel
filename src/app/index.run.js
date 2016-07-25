(function() {
  'use strict';

  angular
    .module('marvelShop')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {
    $log.debug('runBlock end');
  }

})();
