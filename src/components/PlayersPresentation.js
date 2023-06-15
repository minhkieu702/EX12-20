import React from "react";
import { useState } from "react";
import { data } from "./share/ListOfPlayers";
import { Link } from "react-router-dom";
import { Icon, CardTitle, Row, Col, Card, Container, CardPanel } from 'react-materialize'
export default function PlayersPresentation() {
    // const [player, setPlayer] = useState([])
    return (
        <Container>
            <Row>
                {data.map((player) =>
                    <Col
                    l={4}
                        m={6}
                        s={12}
                    >
                        <Card
                            actions={[
                                <Link to={`detail/${player.id}`}>
                                    <><>Detail</></>
                                </Link>]}
                            header={<CardTitle image={player.img}></CardTitle>}
                        >
                            {player.name}
                        </Card>
                    </Col>
                )}
            </Row>
        </Container>
    )
}