import React from 'react'
import { Link } from 'react-router-dom'
export default function PlayersPresentation({data}) {
   
    return (
     <div className='container'>
      <div className='box'>
            <h1 className="ribbon-2"> Top players</h1>
        {players.map((player)=>(
        <div className='column' key={player.id}>
        <div className='card'>
        <img src={player.img}/>
          <h3>{player.name}</h3>
          <p className='title'>{player.club}</p>
          <Link to={`detail/${player.id}`}><p><button>Detail</button></p></Link>
        </div>
      </div>
     ))}</div> </div>  
  )
}
