import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import Logo from '../Images/logo.svg'
import { FiMenu, FiX } from "react-icons/fi";

const NavBar = (props) => {

    const { currentTheme } = props || {};

    const [menuToggle, setMenuToggle] = useState(false);

    const handleMenuToggle = () => {
        setMenuToggle(!menuToggle);
    }

    const handleCloseMenu = () => {
        setMenuToggle(false);
    }

    return (
        <nav className={`navbar-container`}>

            <NavLink className="navbar-logo" exact to='/' onClick={handleCloseMenu}>
                <img src={Logo} alt='card' className='navbar-logo-img' />
                cga
            </NavLink>

            <ul className={menuToggle ? 'navbar-menu active' : 'navbar-menu'}>
                <NavLink className="navbar-links one" exact to='/signatures' onClick={handleCloseMenu}>
                    Our Signatures
                </NavLink>

                <NavLink className="navbar-links two" exact to='/asd' onClick={handleCloseMenu}>
                    What we do
                </NavLink>
                
                <NavLink className="navbar-links three" exact to='/asd' onClick={handleCloseMenu}>
                    Who we are
                </NavLink>
            </ul>

            <div className='menu-toggle' onClick={handleMenuToggle}>
                {menuToggle ? <FiX/> : <FiMenu/>}
            </div>

        </nav>
    )
}

export default NavBar;
