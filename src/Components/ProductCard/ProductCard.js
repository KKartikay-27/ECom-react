import './ProductCard.css';
import {useRef, useState} from 'react';
import UseEffect from '../Effect/UseEffect';
import React from 'react';
import AddToCart from '../AddToCart/AddToCart';


function ProductCard({product,cart,increaseQuantity,decreaseQuantity,title,price}){

    let pRef = useRef(0);
    let iRef = useRef(0);
    let oRef = useRef(0);
    let [inputV, setInputV] = useState('');

    function printTitle(){
        console.log(title);
        console.log(pRef.current.innerText);
        if(pRef.current.style.display === "none"){
            pRef.current.style.display = "block";
        }else{
            pRef.current.style.display = "none";
        }
    }
    console.log("Rerendered",inputV)
    function displayOutput(e){
        // console.log(iRef.current.value);
        // console.log(oRef.current.innerText);
        // oRef.current.innerText = `Over here the output would arrive - ${iRef.current.value}`;
        setInputV(e.target.value)
    }
    

    return (
        <div className="product-card">
            <p onClick={printTitle} className='title'>{title}</p>
            <p ref={pRef}>{price}</p>
            <input ref={iRef} onChange={displayOutput} type='text' />
            <p ref={oRef}>Over here the output would arrive - {inputV}</p>
            <AddToCart product={product} cart = {cart} increaseQuantity={increaseQuantity} decreaseQuantity = {decreaseQuantity}/>
            <UseEffect />
        </div>
    )
}

export default ProductCard;