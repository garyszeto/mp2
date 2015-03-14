var imdbApp = angular.module('imdbApp', ['ngRoute', 'imdbControllers']);

//routing
imdbApp.config(['$routeProvider',
  function($routeProvider) {
		$routeProvider

			// list page route
			.when('/imdb250', {
				templateUrl : './partials/list.html',
				controller  : 'listController',
				controllerAs: 'lctl'
			})

			// gallery page route
			.when('/gallery', {
				templateUrl : './partials/gallery.html',
				controller  : 'galleryController',
				controllerAs: 'gctl'
			})

			// details page route
			.when('/details/:rank', {
				templateUrl : './partials/details.html',
				controller  : 'detailsController',
				controllerAs: 'dctl'
			})

			.otherwise({
				redirectTo  : '/imdb250'
			});

}]);