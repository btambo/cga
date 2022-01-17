import { useState, useEffect } from 'react';
import HamburgerIcon from './HamburgerIcon';
import './Navbar.css';

const NavBar = () => {

    const [hamburgerOpen, setHamburger] = useState(false);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
       
    const toggleMenu = () => {
        setHamburger(!hamburgerOpen);
    }

    useEffect(() => {

        const changeWidth = () => {
          setScreenWidth(window.innerWidth);
        }
    
        window.addEventListener('resize', changeWidth)

        return () => {
            window.removeEventListener('resize', changeWidth)
        }
    
      }, [])

    return (
        <nav>

            {(hamburgerOpen || screenWidth > 700) && (
            <ul className='navbar-container'>
                <li className='navbar-element'>Our Signatures</li>
                <li className='navbar-element'>What we do</li>
                <li className='navbar-element'>Who we are</li>
            </ul>
            )}

            <HamburgerIcon toggleMenu={toggleMenu} isOpen={hamburgerOpen} />

        </nav>
    )
}

export default NavBar;
