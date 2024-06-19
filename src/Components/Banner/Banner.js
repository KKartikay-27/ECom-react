import React from 'react';
import {Carousel}  from 'nuka-carousel';
import im1 from './pexels-01.jpg';
import im2 from './pexels-02.jpg';
import im3 from './pexels-03.jpg';


export default function Banner() {
    
    return (
        <div className="banner">
            <Carousel autoplay={false} autoplayInterval={1000} wrapMode='wrap' showArrows ={true} showDots={true}>
                <img className='images' src= {im1} alt='im1'/>
                <img className='images' src= {im2} alt='im2'/>
                <img className='images' src= {im3} alt='im3'/>
            </Carousel>
        </div>
    );
}
