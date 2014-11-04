'use strict';

var questionsApp = angular.module('questions');
// Questions controller
questionsApp.controller('QuestionsController', ['$scope', '$stateParams', 'Authentication', 'Questions',
	function($scope, $stateParams, Authentication, Questions ) {

this.authentication = Authentication;
// Find a list of Questions

this.questions = Questions.query();

		}
]);

questionsApp.controller('QuestionsCreateController', ['$scope','Questions',
	function($scope,  Questions ) {

		}
]);

questionsApp.controller('QuestionsEditController', ['$scope', 'Questions',
	function($scope,  Questions ) {

		}
]);

		// // Create new Question
		// $scope.create = function() {
		// 	// Create new Question object
		// 	var question = new Questions ({
		// 		question: this.question
		// 	});

		// 	// Redirect after save
		// 	question.$save(function(response) {
		// 		$location.path('questions/' + response._id);

		// 		// Clear form fields
		// 		$scope.question = '';
		// 	}, function(errorResponse) {
		// 		$scope.error = errorResponse.data.message;
		// 	});
		// };

		// // Remove existing Question
		// $scope.remove = function( question ) {
		// 	if ( question ) { question.$remove();

		// 		for (var i in $scope.questions ) {
		// 			if ($scope.questions [i] === question ) {
		// 				$scope.questions.splice(i, 1);
		// 			}
		// 		}
		// 	} else {
		// 		$scope.question.$remove(function() {
		// 			$location.path('questions');
		// 		});
		// 	}
		// };

		// // Update existing Question
		// $scope.update = function() {
		// 	var question = $scope.question ;

		// 	question.$update(function() {
		// 		$location.path('questions/' + question._id);
		// 	}, function(errorResponse) {
		// 		$scope.error = errorResponse.data.message;
		// 	});
		// };

		

		// // Find existing Question
		// $scope.findOne = function() {
		// 	$scope.question = Questions.get({ 
		// 		questionId: $stateParams.questionId
		// 	});
		// };
	