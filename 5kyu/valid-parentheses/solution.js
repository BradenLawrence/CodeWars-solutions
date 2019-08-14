function validParentheses(parens){
  let parenArray = parens.split(''),
      buffer = 0
  for(let i=0; i<parenArray.length; i++){
    if(parenArray[i] == '('){ buffer++ }
    else { buffer-- }
    if(buffer < 0){ return false }
  }
  return buffer == 0
}