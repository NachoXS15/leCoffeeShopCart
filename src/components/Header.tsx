import React from 'react'
import "../styles/styles.scss"
import Logo from "../assets/img/logo.png"
import { NavLink } from 'react-router-dom'
import { Button, Nav } from 'react-bootstrap'
export default function Header() {
  return (
    <header>
      <div>
        <a href="#"><img src={Logo} alt="" width={90} /></a>
        <h4>CARGA Y GENERACION DE PEDIDOS</h4>
      </div>
      <nav className='nav'>
        <Nav.Link to="/" as={NavLink}>
          Home
        </Nav.Link>
        <Nav.Link to="/order" as={NavLink}>
          Order
        </Nav.Link>
        <Button style={{position: 'relative'}}>
          Cart
          <div className='notify'>3</div>
        </Button>
      </nav>
    </header>
  )
}
