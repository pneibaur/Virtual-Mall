import React from 'react'
import { Link } from "react-router-dom"
import { Button, Row, Col } from "react-bootstrap"


function Landing(props) {

  return (
    <div className='landing'>
      <Row>
        <Col className='text-center'>
          <h1>WELCOMES YOU</h1>
          <br /><br />
          <h3>To the best place for your shopping needs</h3>
        </Col>
      </Row>
      <Row>
        <Col className='text-center'>
          <Button className='submit' variant="light">
            <Link className='link' to="/home"><h5>ENTER MALL</h5></Link>
          </Button>{' '}
          <Button className='submit' variant='light'>
            <Link className='link' to="/cart"><h5>YOUR CART</h5></Link>
          </Button>
        </Col>
      </Row>
    </div>
  )
}

export default Landing