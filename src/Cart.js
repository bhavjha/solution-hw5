import React, { Component } from 'react';
import './Cart.css';

class Cart extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cartTotal:0,
            cartArray:[]
        };   
      }

      removeButtonHandler = (rollIndex, rollprice) => {
        const newRollData = this.props.cartArray;
        newRollData.splice(rollIndex, 1);

        // let newPrice = 0
        // // this.props.cartArray.map((roll) => 
        // newRollData.map((roll) => 
        //                     {
        //                       newPrice += roll.rollpack * roll.rollprice
                                   
        //                     })

        let newPrice = 0;

        this.setState(prevState => ({
          ...prevState,
          cartArray: newRollData,
          //cartTotal: newPrice //(this.props.cartTotal-rollprice),
        }),
        () => {
        // this.props.cartArray.map((roll) => 
        newRollData.map((roll) => 
                            {
                              newPrice += roll.rollpack * roll.rollprice
                                   
                            })
            
        }
        )

        const priceupdate = document.getElementByID("priceupdated");
        priceupdate.innerHTML = newPrice;
        
        
        // let numberlist = [1, 2, 3];
        // numberlist.splice(0, 1);
        // // [2, 3]
        // numberlist.splice(0, 2);
        // // [3]
        // numberlist.splice(1, 1);
        // // [1, 3]
        // numberlist.splice(1, 2);
        // // [1]
        // numberlist.splice(0, 1, 4);
        // // [4, 2, 3]
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
                <div id='cart-top-items'>
                        {
                            this.props.cartArray.map((roll) => 
                            {
                              //console.log(roll)
                              return (
                                  <div className='cart-top-item'>
                                    <img src={process.env.PUBLIC_URL+ roll.rollimg} className="cart-top-summary-image"  />
                                    <div>{roll.rollname}</div>
                                    <div>Glazing: {roll.rollglaze}</div>
                                    <div>Pack size: {roll.rollpack}</div>
                                    <div><b>{roll.rollprice}</b></div>
                                    <button type="button" id="removeFromCart" onClick={() => this.removeButtonHandler(roll.index, roll.rollprice)}>Remove</button>
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
