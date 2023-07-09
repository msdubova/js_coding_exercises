export const findNextNumber = (nums, n) => {
	if (nums === undefined) throw new Error('nums is required');
	if (n === undefined) throw new Error('n is required');
	return nums.indexOf(n) > 0 ? nums.indexOf(n) !== (nums.length - 1) ? nums[nums.indexOf(n) + 1] : null : null;
};

export const count1sand0s = (str) => {
	if (str === undefined) throw new Error('str is required');
	const obj = { 1: 0, 0: 0 };
	str.split('').forEach(item => item === '1' ? obj[1]++ : obj[0]++);
	return obj;
};

export const reverseNumber = (n) => {
	if (n === undefined) throw new Error('n is required');
	return parseInt(String(Array.from(String(n)).map(item => parseInt(String(item))).reverse().join('')));
};

export const sumArrays = (arrs) => {
	if (arrs === undefined) throw new Error('arrs is required');
	return (arrs.map(item => item.reduce(((a, b) => a + b), 0))).reduce(((c, d) => c + d), 0);
};

export const arrShift = (arr) => {
	if (arr === undefined) throw new Error('arr is required');
	if (arr.length < 2) { return arr } else {
		const swap = arr[0];
		const swapLast = arr[arr.length - 1];
		const shiftedArr = arr.slice(1, arr.length - 1);
		shiftedArr.push(swap);
		shiftedArr.unshift(swapLast);
		return shiftedArr;
	}

};

export const findNeedle = (haystack, searchTerm) => {
	if (haystack === undefined) throw new Error('haystack is required');
	if (searchTerm === undefined) throw new Error('searchTerm is required');

	const arr = Object.values(haystack);

	function isString(str) {
		return typeof str === 'string' ? str.toLowerCase() : str;
	}

	const specificData = isString(searchTerm);
	const keys = arr.map(item => isString(item));

	return keys.some(item => typeof item === 'string' && item.includes(specificData));
};

export const getWordFrequencies = (str) => {
	if (str === undefined) throw new Error('str is required');
	const obj = {};
	str.split(/\W+/).filter(item => item !== '').map(item => item.toLowerCase()).forEach(item => {
		obj[item] === undefined ? obj[item] = 1 : obj[item]++
	})
	return obj;
};
