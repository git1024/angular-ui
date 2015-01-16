var app = angular.module('bootstrapApp', ['ui.bootstrap', 'ngRoute']);

//Aqui configuramos las rutas y asociamos cada ruta con una vista y un controlador
app.config(function($routeProvider){
	$routeProvider
		.when('/accordion',{
			controller: 'AccordionDemoCtrl',
			templateUrl: '/bootstrap/app/views/accordion.html'
		})
		.when('/alert',{
			controller: 'AlertDemoCtrl',
			templateUrl: '/bootstrap/app/views/alertDemoCtrl.html'
		})
		.when('/button', {
			controller: 'ButtonsCtrl',
			templateUrl: '/bootstrap/app/views/buttonDemoCtrl.html'
		})
		.when('/carousel', {
			controller: 'CarouselDemoCtrl',
			templateUrl: '/bootstrap/app/views/carouselDemoCtrl.html'
		})
		.when('/collapse',  {
			controller: 'CollapseDemoCtrl',
			templateUrl: '/bootstrap/app/views/collapseDemoCtrl.html'
		})
		.otherwise({redirectTo: '/'});
});
