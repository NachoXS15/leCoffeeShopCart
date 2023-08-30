import React from "react";
import "../styles/styles.scss";
import Logo from "../assets/img/logo.png";
import { NavLink } from "react-router-dom";
import { Button, Nav } from "react-bootstrap";
import useCartContext from "../context/CartContext";

export default function Header() {
    const { cartQuantity, cartOpen } = useCartContext();

    const itemsCart = cartQuantity;
    return (
        <header>
            <div>
                <a href="/home">
                    <img src={Logo} alt="" width={90} />
                </a>
                <h4>CARGA Y GENERACION DE PEDIDOS</h4>
            </div>
            <nav className="nav">
                <Nav.Link to="/" as={NavLink}>
                    Home
                </Nav.Link>
                <Nav.Link to="/order" as={NavLink}>
                    Productos
                </Nav.Link>
                <Nav.Link>
                    Historial
                </Nav.Link>
                <Button onClick={cartOpen} style={{ position: "relative" }}>
                    Cart
                    {itemsCart !== 0 ? <div className="notify">{itemsCart}</div> : null}
                </Button>
            </nav>
        </header>
    );
}
