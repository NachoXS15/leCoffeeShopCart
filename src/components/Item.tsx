import React from "react";
import ProductProps from "../interfaces/Product";
import { Card } from "react-bootstrap";

export default function Item({id, name, price, imgUrl}: ProductProps) {
    return (
        <div className="item">
            <Card.Img variant="left" src={imgUrl}></Card.Img>
            <div>
                <div>
                    <h4>{name}</h4>
                    <p>Carne x3, </p>
                </div>
                <div>
                    <div style={{float: 'left', marginRight: '1em'}}>Cantidad: 1</div>
                    <span>${price}</span>
                </div>
            </div>
            <button>+</button>
        </div>
    );
}
