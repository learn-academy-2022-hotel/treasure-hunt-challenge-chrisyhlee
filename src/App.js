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

  const handleGamePlay = (clickedSquare) => {
    let updateBoard = [...board]
    updateBoard[clickedSquare] = "🌴"
    setBoard(updateBoard)
  }

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
  }
  

  return (
    <>
      <h1>Treasure Hunt Game</h1>
      <div className='resetButton'>
        <button onClick={reset}>Reset</button>
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
