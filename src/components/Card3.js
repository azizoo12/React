import React from 'react'
import Card from 'react-bootstrap/Card';
const Card3 = () => {
  return (
    <div>
     <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Img variant="top" src="https://www.qualitychemical.com/resize/shared/images/products/Rewards/AMEXGiftCard.jpg?bw=1000&w=1000&bh=1000&h=1000/100px180px" />
        <Card.Title>American Express</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Redeemable americanExpress card</Card.Subtitle>
        <Card.Text>
         This is a one time usable card.
        </Card.Text>
        <Card.Link href="#">https://www.americanexpress.com</Card.Link>
        <Card.Link href="#"></Card.Link>
      </Card.Body>
     </Card>
    </div>
  )
}

export default Card3
