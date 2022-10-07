import React, { Component } from 'react';
import './Cart.css';

class Cart extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cartTotal:0,
            cartArray:[],
            cartItems:0
        };   
      }

      edgeCart = () => {
        if(this.props.cartArray.length==0)
        {
         const cartTopTextID = document.getElementById('cart-top-items');
         cartTopTextID.innerText = 'The cart is empty!';
        }
      }

      componentDidUpdate(){}

    render() {
        return(
            <div className='cart-top-list' id="cart-top-list">
                <hr className='cart-top-boundary'></hr>
                <div className='cart-top-summary'>
                    <p id="cart-top-summary-items">Shopping cart ({this.props.cartArray.length} items)</p>
                    <p id="cart-top-summary-items-total">Total: $ <p id="priceupdated">{this.props.cartTotal}</p></p>
                </div>
                <div>
                
                </div>
                <div id='cart-top-items'>
                        {
                            this.props.cartArray.map((roll, idx) => 
                            {
                              //console.log(roll)
                              return (
                                  <div className='cart-top-item'>
                                    <img src={process.env.PUBLIC_URL+ roll.rollimg} className="cart-top-summary-image"  />
                                    <div>{roll.rollname}</div>
                                    <div>Glazing: {roll.rollglaze}</div>
                                    <div>Pack size: {roll.rollpack}</div>
                                    <div><b>{roll.rollprice}</b></div>
                                    <button type="button" id="removeFromCart" onClick={() => this.props.removeFromCart(idx)}>Remove</button>
                                  </div>
                                )
                            })
                        }
                </div>
                <hr className='cart-top-boundary'></hr>

            </div>
        );
    }
}

export default Cart;
