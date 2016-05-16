'use strict';

// Create the 'articles' controller
angular.module('articles').controller('ArticlesController', ['$scope', '$routeParams', 
	'$location', 'Authentication', 'Articles', 
	function($scope, $routeParams, $location, Authentication, Articles){
		// Expose the Authentication service
		$scope.authentication = Authentication;

		// Create new article
		$scope.create = function(){
			// User the form fields to create a new article 
			var article = new Articles({
				title: this.title,
				content: this.content
			});

			// Use the '$save' method to send a POST request
			article.$save(function(response){
				// If an article was created successfully, with a success (200) status code
				// redirect the user to the article's page
				$location.path('articles/' + response._id);
			}, function(errorResponse){
				// Otherwise, present the user with the error message
				$scope.error = errorResponse.data.message;
			});
		};

		// Retrieve a list of articles
		$scope.find = function() {
			// Use the 'query' method to send a GET request
			$scope.articles = Articles.query();
		};

		// Retrieve a single article
		$scope.findOne = function(){
			// Use the 'get' method to send a GET request
			$scope.article = Articles.get({
				articleId: $routeParams.articleId
			});
		};

		// Update a single article
		$scope.update = function(){
			// Use the '$update' method to send a PUT request 
			$scope.article.$update(function(){
				// If an article was updated successfully, 
				// redirect the user to the article's page
				$location.path('article/' + $scope.article._id);
			}, function(errorResponse){
				// Otherwise, present the user with the error message
				$scope.error = errorResponse.data.message;
			});
		};

		// Delete a single article
		$scope.delete = function(article) {
			// Deleting an article from a list view
			// If an article was sent to the method, delete it
			if (article) {
				// Use the '$remove' method to delete the article
				article.$remove(function(){
					// Remove the article from the articles list
					for (var i in $scope.articles) {
						if ($scope.articles[i] === article) {
							$scope.articles.splice(i, 1);
						}
					}
				});
			} else {
				// Deleting directly from the article view
				console.log('Article deleted...');
				$scope.article.$remove(function(){
					$location.path('articles');
				});
			}
		};

	}]);