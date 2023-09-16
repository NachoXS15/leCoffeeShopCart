import React from "react";
import ProductProps from "../interfaces/Product";
import { Card } from "react-bootstrap";
import { currencyFormat } from "../utilities/currencyFormat";
import useCartContext from "../context/CartContext";

export default function Item({ id, name, price, imgUrl }: ProductProps) {
    
    const {getItems, increaseItems, decreaseItems, removeItems} = useCartContext();
    const quantity = getItems(id);

    return (
        <div className="item">
            <Card.Img variant="left" src={imgUrl}></Card.Img>
            <div id="info"> 
                <div>
                    <h4>{name}</h4>
                    <p>Carne x3, </p>
                </div>
                <div>
                    <span>{currencyFormat(price)}</span>
                </div>
                <div>
                    {quantity === 0 ? (
                        <button /*id="cart"*/ className="btn btn-outline-dark" style={{float: 'right', marginRight: '1em'}}  onClick={() => increaseItems(id)}>Añadir a carrito</button>
                    ) : (
                        <div className="buttons">
                            <button className="btn btn-outline-dark" style={{padding: '0.2em', margin: '0.2em'}} onClick={() => decreaseItems(id)}>-</button>
                            <span>{quantity}</span>
                            <button className="btn btn-outline-dark" style={{padding: '0.2em', margin: '0.2em'}} onClick={() => increaseItems(id)}>+</button>
                            <button className="btn btn-outline-dark" style={{float: 'right', marginRight: '1em'}} onClick={() => removeItems(id)}>Remover</button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
