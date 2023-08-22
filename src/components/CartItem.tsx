import React from "react";
import "../styles/styles.scss";
import useCartContext from "../context/CartContext";
import products from "../data/products.json"
type ShoppingCarProps = {
    id: number,
    quantity: number
}

export default function CartItem({id}: ShoppingCarProps) {

    const {cartItems, cartQuantity, removeItems} = useCartContext();
    const item = products.find(item => item.id === id)

    return (
        <div style={{marginBottom: '3em'}} >
            <h2>{item?.name}</h2>
            <div style={{display: 'flex', gap: '2em'}}>
                <span>Precio: {item?.price}</span>
                <span>Cantidad: {cartQuantity}</span>
            </div>
            <button style={{ float: "right", marginRight: "1em" }} onClick={() => removeItems(id)}>Remover</button>
        </div>
    );
}
