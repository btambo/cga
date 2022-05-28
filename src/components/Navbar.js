import { useState } from 'react';
import HamburgerIcon from './HamburgerIcon';
import './Navbar.css';
import Logo from '../images/Logo.svg'

const NavBar = () => {

    const [hamburgerOpen, setHamburger] = useState(false);

    const toggleSlider = () => {
        var slider = document.getElementById('navbar-container');
        slider.classList.toggle('slide');
    }

    const toggleMenu = () => {
        setHamburger(!hamburgerOpen);
        toggleSlider();
    }

    return (
        <nav >
            <ul id='logo-container'>
                <img src={Logo} alt='card' className='logo' />
                <li className='logo'>cga</li>
            </ul>
            <ul id='navbar-container'>
                <li className='navbar-element'>Our Signatures</li>
                <li className='navbar-element'>What we do</li>
                <li className='navbar-element'>Who we are</li>
            </ul>

            <HamburgerIcon toggleMenu={toggleMenu} />

        </nav>
    )
}

export default NavBar;
