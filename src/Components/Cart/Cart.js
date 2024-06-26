import React from 'react';
import { useSelector } from 'react-redux';
import './Cart.css'

function Cart() {
    const items = useSelector((state) => state.items);

    return (
        <div className="cart-container"> {/* Centering container */}
            <div className="cart">
                <h1>Your Cart</h1>
                {Object.keys(items).length === 0 ? (
                    <p>Your cart is empty.</p>
                ) : (
                    Object.keys(items).map((productId) => (
                        <div key={productId}>
                            <h2>Name : {items[productId].title}</h2>
                            <div>
                                <h3>Quantity : {items[productId].quantity}</h3>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

export default Cart;
