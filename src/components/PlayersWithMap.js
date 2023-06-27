import React from 'react'
import { data } from '../Share/ListOfPlayers'
import { Link } from 'react-router-dom'
import { Icon, CardTitle, Row, Col, Card, Container, Section } from 'react-materialize'
export default function PlayersWithMap() {
  return (
    <Section>
     <Container>
      <Row>
      {data.map((player)=>(
      <Col key={player.id}
    m={4}
    s={12}
  >
    <Card 
      closeIcon={<Icon>close</Icon>}
      header={<CardTitle image={player.img} reveal waves="light" />}
      reveal={<p>{player.info}</p>}
      revealIcon={<Icon>more_vert</Icon>}
      title={player.name}
    >
       <Link to={`detail/${player.id}`}> Detail</Link> 
       
    </Card>
  </Col>))}
</Row>
</Container>      
</Section>           
  )
}

