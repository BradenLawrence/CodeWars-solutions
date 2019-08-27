function solution(number){
  if(number<3) { return 0 }
  let multiples = []
  for(let i=0; i<number; i++) {
    if(i%3 == 0) {
      multiples.push(i)
    } else if(i%5 == 0) {
      multiples.push(i)
    }
  }
  let sum = (acc, cur) => acc+cur
  return multiples.reduce(sum)
}