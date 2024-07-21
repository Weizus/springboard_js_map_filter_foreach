// forEach returns undefined, filter and map actually return new arrays/objects


/*
Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled

Examples:
		doubleValues([1,2,3]) // [2,4,6]
		doubleValues([5,1,2,3,10]) // [10,2,4,6,20]

*/


function doubleValues(arr){
	let newArr = new Array();
	arr.forEach((x) => {
		newArr.push(x * 2);
	});
	return newArr
}

/*
Write a function called onlyEvenValues which accepts an array and returns a new array with only the even values in the array passed to the function

Examples:
		onlyEvenValues([1,2,3]) // [2]
		onlyEvenValues([5,1,2,3,10]) // [2,10]

*/
function onlyEvenValues(arr){
	let newArr = new Array();
	arr.forEach((x) => {
		if(x % 2 === 0) newArr.push(x);
	})
	return newArr;
}

/*
Write a function called showFirstAndLast which accepts an array of strings and returns a new array with only the first and last character of each string.

Examples:
		showFirstAndLast(['colt','matt', 'tim', 'test']) // ["ct", "mt", "tm", "tt"]
		showFirstAndLast(['hi', 'goodbye', 'smile']) // ['hi', 'ge', 'se']

*/
function showFirstAndLast(arr){
	let newArr = new Array();
	arr.forEach((x) => {
		let firstChar = x[0];
		let result = firstChar.concat(x[x.length-1]);
		newArr.push(result);
	});
	return newArr;
}

/*
Write a function called addKeyAndValue which accepts an array of objects, a key, and a value and returns the array passed to the function with the new key and value added for each object 

Examples:
		addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor') 

// [{name: 'Elie', title:'instructor'}, {name: 'Tim', title:'instructor'}, {name: 'Matt', title:'instructor'}, {name: 'Colt', title:'instructor'}]

*/
// Can probably just use Object.assign(target, source) here, less space efficient with memory though
function addKeyAndValue(arr,key,value){
	arr.forEach((x) => {
		x[key] = value;
	});

	return arr;
}

/*
Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count

Examples:
		vowelCount('Elie') // {e:2,i:1};
		vowelCount('Tim') // {i:1};
		vowelCount('Matt') // {a:1})
		vowelCount('hmmm') // {};
		vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
		*/
function vowelCount(str){
	let vowels = {a : 0, 
		e : 0, 
		i : 0, 
		o : 0, 
		u : 0};
	//need be case sensitive and no users will see this so...
	//had a couple of versions of this mostly returning a full set of vowels (even the ones that show up 0 times)
	//Got to mess around with regexp but lead to using sorting algorthims in my implimentation so just went with
	//something simple; was like O(n^3)
	let lowerstr = str.toLowerCase();
	lowerstr = Array.from(lowerstr);
	lowerstr.forEach((x) => {
		if (Object.hasOwn(vowels, x)) vowels[x]++;
	});
	let fobject = {};
	for (key in vowels) {
		if (vowels[key] > 0) fobject[key] = vowels[key];
	}
	return fobject;
}

/*
Write a function called doubleValuesWithMap which accepts an array and returns a new array with all the values in the array passed to the function doubled

Examples:
		doubleValuesWithMap([1,2,3]) // [2,4,6]
		doubleValuesWithMap([1,-2,-3]) // [2,-4,-6]
		*/

function doubleValuesWithMap(arr) {
	//ah functional programming my beloved
	return arr.map((x) => x * 2);
}

/*
Write a function called valTimesIndex which accepts an array and returns a new array with each value multiplied by the index it is currently at in the array.

Examples:
		valTimesIndex([1,2,3]) // [0,2,6]
		valTimesIndex([1,-2,-3]) // [0,-2,-6]
		*/

function valTimesIndex(arr){
	return arr.map((x, i) => x * i);
}

/*
Write a function called extractKey which accepts an array of objects and some key and returns a new array with the value of that key in each object.

Examples:
		extractKey([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'name') // ['Elie', 'Tim', 'Matt', 'Colt']
		*/

function extractKey(arr, key){
	return arr.map((x) => x[key]);
}

/*
Write a function called extractFullName which accepts an array of objects and returns a new array with the value of the key with a name of "first" and the value of a key with the name of  "last" in each object, concatenated together with a space. 

Examples:
		extractFullName([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia"}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele"}]) // ['Elie Schoppik', 'Tim Garcia', 'Matt Lane', 'Colt Steele']
		*/

function extractFullName(arr){ 
	// They'll need to buy me a map because functional programming is functioning. Lambda calculus wins again.
	return arr.map(({first , last}) => `${first} ${last}`);
}

/*
Write a function called filterByValue which accepts an array of objects and a key and returns a new array with all the objects that contain that key.

Examples:
		filterByValue([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}], 'isCatOwner') // [{first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Colt', last:"Steele", isCatOwner: true}]
		*/

function filterByValue(arr, key) {
	return arr.filter((x) => Object.hasOwn(x, key) === true);
}

/*
Write a function called find which accepts an array and a value and returns the first element in the array that has the same value as the second parameter or undefined if the value is not found in the array.

Examples:
		find([1,2,3,4,5], 3) // 3
		find([1,2,3,4,5], 10) // undefined
		*/

function find(arr, searchValue) {
	return arr.filter((x) => x == searchValue)[0] || undefined;
}

		/*
Write a function called findInObj which accepts an array of objects, a key, and some value to search for and returns the first found value in the array.

Examples:
		findInObj([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}], 'isCatOwner',true) // {first: 'Tim', last:"Garcia", isCatOwner: true}
		*/

function findInObj(arr, key, searchValue) {
	return arr.filter((x) => Object.hasOwn(x, key) === true && x[key] == searchValue)[0] || undefined;
}

/*
Write a function called removeVowels which accepts a string and returns a new string with all of the vowels (both uppercased and lowercased) removed. Every character in the new string should be lowercased.

Examples:
		removeVowels('Elie') // ('l')
		removeVowels('TIM') // ('tm')
		removeVowels('ZZZZZZ') // ('zzzzzz')
		*/

function removeVowels(str) { // not in Js is not ~, it's !
	return Array.from(str).filter((x) => !['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U'].includes(x)).join('').toLowerCase();
}

/*
Write a function called doubleOddNumbers which accepts an array and returns a new array with all of the odd numbers doubled (HINT - you can use map and filter to double and then filter the odd numbers).

Examples:
		doubleOddNumbers([1,2,3,4,5]) // [2,6,10]
		doubleOddNumbers([4,4,4,4,4]) // []
		*/

function doubleOddNumbers(arr) {
	return arr.filter((x) => !(x % 2 == 0)).map((x) => x * 2);
}
