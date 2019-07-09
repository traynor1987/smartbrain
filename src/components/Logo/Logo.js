import React from 'react';
import Tilt from 'react-tilt';
import logo from './logo.png';
import './Logo.css'

const Logo = () => {
    return (
        <div className="ma 4 mt0">
        <Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 150, width: 150 }} >
        <div className="Tilt-inner pa3"> 
        <img style={{paddingTop: '10px'}} alt="brain logo" src={logo}/>
        </div>
       </Tilt>
        </div>
    );
}

export default Logo;
 
