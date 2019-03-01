import React from 'react'
import { Link } from 'gatsby'

import mj from '../images/mj_black.svg'
import './Footer.scss'

const Footer = () => (
    <div className="footer">
        <span>Coded by{' '}</span>
        <Link to="/">
            <img src={mj} alt="mj" />
        </Link>
    </div>
)

export default Footer
