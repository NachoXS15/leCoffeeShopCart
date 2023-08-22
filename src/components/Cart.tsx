import React from 'react'
import useCartContext from '../context/CartContext'
import ProductProps from '../interfaces/Product';
import { Offcanvas } from 'react-bootstrap';

type ShoppingCarProps= {
  isOpen: boolean
}
export default function Cart({isOpen}: ShoppingCarProps) {
    const {cartItems, cartQuantity, cartOpen, cartClose} = useCartContext();

  return (
    <Offcanvas show={isOpen} onHide={cartClose} placement='end'>
        <Offcanvas.Header closeButton>
            <Offcanvas.Title>Carrito</Offcanvas.Title>
        </Offcanvas.Header>
        {cartQuantity === 0 ? <h5 style={{textAlign: 'center'}}>No hay elementos agregados!</h5>: 
          cartItems.map(item => {
              return(
                  <div>
                      <h2>Triple Cheese</h2>
                      <span>$1000</span>
                      <span>{cartQuantity}</span>
                  </div>
              )
          })
        }
    </Offcanvas>

  )
}
