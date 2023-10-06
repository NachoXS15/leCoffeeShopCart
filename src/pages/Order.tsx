import React from 'react'
import products from "../data/products.json"
import Item from '../components/Item'
export default function Order() {
  return (
    <>
      <section>
        <div className='products-container'>
          <h2 style={{fontWeight: '700', textDecoration: 'underline'}}>PRODUCTOS DISPONIBLES</h2>
          <div className='category-products'>
            <h3 style={{color: 'orange', fontWeight: '700', marginBottom: '1em'}}>Hamburguesas</h3>
            <div className='item-row'>
              {
                products &&
                products
                  .filter((product) => product.category === "Burger")
                  .map((product) => (
                    <Item {...product} key={product.id} />
                  ))
              }
            </div>
          </div>
          <div className='category-products'>
            <h3 style={{color: 'orange', fontWeight: '700', marginBottom: '1em'}}>Bebidas</h3>
            <div className='item-row'>
              {
                products &&
                products
                  .filter((product) => product.category === "Drink")
                  .map((product) => (
                    <Item {...product} key={product.id} />
                  ))
              }
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
