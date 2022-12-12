/*-------------------------------- Constants ---------------*/
squareEls = document.querySelectorAll(".sqr")
messageEl = document.querySelector("#message")
winningCombos =[[0,1,2],[3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]]

console.log(winningCombos)
/*---------------------------- Variables (state) ---------*/

let turn = -1
let board = [null, null,null,null,null,null,null,null,null ]

let winner = false
let tie = false
let scoreBoard = {
  xWins: 0,
  oWins: 0,
  ties: 0
}

/*------------------------ Cached Element References ----------*/

const xwins = document.getElementById("xwins")
const owins = document.getElementById("owins")
const ties = document.getElementById("ties")

/*----------------------------- Event Listeners ---------------*/
// squareEls.forEach(function (square, a) {
  //   square.addEventListener('click', handleClick)
  //   const sqIdx = square[a]
  
  // })
  document.querySelector("#reset").addEventListener("click", init)

  document.querySelector(".board").addEventListener("click", handleClick)
/*-------------------------------- Functions ---------------*/
init()

function init(){
    board = [null, null, null, null, null, null, null, null, null]
    turn = -1
    winner = false
    tie = false
    document.querySelector("h2").style.fontSize = "35px"
    document.querySelector("h2").style.color = "black"
    render()
}

function render(){
updateMessage()
  updateBoard()
  console.log("board",scoreBoard)
}

function updateBoard(){
  board.forEach( function (ele, i){
    if(ele === 1){
      squareEls[i].textContent = "💖"
    }  else if( ele === -1) {
      squareEls[i].textContent = "❤️"
    } else if (ele === null){
      squareEls[i].textContent = " "
    }
  }
  )
}

function updateMessage(){
  
  if (winner === false && tie === false){
    if(turn === 1){
      return document.querySelector("#message").innerHTML= "It is 💖's turn"} else {
        return document.querySelector("#message").innerHTML= "It is ❤️'s turn"
      }
  } else if (winner === false && tie === true){
    console.log("its a tie")
    return document.querySelector("#message").innerHTML= "It is a tie! Try Again?",scoreBoard.ties++
  } else if (winner === true){
    if(turn === 1){
      return document.querySelector("#message").innerHTML= "❤️ has won!", document.querySelector("h2").style.fontSize = "60px", document.querySelector("h2").style.color = "red", confetti.start(2000),scoreBoard.xWins++} else {

      }return document.querySelector("#message").innerHTML= "💖 has won!",document.querySelector("h2").style.fontSize = "60px", document.querySelector("h2").style.color = "red",confetti.start(2000),scoreBoard.oWins++}
      
  }



// we have the id of the target thats clicked
//
function handleClick(e){
  // const square = e.target.id
  // let sqIdx = document.getElementById(square)
  const test = e.target.id
  let sqIdx = test.split("").slice(2)
  if (sqIdx === "X" || sqIdx === "O"){
    return
  } else if (winner === true){
    return
  } else {
    placePiece(sqIdx)
  }
  render()
  switchPlayerTurn()
  checkForWinner(sqIdx)
  updateMessage()

  updateScore()
}

function placePiece(index){
  board[index] = turn
  checkForTie()
}

function checkForTie(){
  if (board.includes(null) == true) {
    return
}else {
  tie = true
}
}

function checkForWinner(){
    for (let i = 0; i < winningCombos.length; i++) {
      let sum = board[winningCombos[i][0]] + board[winningCombos[i][1]] + board[winningCombos[i][2]]
      let absSum = Math.abs(sum)
      if (absSum === 3) winner = true
    }
  }



function switchPlayerTurn(){
  if(winner === true){
    return
  }else {
    turn = (turn * -1)
    console.log ("swicthed turn", turn)
  }
}
function updateScore(){
  xwins.textContent= `❤️: ${scoreBoard.xWins}`
  owins.textContent= `💖: ${scoreBoard.oWins}`
  ties.textContent = `Ties: ${scoreBoard.ties}`
}