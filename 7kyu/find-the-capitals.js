// DESCRIPTION:
// Instructions
// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

// Example (Input --> Output)
// "CodEWaRs" --> [0,3,4,6]

// My solution

var capitals = function (word) {
	let array = []
    word.split("").map((x,i) => x===x.toUpperCase() ? array.push(i) : x)
    return array
};