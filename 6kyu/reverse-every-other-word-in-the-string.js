// DESCRIPTION:
// Reverse every other word in a given string, then return the string. Throw away any leading or trailing whitespace, while ensuring there is exactly one space between each word. Punctuation marks should be treated as if they are a part of the word in this kata.

//My solution
function reverse(str){
    function reverseWord(string){
        return string.split("").reverse().join("")
    }
    return str.trim().split(" ").map((x,i) => i%2===1 ? reverseWord(x) : x).join(" ")
}
