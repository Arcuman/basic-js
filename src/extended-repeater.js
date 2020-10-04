const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
	this.repeatTimes = options.repeatTimes !== undefined ? options.repeatTimes : 1;
	this.separator = options.separator !== undefined ? String(options.separator) : '+';
	this.addition = options.addition !== undefined ? String(options.addition) : '';
	this.additionRepeatTimes = options.additionRepeatTimes !== undefined ? options.additionRepeatTimes : 1;
	this.additionSeparator = options.additionSeparator !== undefined ? String(options.additionSeparator) : '+';
	let result = '';
	for (let i = 0; i < this.repeatTimes; i++) {
		result += String(str);
		for (let j = 0; j < this.additionRepeatTimes; j++) {
			result += this.addition;
			if ((this.additionRepeatTimes - 1) > j) {
				result += this.additionSeparator;
			}
		}
		if ((this.repeatTimes - 1) > i) {
			result += this.separator;
		}
	}
	return result;
};