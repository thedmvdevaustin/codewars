// Description:
// Remove all exclamation marks from the end of sentence.

// Examples
// "Hi!"     ---> "Hi"
// "Hi!!!"   ---> "Hi"
// "!Hi"     ---> "!Hi"
// "!Hi!"    ---> "!Hi"
// "Hi! Hi!" ---> "Hi! Hi"
// "Hi"      ---> "Hi"

//My solution 
function remove (string) {  
    if (string.length===0) return ""
    if (!string.endsWith("!")) return string
    let index = 0 
    let i = string.length - 1
    while (i > 0 && string[i]==='!'){
      index++
      i--
    }
    return string.slice(0, string.length-index)
  }