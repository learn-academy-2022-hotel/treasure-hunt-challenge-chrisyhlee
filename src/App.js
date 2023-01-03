import React, { useState } from "react"
import "./App.css"
import Square from './components/Square'

const App = () => {
  const [board, setBoard] = useState([
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?"
  ])

  const [treasureLocation, setTreasureLocation] = useState(Math.floor(Math.random() * board.length))
  const [bombLocation, setBombLocation] = useState()
  
  console.log(treasureLocation);
  
  const [tryLog, setTryLog] = useState([5])

  const reset = () => {
    setBoard([
      "?",
      "?",
      "?",
      "?",
      "?",
      "?",
      "?",
      "?",
      "?"
    ])
    setTreasureLocation(Math.floor(Math.random() * board.length))
    setTryLog([5])
    setPreviousNumber(5)
  }
  
  const [previousNumber, setPreviousNumber] = useState(5)

  const handleGamePlay = (clickedSquare) => {
    let updateBoard = [...board]
    treasureLocation === 0 ? setBombLocation(treasureLocation + 1) : setBombLocation(treasureLocation - 1)
    if (clickedSquare === treasureLocation) {
      updateBoard[clickedSquare] = "🎁"
      setBoard(updateBoard)
      alert("You win!")
    } else if (clickedSquare === bombLocation) {
      updateBoard[clickedSquare] = "💣"
      setBoard(updateBoard)
      alert("Sorry, you Lose!")
    } else if (previousNumber === 0) {
      alert('Sorry, you have run out of tries. Please try again.')
    } else if (clickedSquare !== treasureLocation && clickedSquare !== bombLocation) {
      updateBoard[clickedSquare] = "🌴"
      setBoard(updateBoard)
      let currentNumber = previousNumber - 1
      setPreviousNumber(currentNumber)
      setTryLog([...tryLog,   , currentNumber])
    }
  }
  


  return (
    <>
      <h1>Treasure Hunt Game</h1>
      <div className='resetButton'>
        <button onClick={reset}>Play Again</button>
      </div>
      <div className="gameBoard">
        {board.map((square, i) => {
          return (
            <Square 
              square={square} 
              index={i} 
              handleGamePlay={handleGamePlay}/>
          )
        })}
      </div>
      <div className="tryLog">
        Tries Remaining: {tryLog}
      </div>
    </>
  )
}

export default App
