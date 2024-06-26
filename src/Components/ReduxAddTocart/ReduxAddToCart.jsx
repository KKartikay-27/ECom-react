import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

function ReduxAddToCart({ product }) {
    const dispatch = useDispatch();

    const increase = () => {
        dispatch({ type: 'ADD_TO_CART', payload: product });
    };

    const decrease = () => {
        dispatch({ type: 'REMOVE_FROM_CART', payload: product });
    };

    const quantity = useSelector((state) => state.items[product.id]?.quantity || 0);

    return (
        <div>
            {quantity === 0 ? (
                <button onClick={increase}>Add to Cart</button>
            ) : (
                <div>
                    <button onClick={decrease}>-</button>
                    <span>{quantity}</span>
                    <button onClick={increase}>+</button>
                </div>
            )}
        </div>
    );
}

export default ReduxAddToCart;
