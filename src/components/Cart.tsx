import React from 'react'
import useCartContext from '../context/CartContext'
import ProductProps from '../interfaces/Product';
import "../styles/styles.scss";
import { Offcanvas } from 'react-bootstrap';
import CartItem from './CartItem';

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
        <Offcanvas.Body>
          {cartQuantity === 0 ? <h5 style={{textAlign: 'center'}}>No hay elementos agregados!</h5>: 
            cartItems.map(item => {
                return(
                    <CartItem {...item} key={item.id}/>
                )
            })
          }
        </Offcanvas.Body>
    </Offcanvas>

  )
}
