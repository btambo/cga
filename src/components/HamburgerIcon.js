import './HamburgerIcon.css';

const HamburgerIcon = ( props ) => {

    const toggleIcon = () => {
        var element = document.getElementById("nav-icon1");
        element.classList.toggle("open");
    }

    const toggleBurgerIcon = () => {
        toggleIcon();
        props.toggleMenu();
    }

    return (
    <div onClick={toggleBurgerIcon} id="nav-icon1">
        <span></span>
        <span></span>
        <span></span>
    </div>
    )
    
}

export default HamburgerIcon;