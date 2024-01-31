import React from 'react'
import Card from 'react-bootstrap/Card';
const Card2 = () => {
  return (
    <div>
     <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxKHSrSnFG2usm313s9R13oKQ0VyL8ttfZtA&usqp=CAU/100px180px"/>
        <Card.Title>MasterCard</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Redeemable MasterCard card</Card.Subtitle>
        <Card.Text>
         This is a one time usable card.
        </Card.Text>
        <Card.Link href="#">https://developer.mastercard.com<br/></Card.Link>
        <Card.Link href="#"></Card.Link>
      </Card.Body>
     </Card>
    </div>
  )
}

export default Card2
