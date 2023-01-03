import React from "react"

const Square = ({square, index, handleGamePlay}) => {

  const clickAction = () => {
    handleGamePlay(index)
  }

  return (
    <>
      <div className="square" onClick={clickAction}>{square}</div>
    </>
  )
}
export default Square
