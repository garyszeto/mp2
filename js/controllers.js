//var demoApp = angular.module('demoApp', []);

// demoApp.controller('demoController', ['$scope', '$http', function($scope, $http) {
//   $http.get('public/data/cs498rk.json').success(function(data) {
//     $scope.courseInfo = data;
//     $scope.artistOrder = 'name';
//   });
// }]);

var imdbControllers = angular.module('imdbControllers', ['ngAnimate']);


// list
imdbControllers.controller('listController', ['$http', function($http) {
	var ctl = this;
	ctl.search = "";
	ctl.sortCrit = "rank";


	$http.get('./data/imdb250.json').success(function(data) {
		ctl.movieInfo = data;
	});


}]);

// gallery
imdbControllers.controller('galleryController', ['$http', function($http) {
	var ctl = this;
	ctl.genreList = [];
	ctl.search = "";
	ctl.selectedGenre = "";
	ctl.sortCrit = "title";

	$http.get('./data/imdb250.json').success(function(data) {
		ctl.movieInfo = data;
		ctl.listGenres();
	});

	ctl.listGenres = function() {
		for(var i = 0; i < ctl.movieInfo.length; i++) {
			for(var j = 0; j < ctl.movieInfo[i].genre.length; j++) {
				var contains = false;
				for(var k = 0; k < ctl.genreList.length; k++) {
					if(ctl.genreList[k] === ctl.movieInfo[i].genre[j])
						contains = true;
				}
				if(contains == false)
					ctl.genreList.push(ctl.movieInfo[i].genre[j]);
			}

		}

	}
}]);

// details
imdbControllers.controller('detailsController', ['$http', '$routeParams', function($http, $routeParams) {
	var ctl = this;
	ctl.idx = $routeParams.rank-1;
	ctl.rank = $routeParams.rank;
	ctl.nextRank;
	ctl.prevRank;

	$http.get('./data/imdb250.json').success(function(data) {
		ctl.movieInfo = data;
		ctl.curr = ctl.movieInfo[ctl.idx];
		if(ctl.idx == 0) {
			ctl.nextRank = 2;
			ctl.prevRank = ctl.movieInfo.length;
		}
		else if(ctl.idx == (ctl.movieInfo.length - 1)) {
			ctl.nextRank = 1;
			ctl.prevRank = ctl.movieInfo.length-1;
		}
		else {
			ctl.nextRank = Number(ctl.rank)+1;
			ctl.prevRank = Number(ctl.rank)-1;
		}
	});

}]);

