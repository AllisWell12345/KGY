import React, { useContext } from 'react'
import './CartItem.css'
import { CartContext } from '../App'

function CartItem({ item }) { // item ==={id: xx, name:xx, price: xx, quantity: xx}

    const { dispatch } = useContext(CartContext);

    const handleItemRemove = () => {
        dispatch({ type: 'REMOVE_FROM_CART', payload: item.id })
    }
    
    const handleItemQuantityInCrease = () => {
        dispatch({ type: 'INCREASE_QUANTITY', payload: item.id })
    }
    
    const handleItemQuantityDeCrease = () => {
        dispatch({ type: 'DECREASE_QUANTITY', payload: item.id })
    }

    return (
        <div className="cart-item">
            <div className="cart-item-info">
                <h4>{item.name}</h4>
                <p className="cart-item-price">{item.price.toLocaleString()}원</p>
            </div>

            <div className="cart-item-controls">
                <button 
                    className="cart-item-quantity-button" 
                    onClick={handleItemQuantityDeCrease}
                >
                    -
                </button>
                <span className="cart-item-quantity">{item.quantity}</span>
                <button className="cart-item-quantity-button" onClick={handleItemQuantityInCrease}>
                    +
                </button>

                <button className="cart-item-remove-button" onClick={handleItemRemove}>
                    삭제
                </button>
            </div>
        </div>
    )
}

export default CartItem
