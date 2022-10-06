import React, { Component } from 'react';
import './Cart.css';

class Cart extends Component {
    render() {
        return(
            <div className='cart-top-list' id="cart-top-list">
                <hr className='cart-top-boundary'></hr>
                <div className='cart-top-summary'>
                    <p>Shopping cart (---)</p>
                    <p>Total: $</p>
                </div>
                <hr className='cart-top-boundary'></hr>

            </div>
        );
    }
}

export default Cart;
