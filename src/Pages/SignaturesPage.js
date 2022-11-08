import React, { useState } from 'react';
import CardCarousel from '../Components/CardCarousel/CardCarousel';
import { familySignatures, friendSignatures, acquaintanceSignatures } from '../Constants/constants';
import './SignaturePage.css';
import SignatureTable from '../Components/SignaturesTable/SignatureTable';


const SignaturesPage = (props) => {

    const { currentTheme, setCurrentTheme } = props || {};

    const [isDesktop, setIsDesktop] = useState(true)
    
    return (
        <div className={`signature-page`}>

            <CardCarousel 
                currentTheme={currentTheme} 
                setCurrentTheme={setCurrentTheme}
            />

            {isDesktop ? (
                //Render all tables for desktop
                <div className='signature-container'>
                    <SignatureTable currentTheme={currentTheme} signatures={familySignatures} type={'Family'}/>
                    <SignatureTable currentTheme={currentTheme} signatures={friendSignatures} type={'Friend'}/>
                    <SignatureTable currentTheme={currentTheme} signatures={acquaintanceSignatures} type={'Acquaintance'}/>
                </div>
            ) : (
                //Render tables in carousel format for mobile
                null
            )}
            
        </div>
    )
};

export default SignaturesPage;