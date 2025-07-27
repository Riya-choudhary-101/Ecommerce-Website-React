// import React from 'react'
// import CartItems from '../Components/CartItems/CartItems'

// const Cart = () => {
//   return (
//     <div>
//       <CartItems/>
//     </div>
//   )
// }

// export default Cart

import React from 'react'
import CartItems from '../Components/CartItems/CartItems'
import './CSS/Cart.css';

const Cart = () => {
  return (
    <div className='cart-page-wrapper'> {/* ✅ Added wrapper class */}
      <CartItems />
    </div>
  )
}

export default Cart
