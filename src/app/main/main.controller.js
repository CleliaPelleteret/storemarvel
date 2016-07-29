(function() {
  'use strict';

  angular
    .module('marvelShop')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, webDevTec, toastr, $http) {
    var vm = this;

    var baseUrl = 'http://gateway.marvel.com/v1/public';
    var apiKey = 'c6e5c775a0e14c0200183cbf0cce0aca';

    $http.get(baseUrl + '/characters?apikey=' + apiKey).then(function(response, status) {
      console.log('status', status, 'response', response);
    });

    vm.awesomeThings = [];
    vm.classAnimation = '';
    vm.creationDate = 1469178547198;

    activate();

    function activate() {
      getWebDevTec();
      $timeout(function() {
        vm.classAnimation = 'rubberBand';
      }, 4000);
    }

    function getWebDevTec() {
      vm.awesomeThings = webDevTec.getTec();

    }
  }
})();
