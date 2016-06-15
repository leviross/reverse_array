/*

Please write a JavaScript function that takes an array of strings as an argument and returns a reversed version of the same array.
Not using the Array.prototype.reverse function
Make sure you are returning the same array, but with the contents reversed.

Please submit in a jsfiddle or jsbin
*/


"use strict"

var test1 = ["Antelope","Bear","Camel","Duck","Elephant"];
const test2 = ["Gum","Chocolate Bars","Soda","Nutella"];



// The objective is to return the same input array with a max time complexity 
// of O(n) which is linear time. Actually, we can do better. We can loop only through half of the array as we 
// are swapping the the positions of the current element with its counter part on the other side of the array.
// There is no need to iterate through the whole array.

function reverseArrayInPlace(array) {

	// We loop through half of the array, make sure to floor the length to account for odd numbered arrays.
	
	for (var i = 0; i < Math.floor(array.length / 2); i++) {
		// Simply swap the current element with it's mirrored element on the other side of the array
		var current = array[i];
		// As opposed to linked lists, arrays in JavaScript are really Hashtable objects behind the scenes (according to some), so accessing an element
		// is a constant time operation.
		array[i] = array[array.length-1-i];
		array[array.length-1-i] = current;
	}

	// Then we returned the altered input array and bam, problem solved:)
	return array;	

};


// Side note - I had to run Node with a --harmony flag because otherwise it threw a SyntaxError because 
// I have v0.12.
console.log(reverseArrayInPlace(test2));


	
