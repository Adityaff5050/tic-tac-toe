import React from 'react'
import GamePage from './GamePage'
import './HomePage.scss'
import { useNavigate } from "react-router-dom";


const  HomePage = () => {
    const navigate=useNavigate();
  return (
    <div className='btnbox'> 
       <button id='btn'  onClick={() => navigate("/gamepage")}>Play Game</button>
    </div>
  )
}

export default  HomePage