export function getSquares(nums) {
	if (nums === undefined) throw new Error('nums is required');
	return nums.map((a)=> Math.pow(a,2))
}

export function camelCaseWords(words) {
	if (words === undefined) throw new Error('words is required');
	
	return words.map((word, index) => {
	return index == 0 ? word : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
	}).join('');
}

export function getTotalSubjects(people) {
	if (people === undefined) throw new Error('people is required');
	return people.reduce((count, a)=>{ return (count + a.subjects.length) },0)
}

export function checkIngredients(menu, ingredient) {
	if (menu === undefined) throw new Error('menu is required');
	if (!ingredient) throw new Error('ingredient is required');
	return menu.some((dish) => dish.ingredients.includes(ingredient));
}

export function duplicateNumbers(arr1, arr2) {
	if (arr1 === undefined) throw new Error('arr1 is required');
	if (arr2 === undefined) throw new Error('arr2 is required');
	const arr = [];
	arr1.forEach(item => (arr2.includes(item) && !arr.includes(item)) ? arr.push(item) : null);
	return arr.sort((a, b)=>a - b);
}
 