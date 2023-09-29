// DESCRIPTION:
// Your task, is to create N×N multiplication table, of size provided in parameter.

// For example, when given size is 3:

// 1 2 3
// 2 4 6
// 3 6 9
// For the given example, the return value should be:

// [[1,2,3],[2,4,6],[3,6,9]]

//My solution
multiplicationTable = function(size) {
    let ans = []
    for(let i = 1; i <= size; i++){
      let temp = []
      for(let j = 1; j <= size; j++){
        temp.push(j*i)
      }
      ans.push(temp)
    }
    return ans
  }
  