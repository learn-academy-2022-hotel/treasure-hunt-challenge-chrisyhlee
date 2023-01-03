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
    alert(clickedSquare)
  }


  return (
    <>
      <h1>Treasure Hunt Game</h1>
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
