import './Homepage.css';

const Homepage = () => {
    return (
        <div id='homepage-grid-container'>
            <div id='slogan-container'>
                <h1>Knowing how to sign a card can be hard.</h1>
                <p>Luckily, we've got you covered!
                    Whatever card you need help signing,
                    we makes it easy for you. Discover your
                    signature today.
                </p>
                <div id='button-container'>
                    <button className='homepage-button'>Explore Cards</ button>
                    <button className='homepage-button'>What we do</ button>
                </div>
            </div>
        </div>
    )
}

export default Homepage;