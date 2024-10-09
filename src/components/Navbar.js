import React from 'react';
import { NavLink} from 'react-router-dom';
import '../styles/header.css'

const Navbar = () => {
    return (
        <header className='header'>
            <div className="headerlogo">
                <NavLink to='/'>
                    <img className='logo' src={require('../images/Shroompy.png')} alt='Shroompy'/>
                </NavLink>
            </div>
            <nav className='headnav'>
                <NavLink activeclassname="active" className="pages" to="/">
                    HOME
                </NavLink>
                <NavLink activeclassname="active" className="pages" to="/shroompy">
                    IDENTIFICATOR
                </NavLink>
                <NavLink activeclassname="active" className="pages" to="/about">
                    ABOUT
                </NavLink>
                <NavLink activeclassname="active" className="pages" to="/contact">
                    CONTACT
                </NavLink>
            </nav>
        </header>
    );
}

export default Navbar;