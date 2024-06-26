import './App.css';
import Products from './Components/Product/Product';
import React, { useState } from 'react';
import CartContext from './Components/Context/CartContext';
import Cart from './Components/Cart/Cart';

function App() {
  let [cart,setCart] = useState({});

  function increaseQuantity(product){
    const newCart = {...cart};
    if(!newCart[product.id]){
      newCart[product.id] = 
      {...product,
      quantity: 0}
    }
    newCart[product.id].quantity += 1;
    setCart(newCart);
  }

  function decreaseQuantity(product){
    const newCart = {...cart};
    if(!newCart[product.id])return;
    newCart[product.id].quantity -= 1;
    if(newCart[product.id].quantity <= 0){
      delete newCart[product.id];
    }
    setCart(newCart);
  }

  return (
    <CartContext.Provider value={{cart,increaseQuantity,decreaseQuantity}}>
      <div className="App">
        <Products cart={cart} increaseQuantity = {increaseQuantity} decreaseQuantity ={decreaseQuantity}/>
      </div>
      <Cart/>
    </CartContext.Provider>
  );
}

export default App;