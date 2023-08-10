// DESCRIPTION:
// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

//My solution

function accum(s) {
	let count = 0
    let ans = ""
    for (let i = 0; i < s.length; i++){
        ans+=s[i].toUpperCase()
        ans+=s[i].toLowerCase().repeat(count)
        ans+="-"
        count+=1
    }
    return ans.slice(0,ans.length-1)
}