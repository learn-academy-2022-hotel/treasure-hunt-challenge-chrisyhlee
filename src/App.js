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
  }

  const handleGamePlay = (clickedSquare) => {
    let updateBoard = [...board]
    treasureLocation === 0 ? setBombLocation(treasureLocation + 1) : setBombLocation(treasureLocation - 1)
    if (clickedSquare === treasureLocation) {
      updateBoard[clickedSquare] = "🎁"
      setBoard(updateBoard)
    } else if (clickedSquare === bombLocation) {
      updateBoard[clickedSquare] = "💣"
      setBoard(updateBoard)
    } else {
      updateBoard[clickedSquare] = "🌴"
      setBoard(updateBoard)
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
    </>
  )
}

export default App
