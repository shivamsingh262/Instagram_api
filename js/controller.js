mainApp.controller("myController", function($scope,instagram,tag,$routeParams) {
      $scope.pics = [];
	  $scope.tags = [];
	  $scope.look = $routeParams.param;
      $scope.orderBy = "-likes.count";
      $scope.getMore = function() {
        instagram.fetchPopular($scope.look,function(data) {
            for(var i=0; i<data.length; i++) {
                $scope.pics.push(data[i]) ;
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
    });