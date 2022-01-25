import './Raindrop.css';
import RainDrop from './Raindrop.svg';

const Raindrop = ( props ) => {

    return (
        <div id={props.cloudID} >
            <img src= {RainDrop} alt='Rain' className='rain-drop'/>
            <img src= {RainDrop} alt='Rain' className='rain-drop'/>
            <img src= {RainDrop} alt='Rain' className='rain-drop'/>
        </div>
    )
}

export default Raindrop;