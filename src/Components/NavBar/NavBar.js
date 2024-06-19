import './NavBar.css'
import React from 'react';

export default function NavBar(){
    return(
        <div className='nav'>
        <li className='item'><a>Home</a></li>
        <li className='item'><a>About</a></li>
        <li className='item'><a>Skills</a></li>
        <li className='item'><a>Education</a></li>
        <li className='item'><a>Experience</a></li>
        <li className='item'><a>Projects</a></li>
        <li className='item'><a>Resume</a></li>
        </div>
    );
}