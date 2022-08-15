import React, {useState} from "react";
import Board from "./Board";
import {calculateWinner} from "../helper"

const Game = () => {
  const [memory, setMemory] = useState([Array(9).fill(null)])
  const [stepNumber, setStepNumber] = useState(0)
  const [xIsNext, setXIsNext] = useState(true)
  const winner = calculateWinner(memory[stepNumber]);
  const xo = xIsNext ? 'X' : 'O';

  const handleClick = (idx) => {
    const memoryPoint = memory.slice(0, stepNumber + 1)
    const current = memoryPoint[stepNumber]
    const squares = [...current]
    
    if (winner || squares[idx]) return;
  }
  return (
    <>
    
    </>
  )
}

export default Game;