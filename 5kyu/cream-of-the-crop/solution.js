// Completed sample tests, but could not run efficiently enough to submit

function topFrequent(nums, k) {
  let tracker = {}
  nums.forEach( (num) => {
    if(tracker[num] == undefined) { 
      tracker[num] = 1 
    } else { 
      tracker[num]++ 
    } 
  })
  let list = Object.keys(tracker).map(Number).sort( (a,b) => {
    return nums.indexOf(a) - nums.indexOf(b) 
  }).sort( (a,b) => {
    return tracker[b] - tracker[a]
  })
  if(k < list.length) { list.length = k }
  return list
 }