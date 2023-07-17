// 👉 	Each function below has some test cases in `exercise001.test.js`
// 		You can run these tests with `npm test`.
//  	All the test cases must pass for each function.

// Note: Be sure to read the corresponding .md file for each exercise, in the docs folder. 📘 👍

export function capitalize(word) {
	if (word === undefined) throw new Error('word is required');
	return word.charAt(0).toUpperCase() + word.slice(1);
}

export function generateInitials(firstName, lastName) {
	if (firstName === undefined) throw new Error('firstName is required');
	if (lastName === undefined) throw new Error('lastName is required');
	return firstName.charAt(0).toUpperCase() + '.' + lastName.charAt(0).toUpperCase();
}

export function addVAT(originalPrice, vatRate) {
	if (originalPrice === undefined)
		throw new Error('originalPrice is requied');
	if (vatRate === undefined) throw new Error('vatRate is required');
	return parseFloat((originalPrice * (1 + vatRate / 100)).toFixed(2));
}

export function getSalePrice(originalPrice, reduction) {
	if (originalPrice === undefined)
		throw new Error('originalPrice is required');
	if (reduction === undefined) throw new Error('reduction is required');
	return parseFloat((originalPrice - originalPrice * (reduction / 100)).toFixed(2))
}

export function getMiddleCharacter(str) {
	if (str === undefined) throw new Error('str is required');
	return str.length % 2 === 0 ? str.charAt(Math.floor(str.length / 2) - 1) + str.charAt(Math.floor(str.length / 2)) : str.charAt(Math.floor(str.length / 2))
}

export function reverseWord(word) {
	if (word === undefined) throw new Error('word is required');
	return word.split('').reverse().join('');
}

export function reverseAllWords(words) {
	if (words === undefined) throw new Error('words is required');
	return words.map((word) => {
		return word.split('').reverse().join('');
	})
}

export function countLinuxUsers(users) {
	if (users === undefined) throw new Error('users is required');
	// return users.reduce((count, user) => {
	// 	return user.type === 'Linux' ? count + 1 : count;
	// }, 0);

	return users.filter(user => user.type ==='Linux').length;
}

export function getMeanScore(scores) {
	if (scores === undefined) throw new Error('scores is required');
	return parseFloat(((scores.reduce(((a,b)=>a + b), 0))/scores.length).toFixed(2));
}

export function simpleFizzBuzz(n) {
	if (n === undefined) throw new Error('n is required');
	return n % 3 === 0 ? n % 5 ===0 ? 'fizzbuzz' : 'fizz' : n % 5 ===0  ? 'buzz' : n;
}
