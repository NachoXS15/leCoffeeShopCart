import React from 'react'
import useCartContext from '../context/CartContext'
import ProductProps from '../interfaces/Product';
import "../styles/styles.scss";
import { Offcanvas } from 'react-bootstrap';
import CartItem from './CartItem';
import products from "../data/products.json"
import { currencyFormat } from '../utilities/currencyFormat';
type ShoppingCarProps= {
  isOpen: boolean
}



export default function Cart({isOpen}: ShoppingCarProps, {id}: ProductProps) {
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
          <h5>Total: {currencyFormat(
            cartItems.reduce((total, cartItem) => {
              const item = products.find((item) => item.id === cartItem.id)
              return total + (item?.price || 0 ) * cartItem.quantity  
            }, 0)
          )}</h5>
        </Offcanvas.Body>
    </Offcanvas>

  )
}
