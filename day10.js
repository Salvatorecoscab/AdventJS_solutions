function maxDepth(s) {
  // Code here
  let pila=[]
  let wish=0
    for (const char of s) {
        if (char=='['){
            pila.push(char)
        }
        if(char==']'){
            if (pila.length==0)return -1
            pila.pop()
        }
        if (pila.length>wish){
            wish=pila.length
        }
    }
    if (pila.length>0)return -1
    return wish
}