let board = ['','','','','','','','',''];
let playerTime = Math.floor(Math.random() * 2)
let symbols = ['o','x'];
let gameOver = false;
let squares = document.querySelectorAll(".quadrado")
let winstates = [
[0,1,2],    
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[0,4,8],
[2,4,6]

]

console.log (symbols[playerTime])

function handleMove(position){
   
    if (gameOver){
        return
    }

    if(board[position] == ''){
        board[position] = symbols[playerTime]

        gameOver = isWin() || isBoardFull()
        playerTime = playerTime == 0 ? 1 : 0;


    }

    return gameOver
    
}



function isBoardFull(){
    for(let i = 0; i < board.length; i++){
        if(board[i] === ''){
            return false
        }
    } 
    return true
}

function isWin(){
    for(let i = 0; i < winstates.length; i++){
        let sequence = winstates[i]
        console.log("sequence :" + sequence )

        let pos1 = sequence[0]
        let pos2 = sequence[1]
        let pos3 = sequence[2]
        console.log("pos1 " + pos1 )
        console.log("pos2 " + pos2 )
        console.log("pos3 "  + pos3 )

        if( board[pos1] === board[pos2] &&
            board[pos1] === board[pos3] &&
            board[pos1] != " " ){
                console.log(board[pos1])
                console.log(board[pos2])
                console.log(board[pos3])
                return true

                
            }

            
            
            
            
           

    } 
    return false
}

