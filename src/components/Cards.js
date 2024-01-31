import React from 'react'
import Card from 'react-bootstrap/Card';
const Card1 = () => {
  return (
    <div>
     <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Img variant="top" src="https://static.vecteezy.com/system/resources/previews/020/975/572/original/visa-logo-visa-icon-transparent-free-png.png"/>
        <Card.Title>Visa card</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Redeemable Visa card</Card.Subtitle>
        <Card.Text>
         This is a one time usable card.
        </Card.Text>
        <Card.Link href="#">https://www.giftcardgranny.com/ <br/></Card.Link>
        <Card.Link href="#"></Card.Link>
      </Card.Body>
     </Card> 
    </div>
  )
}

export default Card1
