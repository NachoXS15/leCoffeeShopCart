import React from 'react'
import "../styles/styles.scss"
import Logo from "../assets/img/logo.png"
export default function Header() {
  return (
    <header>
        <a href="#"><img src={Logo} alt="" width={90} /></a>
        <h3>CARGA Y GENERACION DE PEDIDOS</h3>
    </header>
  )
}
