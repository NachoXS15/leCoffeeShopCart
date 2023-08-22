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
                        <button id="cart" onClick={() => increaseItems(id)}>Cart</button>
                    ) : (
                        <div className="buttons">
                            <button className="control-buttons" onClick={() => increaseItems(id)}>+</button>
                            <span>{quantity}</span>
                            <button className="control-buttons" onClick={() => decreaseItems(id)}>-</button>
                            <button className="red-button" onClick={() => removeItems(id)}>Remover</button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
