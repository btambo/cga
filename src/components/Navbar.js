import { useState } from 'react';
import { Link } from 'react-router-dom';
import HamburgerIcon from './HamburgerIcon';
import './Navbar.css';

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
        <nav>
            
            <ul id='navbar-container'>
                <Link className='navbar-element' to="/signatures">Our Signatures</Link>
                <li className='navbar-element'>What we do</li>
                <li className='navbar-element'>Who we are</li>
            </ul>

            <HamburgerIcon toggleMenu={toggleMenu} />

        </nav>
    )
}

export default NavBar;
