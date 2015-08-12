// Directive: Header resizes on scroll
mjApp.directive('headerOnscrollResize', ['$window', function($window) {
	return {
		link: function(scope, element, attrs) {
			if ($window.innerWidth >= 720) {
				angular.element($window).bind('scroll', function() {
					element.toggleClass('header_contents--smaller', this.pageYOffset > 200);
					element.toggleClass('header_contents--home-bg', this.pageYOffset > 365);
				});
			}
		}
	};
}]);

// Directive: Make it my email
mjApp.directive('mjEmail', function() {
	return {
		replace: true,
		transclude: true,
		template: '<a ng-transclude></a>',
		link: function(scope, element, attrs) {
			var c = ['.', '@', ':', '1', '3', 'a', 'c', 'g', 'i', 'j', 'l', 'm', 'n', 'o', 't'],
				p = [11, 5, 8, 10, 14, 13, 2, 11, 9, 13, 12, 3, 3, 3, 4, 1, 7, 11, 5, 8, 10, 0, 6, 13, 11],
				i,
				address = '';

			for (i = 0; i < p.length; i++) {
				address += c[p[i]];
			}

			element.attr('href', address);
		}
	};
});
