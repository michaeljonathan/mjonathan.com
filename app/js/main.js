'use strict';

var mjApp = angular.module('mjApp', ['ui.router']);

mjApp.config(function($stateProvider, $urlRouterProvider) {

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
			templateUrl: 'templates/projects.detail.html'
		})

		// About
		.state('about', {
			url: '/about',
			templateUrl: 'templates/about.html'
		});
});
