	// create the module and name it myApp
	var myApp = angular.module('myApp', ['ngRoute']);

	// configure our routes
	myApp.config(function($routeProvider) {
		$routeProvider

			// route for the home page
			.when('/', {
				templateUrl : 'pages/home.html',
				controller  : 'mainController'
			})

			// route for the about page
			.when('/about', {
				templateUrl : 'pages/about.html',
				controller  : 'aboutController'
			})

			// route for the contact page
			.when('/contact', {
				templateUrl : 'pages/contact.html',
				controller  : 'contactController'
			})

			// route for the contact page
			.when('/aerial', {
				templateUrl : 'pages/aerial.html',
				controller  : 'aerialController'
			})

			// route for the Architecture Page
			.when('/architecture',{
				templateUrl :'pages/architecture.html',
				controller : 'architectureController'
			})

			.when('/streetUp',{
				templateUrl :'pages/streetUp.html',
				controller : 'streetUpController'
			});
			
	});

	// create the controller and inject Angular's $scope
	myApp.controller('mainController', function($scope) {
		// create a message to display in our view
		$scope.message = 'Welcome to Nick Aylward\'s Photography Website';
	});

	myApp.controller('aboutController', function($scope) {
		$scope.message = 'Look! I am an about page.';
	});

	myApp.controller('contactController', function($scope) {
		$scope.message = 'Contact us! JK. This is just a demo.';
	});

	myApp.controller('aerialController', function($scope) {
		$scope.message = 'Aerial Page';
	});

	myApp.controller('architectureController', function($scope){
		$scope.message = 'Architecture Page';
	})

	myApp.controller('streetUpController', function($scope){
		$scope.message = 'Street Up Page';
	})

