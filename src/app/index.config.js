(function() {
  'use strict';

  angular
    .module('marvelShop')
    .config(config);

  /** @ngInject */
    function config($logProvider) {
        // Enable log
        $logProvider.debugEnabled(true);   
    }
})();
