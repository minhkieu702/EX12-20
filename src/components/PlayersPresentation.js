import React from "react";
import { useState } from "react";
import { data } from "./share/ListOfPlayers";
import { Link } from "react-router-dom";
export default function PlayersPresentation() {
    const [player, setPlayer] = useState([])
    return (
        <div className="container">
            {data.map((player) => (
                <div className="column">
                    <div className="card">
                        <img src={player.img}></img>
                        <h3>{player.name}</h3>
                        <p className="title">{player.club}</p>
                        {/* <p><button onClick={()=>{setPlayer(player)}}><a href="#popup1" id='openPopUp'>Detail</a></button></p> */}
                        <Link to={`detail/${player.id}`}>
                            <p><button>Detail</button></p>
                        </Link>

                    </div>
                </div>
            ))}
            {/* <div id='popup1' className='overlay'>
                <div className="popup">
                    <img src={player.img}></img>
                    <h2>{player.name}</h2>
                    <a className="close" href="#">&times;</a>
                    <div className="content">
                        {player.info}
                    </div>
                </div>
            </div> */}
        </div>
    )
}