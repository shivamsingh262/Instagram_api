mainApp.factory('instagram', ['$http',
        function($http) {
            return {
                fetchPopular: function(tag,callback) {
					//var tag = "dogs";
					var id = "66cd8086b01f4b1b84c0d58fc94dcb27";
                    var endPoint = "https://api.instagram.com/v1/tags/" + tag + "/media/recent?client_id=" + id+"&callback=JSON_CALLBACK";
                    $http.jsonp(endPoint).success(function(response) {
                        callback(response.data);
                    });
                }
				
            }
        }
    ]);
	

mainApp.factory('tag',['$http',
		function($http) {
		return {
			show: function(query,callback) {
					//var query = "snowy";
					var id = "66cd8086b01f4b1b84c0d58fc94dcb27";
					var endPoint = "https://api.instagram.com/v1/tags/search?q="+query+"&client_id=" + id+"&callback=JSON_CALLBACK";
					$http.jsonp(endPoint).success(function(response) {
                        callback(response.data);
                    });
				}
			}
		}
]);