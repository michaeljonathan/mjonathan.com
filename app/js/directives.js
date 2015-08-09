// Directive: Header resizes on scroll
mjApp.directive('headerOnscrollResize', ['$window', function($window) {
	return {
		link: function(scope, element, attrs) {
			if ($window.innerWidth >= 720) {
				angular.element($window).bind('scroll', function() {
					element.toggleClass('header_contents--smaller', this.pageYOffset > 200);
				});
			}
		}
	};
}]);
