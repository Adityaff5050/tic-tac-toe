import { useNavigate } from "react-router-dom";
import './GamePage.scss'
import React, { useState } from 'react'

const winPatterns = [
  [0,1,2], [3,4,5], [6,7,8],   
  [0,3,6], [1,4,7], [2,5,8],   
  [0,4,8], [2,4,6]             
]

const GamePage = () => {
    const navigate = useNavigate();
    const [board, setBoard] = useState(["","","","","","","","",""])
    const [turn, setTurn] = useState("X")
    const [win, setWin] = useState(null)

    const handleClick = (index) => {
        if (board[index] !== "") {
            return
        }
        if (win !== null) {
            return
        }

        const newBoard = [...board]
        newBoard[index] = turn
        setBoard(newBoard)

        for (let i = 0; i < winPatterns.length; i++) {
            const [a, b, c] = winPatterns[i]
            if (newBoard[a] !== "" && newBoard[a] === newBoard[b] && newBoard[a] === newBoard[c]) {
                setWin(newBoard[a])
                return
            }
        }

        if (newBoard.every((cell) => cell !== "")) {
            setWin("Draw")
            return
        }

        setTurn(turn === "X" ? "O" : "X")
    }

    const handleReset = () => {
        setBoard(["","","","","","","","",""])
        setTurn("X")
        setWin(null)
    }

  return (
    <div className='game'>
        <button id='backbtn' onClick={()=>{
        navigate('/')
    }}>
        Back</button>

        <button id='resetbtn' onClick={handleReset}>
        Reset</button>

        {win && (
            <>
                <h2 className="winner-message">
                    {win === "Draw" ? "Match Draw " : `${win}, You Win!`}
                     <p className="reset-hint">click on reset button</p>
                </h2>
               
            </>
        )}

        <div className="board">
        {board.map((value, index) => (
    <button key={index} className={`cell ${value === "X" ? "x-mark" : value === "O" ? "o-mark" : ""}`} onClick={() => handleClick(index)}>{value}</button>
))}
        </div>
        </div>
  )
}

export default GamePage