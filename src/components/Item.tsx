import React from "react";
import ProductProps from "../interfaces/Product";
import { Card } from "react-bootstrap";
import { currencyFormat } from "../utilities/currencyFormat";

export default function Item({ id, name, price, imgUrl }: ProductProps) {
    const quantity = 0;
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
                        <button id="cart">Cart</button>
                    ) : (
                        <div className="buttons">
                            <button>+</button>
                            <div>
                                <span>{quantity}</span>
                            </div>
                            <button>-</button>
                            <button className="red-button">Remover</button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
