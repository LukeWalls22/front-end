import React from 'react'
import fantasy from '../books/fantasy.json';
import history from '../books/history.json';
import horror from '../books/horror.json';
import romance from '../books/romance.json';
import scifi from '../books/scifi.json';
import { Card, Col, Row, Spinner } from 'react-bootstrap';
import { Component } from 'react';

export default class AllTheBooks extends Component {

    state = {
        books: [],
        isLoading: true
    };

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                books: [...fantasy, ...history, ...horror, ...romance, ...scifi]
            })
            this.state.isLoading = false;
        },3000)
    };
    


    render () {
        return (
            <>
                <Row xs={12} m={4} className='g4'>

                {this.state.isLoading &&
                    <Col>
                    <Card style={{ width: '18rem' }} className='m-4'>
                        <Card.Body>
                        <Spinner animation="border" variant="info" className='text-center my-5'/>
                            <Card.Title>Caricamento</Card.Title>
                            <Card.Text>
                            <i className='mioi'>Genere: </i> Caricamento
                            </Card.Text>
                        </Card.Body>
                        </Card>
                    </Col>
                }

                {this.state.books.map((b,index) => 
                    <Col key={index}>
                        <Card style={{ width: '18rem' }} className='m-4'>
                            <Card.Img variant="top" src={b.img} />
                            <Card.Body>
                                <Card.Title>{b.title}</Card.Title>
                                <Card.Text>
                                <i className='mioi'>Genere: </i> {b.category}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                )}
                </Row>
            </>
        )
    }
}


