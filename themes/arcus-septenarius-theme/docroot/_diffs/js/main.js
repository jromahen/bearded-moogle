AUI().ready(
	'liferay-navigation-interaction', 'node-load',
	function(A) {
	    var navigation = A.one('#navigation');

	    if (navigation) {
		navigation.plug(Liferay.NavigationInteraction);
	    }

	    /* This reproduces functionality built into Bootstrap's jQuery plugin */
	    var navbarToggle = A.one("a[data-navid=_145_navSiteNavigation]");

	    if (navbarToggle) {
		navbarToggle.on("click", function (e) {
		    var targetNode = A.one("#navigation .nav-collapse");

		    targetNode.toggleClass("in");
		}); 
	    }
	}
);
