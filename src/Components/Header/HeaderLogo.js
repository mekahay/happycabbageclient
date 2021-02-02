import React from 'react';
import logo from './Full_Logo_Script.png';


function Header() {
    return( 
        <a href='/'>
            <img src={logo} alt="Logo" className="Header" />
        </a>
    )
}

export default Header;