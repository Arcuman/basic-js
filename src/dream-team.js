const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
	if (!Array.isArray(members)) return false;
	let result = [];
	members.forEach(
		function (element) {
			if (typeof (element) === 'string')
				result.push((element.trim())[0].toUpperCase());
		}
	);
	return result.sort().join('');
};