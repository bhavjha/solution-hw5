import React, { Component } from 'react';
import './Cart.css';

class Cart extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cartItems:0,
            cartTotal:0,
            cartArray:[]
        };   
      }

      componentDidUpdate(){}

    render() {
        console.log('CART =', this.props.cartArray) ;

        return(
            <div className='cart-top-list' id="cart-top-list">
                <hr className='cart-top-boundary'></hr>
                <div className='cart-top-summary'>
                    <p id="cart-top-summary-items">Shopping cart {this.props.cartItems}</p>
                    <p id="cart-top-summary-items-total">Total: $ {this.props.cartTotal}</p>
                </div>
                <hr className='cart-top-boundary'></hr>

            </div>
        );
    }
}

export default Cart;
