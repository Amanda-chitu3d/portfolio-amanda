import React from 'react'
import{Form,Button,Container,Col} from "react-bootstrap"

function FeedForm() {

  return (
    <Container className="mt-2 mb-3">
      <h2>Contact Form</h2>
    <Form>
     <Form.Row>
       <Form.Group as={Col}>
       <Form.Label>First Name</Form.Label>
       <Form.Control placeholder="Tom" />
         </Form.Group>
         <Form.Group as={Col}>
       <Form.Label>Last Name</Form.Label>
       <Form.Control placeholder="Brown" />
         </Form.Group>
         </Form.Row> 
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>
<Form.Group controlId="subject">
    <Form.Label>Subject</Form.Label>
    <Form.Control placeholder="I got wrong items of online order." />
  </Form.Group>

  <Form.Group controlId="messages">
    <Form.Label>Send Us Messages</Form.Label>
    <Form.Control as="textarea" rows={3} placeholder="Hi, my order id is #5600022222, I got wrong items." />
  </Form.Group>
  
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Agree to terms and conditions" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit Form
  </Button>
</Form></Container>
    )
  }
  
  export default FeedForm

