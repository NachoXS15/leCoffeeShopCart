import React from 'react'
import products from "../data/products.json"

export default function Order() {
  return (
    <>
      <h2>Productos Disponibles</h2>
      {
        products.map(product => (
          <div className='item-row'>
            {JSON.stringify(product)}
          </div>
        ))
      }
    </>
  )
}
