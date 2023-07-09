import React, { useContext } from 'react'
import "./Cart.css"
// import p from "../Assets/1.jpg"
import cartContext from '../context/cartContext';
const Cart = (props) => {
  const context = useContext(cartContext)
  const { cartItems, handleAddProduct, handleRemoveProduct, totalAmount } = context

  return (
    <div className='cart-items'>
      <header className='cart-items-header'>Cart Items</header>
      <div className='cart-items-item'>
        {cartItems.length === 0 ?
          (<div className="cart-empty">No items are added</div>) : (cartItems.map((items) => {
            return <div key={items.id} className='cart-items-cell'>
              <p className="item-name">{items.name}</p>
              <img alt="this" src={items.img} />
              <button className='btn btn-add' onClick={() => handleAddProduct(items)}>+</button>
              <button className='btn btn-remove' onClick={() => handleRemoveProduct(items)}>-</button>
              <p className='item-quantity'>Quantity:{items.quantity}</p>
              <p className='item-price'>Price:{items.price}</p>
              <p className='item-total'>Total:{items.quantity * items.price}</p>
            </div>
          }))
        }
        <p className='item-total'>Grand Total:{totalAmount}</p>
      </div>
    </div>
  )
}

export default Cart
