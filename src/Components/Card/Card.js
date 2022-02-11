import React, { useState } from 'react';
import './Card.css';

const Card = (props) => {
    const { ImageLink, Overlay, Theme, currentTheme, setCurrentTheme  } = props || {};
    
    const selectCard = () => {
        setCurrentTheme(Theme)
    }

    return (
        <div className={`card ${currentTheme}-card`} onClick={selectCard}>
            <img className="card-image" src={ImageLink}/>
            <div className="card-overlay card-overlay-blur">
                <p className='card-overlay-text'>{Overlay}</p>
            </div>

        </div>
    )
};

export default Card;