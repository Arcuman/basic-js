const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {

	let num = parseFloat(sampleActivity);
	console.log("INPUT: " + sampleActivity + " NUM: " + num);
	if (sampleActivity == null || typeof (sampleActivity) != "string" || !num || num < 0)
		return false;

	let k = 0.693 / HALF_LIFE_PERIOD;
	t = Math.ceil(Math.log2(MODERN_ACTIVITY / sampleActivity) / k);
	if (t < 0)
		return false;
	return t;
};