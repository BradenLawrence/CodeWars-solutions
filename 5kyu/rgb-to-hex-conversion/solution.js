function rgb(r, g, b){
  const hexMap = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'],
        max = 255,
        min = 0
  let normalize = (num) => {
    if(num > max) { return max }
    if(num < min) { return min }
    return num
  }
  let dtoh = (dec) => {
    let hex = []
    while(dec>=16) {
      hex.push(hexMap[dec%16])
      dec = Math.floor(dec/16)
    }
    hex.push(hexMap[dec%16])
    if(hex.length<2){ hex.push('0') }
    return hex.reverse().join('')
  }
  return [
    dtoh(normalize(r)), 
    dtoh(normalize(g)), 
    dtoh(normalize(b))].join('') 
}