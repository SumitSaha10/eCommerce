import React, { useContext } from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format'
// import { useStateValue } from './StateProvider'
// import { getBasketTotal } from '../reducer'
import cartContext from '../context/cartContext'
import { useNavigate } from 'react-router-dom'
const Subtotal = () => {
    // const [{ basket }] = useStateValue();
    const context = useContext(cartContext)
    const { cartItems, totalAmount } = context
    const navigate = useNavigate();
    return (
        <div className='subtotal'>
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal:{cartItems.length} items :<strong>{value}</strong>
                        </p>

                    </>
                )}
                decimalScale={2}
                value={totalAmount}
                displayType='text'
                thousandSeparator={true}
                prefix='$'
            />
            <button onClick={() => navigate('/payment')}>Proceed to checkout</button>
        </div>
    )
}

export default Subtotal
