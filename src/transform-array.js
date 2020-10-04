const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
	let resArr = [];
	if (Array.isArray(arr)) {
		for (let i = 0; i < arr.length; i++) {
			if (arr[i] === '--discard-next') {
				i++;
			} else if (arr[i] === '--discard-prev') {
				resArr.pop();
			} else if (arr[i] === '--double-next') {
				resArr.push(arr[i + 1]);
			} else if (arr[i] === '--double-prev') {
				resArr.push(resArr[i - 1]);
			} else {
				resArr.push(arr[i]);
			}
		};
	} else {
		throw new Error();
	}
	return resArr.filter(e => e !== undefined);
};


module.exports = function transform(arr) {
	let result = [];
	if (Object.prototype.toString.call(arr) != '[object Array]') throw new Error;
	if (!arr.length) {
		return arr;
	}
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] == '--double-next') {
			if (arr.length - 1 > i) {
				result.push(arr[i + 1]);
			}
		} else if (arr[i] == '--double-prev') {
			if (i > 0) {
				if (arr[i - 2] != '--discard-next')
					result.push(arr[i - 1]);
				else {
					continue;
				}
			}
		} else if (arr[i] == '--discard-prev') {
			if (i > 0) {
				if (arr[i - 2] != '--discard-next') {
					result.pop();
				} else {
					continue;
				}
			}
		} else if (arr[i] == '--discard-next') {
			if (arr.length - 1 > i) {
				i++
			}
		} else {
			result.push(arr[i]);
		}
	}
	return result;
};