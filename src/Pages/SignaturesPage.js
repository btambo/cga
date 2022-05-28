import React, { useState } from 'react';
import CardCarousel from '../Components/CardCarousel/CardCarousel';
import './Themes.css';
import './SignaturePage.css';


const SignaturesPage = () => {

    const [currentTheme, setCurrentTheme] = useState('default');
    
    return (
        <div class={`signature-page ${currentTheme}-main`}>

            <CardCarousel 
                currentTheme={currentTheme} 
                setCurrentTheme={setCurrentTheme}
            />

        </div>
    )
};

export default SignaturesPage;