import React from 'react'
import { Card } from 'react-bootstrap'

export default function Welcome() {
  return (
    <Card className='width-auto'>
      <Card.Body>
        <Card.Title className='fs-1 mb-3'>Benvenuto</Card.Title>
        <Card.Text className='fs-5'>
          In questa <i className='mioi'>"Single-Page App"</i> creata con <i className='mioi'>React</i> puoi accedere a una lista di libri che potresti leggere.
        </Card.Text>
      </Card.Body>
    </Card>
  )
}
