
// dia 4. Solo obtuve 4 estrellas. Creo que es porque no use metodos de js 
function decodeSantaPin(code) {
    let decoded=""
    let vector=code.match(/[^\[\]]+/g)
    if (vector.length<4)return null
    vector.forEach(elem => {
      let ops=elem.length-1
      if(elem[0]!='<'){
        let num=parseInt(elem[0])
        if (elem[1]){ 
          if(elem[1]=='+'){
            num+=ops
            num=num%10
          }else{
            num-=ops
            num = (num % 10 + 10) % 10
          }
        }
        decoded+=num
      }else{
        decoded+=decoded[decoded.length-1]
      }
      
  });
  return decoded
}
