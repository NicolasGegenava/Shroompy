import React from 'react'
import '../styles/foot.css'
import {NavLink} from 'react-router-dom'

const Footer = () => {
    return (
    <footer className='foot'>
        <div className='footdescription'>
            <p className='copyright'><b>Copyright © Project Shroompy</b></p>
        </div>
        <div className="social-icons">
            <a href="" className="icon" target='_blank' rel="noreferrer"><img src={require('../images/Facebook.png')} alt="Facebook" /></a>
            <a href="https://x.com/shroompyproject" className="icon" target='_blank' rel="noreferrer"><img src={require('../images/Twitter.png')} alt="X" /></a>
            <a href="" className="icon" target='_blank' rel="noreferrer"><img src={require('../images/Instagram.png')} alt="Instagram" /></a>
          </div>
    </footer>
    )
}

export default Footer