import React from "react";
import "../styles/styles.scss";
import useCartContext from "../context/CartContext";
import products from "../data/products.json"
type ShoppingCarProps = {
    id: number,
    quantity: number
}

export default function CartItem({id, quantity}: ShoppingCarProps) {

    const {removeItems} = useCartContext();
    const item = products.find(item => item.id === id)

    return (
        <div style={{marginBottom: '3em'}} >
            <h2>{item?.name}</h2>
            <div style={{display: 'flex', gap: '2em'}}>
                <span>Precio: ${item?.price}.00</span>
                <span>Cantidad: {quantity}</span>
            </div>
            <button style={{ float: "right", marginRight: "1em" }} onClick={() => removeItems(id)}>Remover</button>
        </div>
    );
}
