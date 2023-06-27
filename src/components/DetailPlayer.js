import React from 'react'
import { Row, Col, Container, Card, CardPanel, Icon } from 'react-materialize';
import { useParams } from 'react-router-dom'
import { data } from '../Share/ListOfPlayers';
import { useState } from 'react';
import ModalCase from './ModalCase';
export default function DetailPlayer() {
  const [isOpen, setIsOpen] = useState(false);  
  const  userName  = useParams();
    const player = data.find(obj => {
    return obj.id == userName.id;
  });
    let cost=player.cost.toLocaleString();
   return(
    <>
    <Container>
          <Row>
          <Col 
          m={12}
          s={12}>
            <Card>
              <div className="card-image">
                <img src={`../${player.img}`} alt={player.img}/>
                <span className="card-title">{player.name}</span>
                <a onClick={() => setIsOpen(true)} className="btn-floating halfway-fab waves-effect waves-light red">
                  <Icon  large>ondemand_video</Icon>
                </a>
              </div>
              <CardPanel className="teal">
              <p className="card-title white-text">{player.club}</p>
              <p className="card-title white-text">Market value: €{cost}</p>
              <p className="white-text card-action">{player.info}</p>
              </CardPanel>
            </Card>
          </Col>
        </Row>
        {isOpen && <ModalCase setIsOpen={setIsOpen} player={player} />}
    </Container>
    </>
   ) 
}

