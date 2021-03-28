import React from 'react'
import {Card,Container} from "react-bootstrap";

function Hero() {
    return (
        <div>
          
          <Container className="mt-2 ">
              <Card className="bg-warning">
    <Card.Body>
      <Card.Title>A leading provider of IT services</Card.Title>
      <Card.Text>
      With us, you can reduce your tech workload while maximising your productivity and growth.

      </Card.Text>
    </Card.Body>
  </Card>
  </Container>
        </div>
    )
}

export default Hero
