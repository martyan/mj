import React from 'react'
import logo from '../images/mj.svg'
import './header.scss'

const Header = () => (
    <header>
        <div className="container">
            <a href="/" className="logo"><img src={logo} alt="mj" /></a>
        </div>
    </header>
)

export default Header
