/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"BarGraph/Bar_Graph/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});