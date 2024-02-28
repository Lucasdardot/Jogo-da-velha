document.addEventListener('DOMContentLoaded', ()=>{
    squares.forEach( (square)=>{
        square.addEventListener('click', handleClick)
    })
   
})

function handleClick(event){
    let square = event.target
    let position = square.id
    //console.log(position)

    if(handleMove(position)){
        if(isWin()){
            alert(`O jogador ${playerTime} venceu!`)
        }
        else{
            alert("Empate")
        }
    }

    
    updateSquare(square, position)
}

function updateSquare(square, position){
    let symbol = board[position]
    if(symbol != ''){
        square.innerHTML = `<div class='${symbol}'></div>`
    }

}