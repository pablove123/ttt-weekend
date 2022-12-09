/*-------------------------------- Constants ---------------*/
squareEls = document.querySelectorAll(".sqr")
messageEl = document.querySelector("#message")
winningCombos =[[0,1,2],[3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]]

console.log(winningCombos)
/*---------------------------- Variables (state) ---------*/

let board = [null, null,null,null,null,null,null,null,null ]
console.log(board)
console.log(squareEls)

let turn = 1

let winner = false
let tie = false

/*------------------------ Cached Element References ----------*/



/*----------------------------- Event Listeners ---------------*/
  // squareEls.forEach(function (square, a) {
  //   square.addEventListener('click', handleClick)
  //   const sqIdx = square[a]
    
  // })

  div.document.querySelector(".board").addEventListener("click", handleClick)
/*-------------------------------- Functions ---------------*/
init()

function init(){
  render()
}

function render(){
updateMessage()
  updateBoard()
}


function updateBoard(){
  board.forEach( function (ele, i){
    if(ele === 1){
      squareEls[i].textContent = "X"
    }  else if( ele === -1) {
      squareEls[i].textContent = "O"
    } else {
      squareEls[i].textContent = ""
    }
  }
  )
}

function updateMessage(){
  if (winner === false && tie === false){
    return `It is ${turn} turn`
  } else if (winner === false && tie === true){
    return "It is a tie!"
  } else {
    return `${turn} has won!`
  }
}

function handleClick(e){
  console.log(sqIdx)
}