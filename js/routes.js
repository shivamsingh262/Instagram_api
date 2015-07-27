mainApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/images/:param', {
        templateUrl: 'templates/images.html',
        controller: 'myController'
    });
}]);