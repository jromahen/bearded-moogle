AUI().ready(
	'liferay-navigation-interaction', 'node-load',
	function(A) {
	    var navigation = A.one('#navigation');

	    if (navigation) {
		navigation.plug(Liferay.NavigationInteraction);
	    }

	    /* This reproduces functionality built into Bootstrap's jQuery plugin */
	    var navbarToggle = A.one("[data-toggle=collapse]");

	    if (navbarToggle) {
		navbarToggle.on("click", function (e) {
		    var targetSelector = this.getAttribute("data-target");
		    var targetNode = this.next(targetSelector);
		    
		    targetNode.toggleClass("in");
		}); 
	    }
	}
);
