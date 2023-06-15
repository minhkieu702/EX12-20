import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import {data} from "../components/share/ListOfPlayers"
import { Card, CardPanel, CardTitle, Col, Container, Icon, Row } from 'react-materialize';
import ModalCase from './ModalCase';
const Detail = () => {
    const userName = useParams();
    const [isOpen, setIsOpen] = useState(false);
  const player = data.find(obj => {
    return obj.id == userName.id;
  });
   let cost = player.cost.toLocaleString();

  return (
  <Container>
  <Row>
    <Col>
    <Card
      closeIcon={<Icon>close</Icon>}
      header={<CardTitle image={`../${player.img}`}>{player.name}</CardTitle>}
      // revealIcon={<Icon>more_vert</Icon>}
    >
      <a onClick={() => setIsOpen(true)} className='btn-floating halfway-fab waves-effect waves-light red'>
      <Icon>ondemand_video</Icon>
    </a>
        {player.club}<br/>
        Market value: €{cost}<br/>
        {player.info}<br/>
    </Card>
    {isOpen && 
      <ModalCase setIsOpen={setIsOpen} player={player}/>
    }
    </Col>
  </Row>
  </Container>
  )
}

export default Detail
