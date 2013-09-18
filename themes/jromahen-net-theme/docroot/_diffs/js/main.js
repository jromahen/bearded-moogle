AUI().ready(
	'liferay-hudcrumbs', 'liferay-navigation-interaction', 'node-load',
	function(A) {
	    /* This reproduces functionality built into Bootstrap's jQuery plugin */
	    var navbarToggle = A.one("[data-toggle=collapse]");

	    navbarToggle.on("click", function (e) {
		var targetSelector = this.get("data-target");
		var targetNode = this.next(targetSelector);

		targetNode.toggleClass("in");
		});
	}
);

Liferay.Portlet.ready(

	/*
	This function gets loaded after each and every portlet on the page.

	portletId: the current portlet's id
	node: the Alloy Node object of the current portlet
	*/

	function(portletId, node) {
	}
);

Liferay.on(
	'allPortletsReady',

	/*
	This function gets loaded when everything, including the portlets, is on
	the page.
	*/

	function() {
	}
);
