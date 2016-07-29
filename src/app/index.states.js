(function() {
  'use strict';

  angular
    .module('marvelShop')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('products', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('products_one',{
        url: '/page.one',
        templateUrl: 'app/products.one/products-one.html',
        controller: 'PageController',
        controllerAs: 'onepage'
      })
      .state('products-two',{
        url: '/page.two',
        templateUrl: 'app/products.two/products-two.html',
        controller: 'CrewController',
        controllerAs: 'pt'
      })
      .state('contact',{
        url: ('/contact'),
        templateUrl: 'app/contact/contact.html',
        controller: 'ContactController',
        controllerAs: 'contact' 
      });

    $urlRouterProvider.otherwise('/');
  }

})();
