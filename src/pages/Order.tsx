import React from 'react'
import products from "../data/products.json"
import Item from '../components/Item'
export default function Order() {
  return (
    <>
      <section>
        <h2 style={{fontWeight: '700'}}>PRODUCTOS DISPONIBLES</h2>
        <div className='item-row'>
        {
          products && products.map(product => {
            return(
              <Item {...product} key={product.id}/>
            )
          })
        }
        </div>
      </section>
    </>
  )
}
