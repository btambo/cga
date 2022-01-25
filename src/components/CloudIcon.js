import { useState } from 'react/cjs/react.development';
import Raindrop from './Raindrop';
import Cloud from './Cloud.svg';
import './CloudIcon.css';

const CloudIcon = ( props ) => {

    var cloudID = props.cloudID;
    const [isRaining, setRain] = useState(false);

    const showRain = () => {
        var Rain = document.getElementById(cloudID);
        Rain.classList.toggle('raining');
    }

    const toggleRain = () => {
        setRain(!isRaining);
        showRain();
    }

    return (

        <div>
            <img onClick= {toggleRain} src={Cloud} alt='Cloud' className='cloud-icon' />
            <Raindrop cloudID = {cloudID} />
        </div>
    )
}

export default CloudIcon;