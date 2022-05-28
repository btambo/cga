import React from 'react';
import './Card.css';

const Card = (props) => {
    const { ImageLink, Overlay, Theme, currentTheme, setCurrentTheme  } = props || {};
    
    const handleChangeCardTheme = () => {
        setCurrentTheme(Theme)
    }

    return (
        <div className={`card ${currentTheme}-card`} onClick={handleChangeCardTheme}>
            <img className="card-image" src={ImageLink} alt=''/>
            <div className="card-overlay card-overlay-blur">
                <p className='card-overlay-text'>{Overlay}</p>
            </div>
        </div>
    )
};

export default Card;