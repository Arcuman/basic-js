const CustomError = require("../extensions/custom-error");

const chainMaker = {
	result: [],
	getLength() {
		return this.result.length;
	},
	addLink(value) {
		this.result.push(value);
		return this;
	},
	removeLink(position) {
		if (typeof (position) !== 'number') {
			this.result = [];
			throw new Error();
		}
		position--;
		if (position < 0 || position >= this.getLength()) {
			this.result = [];
			throw new Error();
		}
		this.result.splice(position, 1);
		return this;
	},
	reverseChain() {
		this.result.reverse();
		return this;
	},
	finishChain() {
		let res = '';

		for (let i = 0; i < this.getLength(); ++i) {
			res = res + `( ${this.result[i]} )`;

			if (i < this.getLength() - 1) {
				res = res + '~~';
			}
		}
		this.result = [];
		return res;
	}
}

module.exports = chainMaker;