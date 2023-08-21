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
        {cartItems.map(item => {
            return(
                <div>
                    <h2>asd</h2>
                    <span>asd</span>
                    <span>{cartQuantity}</span>
                </div>
            )
        })}
    </Offcanvas>

  )
}
