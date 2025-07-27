import {React , useContext} from 'react'
import './Hero.css'
// import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
import hero_image from '../Assets/hero_image.png'
import { useNavigate } from 'react-router-dom';
import { NavContext } from '../../Context/NavContext';

const Hero = () => {

    const navigate = useNavigate();
    const { setMenu } = useContext(NavContext);

    const handleRedirect = () => {
        setMenu("mens");     
        navigate('/mens');      
    }


    return (
        <div className='hero'>
            <div className="hero-left">
                <h2>Style that Moves with You</h2>
                <div>
                    <div className="hero-hand-icon">
                        <p>Fashion That Feels Right</p>
                        {/* <img src={hand_icon} alt="" /> */}
                    </div>
                    <br /> <br />
                    <p>Find Your Fit In The Freshest Drops, Made For Every Mood And Every Body.</p>
                </div>

                <div className="hero-latest-btn" onClick={handleRedirect}>
                    <div>Latest Collection</div>
                    <img src={arrow_icon} alt="" />
                </div>

            </div>
            <div className="hero-right">
                <img src={hero_image} alt="" />
            </div>
        </div>
    )
}

export default Hero

