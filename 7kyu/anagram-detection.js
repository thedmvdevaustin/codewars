// DESCRIPTION:
// An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

// Note: anagrams are case insensitive

// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

// Examples
// "foefet" is an anagram of "toffee"

// "Buckethead" is an anagram of "DeathCubeK"


// write the function isAnagram
var isAnagram = function(test, original) {
    if (test.length!==original.length) return false
    let obj = {}
    for (let i = 0; i < test.length; i++){
      if (obj[test[i].toLowerCase()]){
        obj[test[i].toLowerCase()]++
      } else {
        obj[test[i].toLowerCase()] = 1
      }
    }
    for(let i = 0; i < original.length; i++){
      if (obj[original[i].toLowerCase()]){
        obj[original[i].toLowerCase()]--
      }
      if (obj[original[i].toLowerCase()]===0){
        delete obj[original[i].toLowerCase()]
      }
    }
    return Object.keys(obj).length===0
  };
  