import React from "react"

const Square = ({square, index, handleGamePlay}) => {

  const alertClick = () => {
    handleGamePlay(index)
  }

  return (
    <>
      <div className="square" onClick={alertClick}>{square}</div>
    </>
  )
}
export default Square
