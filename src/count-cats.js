const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
	let count = 0;
	if (matrix == null)
		return count;
	let arr = matrix.flat(Infinity);
	for (let item of arr) {
		if (item == '^^')
			count++;
	}
	return count;
};