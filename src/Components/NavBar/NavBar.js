import './NavBar.css'
import React from 'react';

export default function NavBar(){
    return(
        <div className='nav'>
        <li className='item'><a href='.'>Home</a></li>
        <li className='item'><a href='.'>About</a></li>
        <li className='item'><a href='.'>Skills</a></li>
        <li className='item'><a href='.'>Education</a></li>
        <li className='item'><a href='.'>Experience</a></li>
        <li className='item'><a href='.'>Projects</a></li>
        <li className='item'><a href='.'>Resume</a></li>
        </div>
    );
}