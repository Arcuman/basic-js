const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
	if (!date) return 'Unable to determine the time of year!';
	if (Object.prototype.toString.call(date) != '[object Date]') throw new Error('THROWN');
	let month = date.getMonth();
	if ([11, 0, 1].includes(month)) {
		return 'winter';
	} else if ([2, 3, 4].includes(month)) {
		return 'spring';
	} else if ([5, 6, 7].includes(month)) {
		return 'summer';
	} else if ([8, 9, 10].includes(month)) {
		return 'autumn';
	}
};