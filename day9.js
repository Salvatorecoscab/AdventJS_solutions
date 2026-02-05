function moveReno(board, moves) {
const height=(board.match(/\n/g) || []).length-1
const wide=Math.round(board.length/height)
let robot_pos=board.indexOf('@')
let newboard=board.split('')
let last=''
    for (const move of moves) {
        console.log(newboard.join(''))
        newboard[robot_pos]='.'
        if(move=='U'){ 
            if(newboard[robot_pos-wide]=='.'){
                newboard[robot_pos-wide]='@'
            }else{
                last=newboard[robot_pos-wide]
                break;
            }
        }
        if(move=='D'){
            if(newboard[robot_pos+wide]=='.'){
                newboard[robot_pos+wide]='@'
            }else{
                last=newboard[robot_pos+wide]
                break;
            }
        }
        if(move=='L'){
            if(newboard[robot_pos-1]=='.'){
                newboard[robot_pos-1]='@'
            }else{
                last=newboard[robot_pos-1]
                break;
            }
        }
        if(move=='R'){
            if(newboard[robot_pos+1]=='.'){
                newboard[robot_pos+1]='@'
            }else{
                last=newboard[robot_pos+1]
                break;
            }
        }
        robot_pos=newboard.indexOf('@')
    }
    if(last=='\n'||last=='#'||last==undefined){
        return 'crash'
    }
    if(last=='*'){
        return 'success'}
  return 'fail';
}