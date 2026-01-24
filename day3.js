function drawGift(size, symbol) {
  let wrap='' 
  if (size<2){
    return wrap
  }
    wrap=symbol.repeat(size)+'\n'
    wrap+=(symbol+' '.repeat(size-2)+symbol+'\n').repeat(size-2)
    wrap+=symbol.repeat(size)
  
  return wrap
}
