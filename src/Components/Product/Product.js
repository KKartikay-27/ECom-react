import React from 'react';
import ProductCard from "../ProductCard/ProductCard";
import NavBar from '../NavBar/NavBar';
import Typing from '../Typing/Typing';
import Tile from "../Tile/Tile";
import img from '../Tile/jim-carrey-jim-carrey-typing.gif';
import Banner from "../Banner/Banner";
import ProgressBar from "../ProgressBar/ProgressBar";

function Products() {
    const products = [
        { id: 1, title: "Apple iPhone 14", price: "Rs. 1,00,000" },
        { id: 2, title: "Apple iPhone 13", price: "Rs. 70,000" },
        { id: 3, title: "Google Pixel 7", price: "Rs. 50,000" },
        { id: 4, title: "Nokia 1100", price: "Rs. 2,000" },
        { id: 5, title: "Samsung Galaxy S10", price: "Rs. 1,00,000" },
        { id: 6, title: "Sony Xperia S10", price: "Rs. 1,00,000" }
    ];

    return (
        <>
            <NavBar />
            <Typing text={[
                "Hello, welcome to the typing effect demo!",
                "Enjoy exploring the cool effect!",
                "This is an example of typing and deleting text."
            ]} typingSpeed={50} deletingSpeed={25} duration={20} />
            <Tile header={"This is a class"} img={img} link={"https://www.scaler.com/"} linkText={"scaler"} />
            <Banner />
            <ProgressBar percentage={30} />
            <div>
                {products.map((product, index) => (
                    <ProductCard key={index} product={product} />
                ))}
            </div>
        </>
    );
}

export default Products;
