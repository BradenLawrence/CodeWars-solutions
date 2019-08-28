function findOdd(A) {
  let tracker = {}
  A.forEach((num) => {
    if(tracker[num] == undefined) {
      tracker[num] = 1
    } else {
      tracker[num]++
    }
  })
  let result
  for(let key in tracker) {
    if(tracker[key] % 2 != 0) {
      result = Number(key)
    }
  }
  return result;
}