// DESCRIPTION:
// When provided with a letter, return its position in the alphabet.

// Input :: "a"

// Ouput :: "Position of alphabet: 1"

//My solution

function position(letter){
    return `Position of alphabet: ${Array.from('abcdefghijklmnopqrstuvwxyz').findIndex(element => element===letter)+1}`
}