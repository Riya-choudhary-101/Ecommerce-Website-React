import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className='newsletter'>
      <h1>Stay in Style – Join the Club</h1>
      <p>Get insider access to the latest trends, drops, and exclusive deals — delivered straight to your inbox.</p>
      <div>
        <input type="email" placeholder='Your Email Id' />
        <button>Join Now</button>
      </div>
    </div>
  )
}

export default NewsLetter
