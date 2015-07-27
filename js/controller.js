mainApp.controller("myController", function($scope,instagram,tag,$routeParams) {
      $scope.pics = [];
      //$scope.have = [];
	  $scope.tags = [];
	  $scope.look = $routeParams.param;
      $scope.orderBy = "-likes.count";
      $scope.getMore = function() {
        instagram.fetchPopular($scope.look,function(data) {
            for(var i=0; i<data.length; i++) {
              //if (typeof $scope.have[data[i].id]==="undefined") {
                $scope.pics.push(data[i]) ;
                //$scope.have[data[i].id] = "1";
              //}
            }
        });
      };
	  $scope.search = function() {
		tag.show($scope.item,function(data) {
		$scope.tags = [];
			for(var i=0; i<data.length; i++) {
				$scope.tags.push(data[i]) ;
            }
		});
	  };
	  $scope.getMore();
	  //$scope.search();
    });