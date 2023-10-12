// DESCRIPTION:
// Find the total sum of internal angles (in degrees) in an n-sided simple polygon. N will be greater than 2.

//My solution
function angle(n) {
    if (n===3) return 180
    return angle(n-1)+180
  }