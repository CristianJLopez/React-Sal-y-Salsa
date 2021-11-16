import React, { Component } from 'react';
import {Card, CardGroup} from 'react-bootstrap';
import cumple from "../images/celebracioncumple.jpg";
import aniversario from "../images/aniversario.jpg";
import infantil from "../images/infantil.png";

class GrupoServicios extends Component {
    render() {
        return (
            <div>
                 <CardGroup>
                <Card>
                    <Card.Img variant="top" src={cumple} />
                    <Card.Body>
                    <Card.Title>Cumpleaños</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                    </Card.Text>
                    <a href="#reservar" className="btn btn-block btn-warning" data-id="1">Reservar</a>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted">Sujeto a disponibilidad</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src={aniversario} />
                    <Card.Body>
                    <Card.Title>Aniversario</Card.Title>
                    <Card.Text>
                        This card has supporting text below as a natural lead-in to additional
                        content.{' '}
                    </Card.Text>
                    <a href="#reservar" className="btn btn-block btn-warning" data-id="1">Reservar</a>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted">Sujeto a disponibilidad</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src={infantil} />
                    <Card.Body>
                    <Card.Title>Fiestas Infantiles</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This card has even longer content than the first to
                        show that equal height action.
                    </Card.Text>
                    <a href="#reservar" className="btn btn-block btn-warning" data-id="1">Reservar</a>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted">Sujeto a disponibilidad</small>
                    </Card.Footer>
                </Card>
                </CardGroup>
            </div>
        );
    }
}

export default GrupoServicios;