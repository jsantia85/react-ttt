import React from "react";
import Square from "./Square";

const Board = ({squares, onClick}) => {
  

  return (
    <>
      <dir className='board'>{squares.map((square, idx) => 
        <Square key={idx} value={square} onClick={() => onClick(idx)}/>
      )}</dir>
    </>

  )
}

export default Board;