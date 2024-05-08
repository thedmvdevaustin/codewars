// DESCRIPTION:
// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.

// Good luck!

//My solution
function capitalize(s){
    // Just wanted to see if I can do a one liner; I know it is ugly!!!
    return [s.split("").map((val, index) => index%2===0 ? val.toUpperCase(): val).join(""), s.split("").map((val, index) => index%2===1 ? val.toUpperCase(): val).join("")]  
  };