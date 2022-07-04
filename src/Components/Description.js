import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from "react-router-dom";

function Description({movie}) {
  return (
    <div>
          {['Light'].map((variant) => (
    <Card
      bg={variant.toLowerCase()}
      key={variant}
      text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
      style={{ width: '18rem' }}
      className="mb-2"
    >
      <Card.Header>Description</Card.Header>
      <Card.Body>
        <Card.Title>Movie Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
  ))}
  <Link to='/'>Home</Link>
    </div>
  )
}

export default Description