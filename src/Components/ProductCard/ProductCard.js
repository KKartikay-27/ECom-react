import './ProductCard.css';
import React, { useRef, useState } from 'react';
import UseEffect from '../Effect/UseEffect';
import ReduxAddToCart from '../ReduxAddTocart/ReduxAddToCart';

function ProductCard({ product }) {
    const pRef = useRef(0);
    const iRef = useRef(0);
    const oRef = useRef(0);
    const [inputV, setInputV] = useState('');

    function printTitle() {
        console.log(product.title);
        console.log(pRef.current.innerText);
        if (pRef.current.style.display === "none") {
            pRef.current.style.display = "block";
        } else {
            pRef.current.style.display = "none";
        }
    }

    function displayOutput(e) {
        setInputV(e.target.value);
    }

    return (
        <div className="product-card">
            <p onClick={printTitle} className='title'>{product.title}</p>
            <p ref={pRef}>{product.price}</p>
            <input ref={iRef} onChange={displayOutput} type='text' />
            <p ref={oRef}>Over here the output would arrive - {inputV}</p>
            <ReduxAddToCart product={product} />
            <UseEffect />
        </div>
    );
}

export default ProductCard;
