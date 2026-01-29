function drawTree(height, ornament, frequency) {
  let tree=""
  let init=1
  for(let i=0;i<height;i++){
    tree+=' '.repeat(height-1-i)
    for(let j=0;j<i*2+1;j++){
    if(init==frequency){
      tree+=ornament
      init=1
    }else{
      tree+='*'
      init++
    }
    }
    tree+='\n'
  }
  tree+=' '.repeat(height-1)+'#'
  return tree
}
