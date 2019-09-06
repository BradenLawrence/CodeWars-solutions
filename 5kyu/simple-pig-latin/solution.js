function pigIt(str){
  let   strArray = str.split(' ')
  const punctuation = ['.',',','?','!'],
        notPunctuation = (str) => {
          return punctuation.indexOf(str.join('')) === -1
        }
  
  strArray.forEach( (word, i) => {
    let pigWord = word.split('')
    if(notPunctuation(pigWord)) {
      pigWord.push(pigWord.shift(), 'ay')
    }
    strArray[i] = pigWord.join('')
  })
  return strArray.join(' ')
}