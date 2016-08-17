(function() {
  'use strict';

  angular
    .module('marvelShop')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('products',{
        url: '/products',
        templateUrl: 'app/products/products.html',
        controller: 'ProductController',
        controllerAs: 'products'
      })
      .state('contact',{
        url: ('/contact'),
        templateUrl: 'app/contact/contact.html',
        controller: 'ContactController',
        controllerAs: 'contact' 
      })
       .state('cart',{
        url: ('/cart'),
        templateUrl: 'app/cart/cart.html',
        controller: 'CartController',
        controllerAs: 'cart' 
      })
      .state('description',{
        url: ('/:id'),
        templateUrl: 'app/description/description.html',
        controller: 'DescriptionController',
        controllerAs: 'bd' 
      });
        

    $urlRouterProvider.otherwise('/');
  }

})();
