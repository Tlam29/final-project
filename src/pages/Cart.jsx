import React from 'react'

function Cart(props) {
    const {cartItems} = props;
  return (
    <main>
        <div className="col">
            <h2>Cart</h2>
        </div>
        <div>
            {cartItems.length === 0 && <div>Cart is Empty</div>}
        </div>
    </main>
  )
}

export default Cart