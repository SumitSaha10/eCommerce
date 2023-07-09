import React, { useState } from 'react'

import CartContext from './cartContext'

const CartState = (props) => {
    const [cartItems, setCartItems] = useState([]);

    const totalAmount = cartItems.reduce((price, item) => price + item.quantity * item.price, 0)

    const handleAddProduct = (product) => {
        const productExt = cartItems.find((item) => item.id === product.id);
        if (productExt) {
            setCartItems(cartItems.map((item) => item.id === product.id ? { ...productExt, quantity: productExt.quantity + 1 } : item));
        }
        else {
            setCartItems([...cartItems, { ...product, quantity: 1 }]);
        }
    }

    const handleRemoveProduct = (product) => {
        const productExt = cartItems.find((item) => item.id === product.id);
        if (productExt.quantity === 1) {
            setCartItems(cartItems.filter((item) => item.id !== product.id));
        }
        else {
            setCartItems(
                cartItems.map((item) => item.id === product.id ? { ...productExt, quantity: productExt.quantity - 1 } : item)
            )
        }
    }


    return (
        <CartContext.Provider value={{ cartItems, handleAddProduct, handleRemoveProduct, totalAmount }}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartState;