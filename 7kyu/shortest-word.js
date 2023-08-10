// DESCRIPTION:
// Simple, given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types.

//My solution

function findShort(s){
    let ans = s.length
    s.split(" ").forEach((x) => x.length<ans ? ans = x.length : ans = ans)
    return ans
  }