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
		.when('/datepicker', {
			controller: 'DatepickerDemoCtrl',
			templateUrl: '/bootstrap/app/views/datepickerDemoCtrl.html'
		})
		.when('/dropdown', {
			controller: 'DropdownCtrl',
			templateUrl: '/bootstrap/app/views/dropdownCtrl.html'
		})
		.when('/modal', {
			controller: 'ModalDemoCtrl',
			templateUrl: '/bootstrap/app/views/modalDemoCtrl.html'
		})
		.when('/pagination', {
			controller: 'PaginationDemoCtrl',
			templateUrl: '/bootstrap/app/views/paginationDemoCtrl.html'
		})
		.when('/popover', {
			controller: 'PopoverDemoCtrl',
			templateUrl: '/bootstrap/app/views/popoverDemoCtrl.html'
		})
		.when('/progressbar', {
			controller: 'ProgressDemoCtrl',
			templateUrl: '/bootstrap/app/views/progressDemoCtrl.html'
		})
		.when('/rating', {
			controller: 'RatingDemoCtrl',
			templateUrl: '/bootstrap/app/views/ratingDemoCtrl.html'
		})
		.when('/tabs', {
			controller: 'TabsDemoCtrl',
			templateUrl: '/bootstrap/app/views/tabsDemoCtrl.html'
		})
		.when('/timePicker', {
			controller: 'TimepickerDemoCtrl',
			templateUrl: '/bootstrap/app/views/timepickerDemoCtrl.html'
		})
		.when('/tooltip', {
			controller: 'TooltipDemoCtrl',
			templateUrl: '/bootstrap/app/views/tooltipDemoCtrl.html'
		})
		.when('/typeahead', {
			controller: 'TypeaheadCtrl',
			templateUrl: '/bootstrap/app/views/typeaheadCtrl.html'
		})
		.otherwise({redirectTo: '/'});
});
