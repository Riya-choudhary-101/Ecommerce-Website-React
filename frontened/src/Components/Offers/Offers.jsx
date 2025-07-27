import {React, useContext} from 'react'
import './Offers.css'
import exclusive_image from '../Assets/hero_image.png'
import { NavContext } from '../../Context/NavContext';
import { useNavigate } from 'react-router-dom';

const Offers = () => {

  const navigate = useNavigate();
  const { setMenu } = useContext(NavContext);

  const goToWomens = () => {
    setMenu("womens");
    navigate('/womens');
  }

  return (
    <div className='offers'>
      <div className="offers-left">
        <h1>Step Into Style</h1>
        <p>Curated Picks From Our Best Selling Collections — Just For You</p>

        <button onClick={goToWomens}>Explore Now</button>
      </div>
      <div className="offers-right">
        <img src={exclusive_image} alt="" />
      </div>
    </div>
  )
}

export default Offers
