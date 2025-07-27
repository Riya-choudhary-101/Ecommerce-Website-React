import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122) </div>
      </div>
      <div className="descriptionbox-description">
        <p>I absolutely love this product! The fabric feels premium and is incredibly soft on the skin. I wore it to a weekend brunch and received so many compliments. The fit is exactly as described, and the color didn’t fade even after washing. It’s lightweight and perfect for daily wear. The stitching is neat, and there were no loose threads. Delivery was on time, and the packaging was neat and secure. Will definitely be ordering more from this brand!
      </p>
       
        <p>I had my doubts at first, but this product truly exceeded expectations. The color is rich and vibrant, and the size was exactly right. It’s very comfortable to wear for long hours, and I love the way it fits without feeling too tight or too loose. Highly recommended for anyone looking for quality and comfort!</p>

      </div>
    </div>
  )
}

export default DescriptionBox
