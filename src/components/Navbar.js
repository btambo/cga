import { useState, useEffect } from 'react';
import './Navbar.css';

const NavBar = () => {

    const [hamburgerOpen, setHamburger] = useState(false);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    const toggleMenu = () => setHamburger(!hamburgerOpen);

    let navbarClasses = ["navbar-container"];

    useEffect(() => {

        const changeWidth = () => {
          setScreenWidth(window.innerWidth);
        }
    
        window.addEventListener('resize', changeWidth)

        return () => {
            window.removeEventListener('resize', changeWidth)
        }
    
      }, [])

      if (hamburgerOpen) {
        navbarClasses = ["navbar-container", "open"];
    } 

    return (
        <nav>

            {(hamburgerOpen || screenWidth > 700) && (
            <ul className={navbarClasses.join(" ")}>
                <li className='navbar-element'>Our Signatures</li>
                <li className='navbar-element'>What we do</li>
                <li className='navbar-element'>Who we are</li>
            </ul>
            )}

            <button onClick = {toggleMenu} className='hamburger-button'></button>

        </nav>
    )
}

export default NavBar;
