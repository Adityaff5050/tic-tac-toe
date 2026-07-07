import React from 'react'
import { useNavigate } from "react-router-dom";
import './GamePage.scss'
const GamePage = () => {
    const navigate=useNavigate();
  return (
    <div className='game'>
        <button id='backbtn'  onClick={()=>{
        navigate('/')
    }}>
        Back</button></div>
  )
}

export default GamePage