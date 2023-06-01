import React from 'react'
// import './src/Components/Header.css';
import logo from './Image/logo.jpg';
import "./Card/Card.css"
<link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css"></link>


export default function Header() {
    return (
        <div>
            <div>
                <nav className="navigation">
                    <h1>Hello,</h1>
                    <h2>users</h2>
                </nav>
            </div>
            <div>
                <nav className="logo">
                    <img src={logo} alt="Logo" />
                </nav>
            </div>
        </div>
    );
}