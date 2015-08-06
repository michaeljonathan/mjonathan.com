'use strict';

var mjApp = angular.module('mjApp', ['ui.router']);

// App Config
mjApp.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

	// Route: default
	$urlRouterProvider.otherwise('/');

	// Route: specifics
	$stateProvider

		// Home
		.state('home', {
			url: '/',
			templateUrl: 'templates/home.html'
		})

		// Projects
		.state('projects', {
			abstract: true,
			url: '/projects',
			template: '<div ui-view></div>'
		})
		.state('projects.list', {
			url: '',
			templateUrl: 'templates/projects.list.html'
		})
		.state('projects.detail', {
			url: '/{projectId:[A-Za-z0-9\-]{1,100}}',
			templateUrl: 'templates/projects.detail.html',
			resolve: {
				projectDetails: ['$stateParams', 'projects',
					function($stateParams, projects) {
						return projects.get($stateParams.projectId);
					}
				]
			},
			controller: ['$scope', '$sce', 'projectDetails', function($scope, $sce, projectDetails) {
				$scope.projectDetails = $sce.trustAsHtml(projectDetails);
			}]
		})

		// About
		.state('about', {
			url: '/about',
			templateUrl: 'templates/about.html'
		});
}]);

// Projects Factory
mjApp.factory('projects', ['$http', function($http) {

	var get = function(projectId) {
		return $http.get(_getProjectPath(projectId))
		.then(function(response) {
			return response.data;
		});
	};

	var _getProjectPath = function(projectId) {
		return '/data/projects/' + projectId + '.html';
	};

	return {
		get: get
	};
}]);
