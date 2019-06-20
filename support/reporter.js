const CucumberJSAllureFormatter = require("cucumberjs-allure2-reporter").CucumberJSAllureFormatter;
const AllureRuntime = require("cucumberjs-allure2-reporter").AllureRuntime;

function Reporter(options) {
	CucumberJSAllureFormatter.call(this,
		options,
		new AllureRuntime({ resultsDir: "./reports/allure-results" }),
		{});
}
Reporter.prototype = Object.create(CucumberJSAllureFormatter.prototype);
Reporter.prototype.constructor = Reporter;

exports.default = Reporter;
