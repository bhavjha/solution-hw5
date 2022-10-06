import React, { Component } from 'react';
import './Roll.css';

class Roll extends Component {

  constructor(props) {
    super(props);
    this.state = {
      packSize:1,
      glazingType:"Keep Original",
      // isSelected: false
    };    
    // this.togglePackSize = this.togglePackSize.bind(this);
  }


  //connecting glazing options and its price adaptation
  glazingOptions = {
    "Keep Original" : 0.00,
    "Sugar Milk" : 0.00,
    "Vanilla Milk" : 0.50,
    "Double Chocolate" : 1.50
  } 
  
  // for packsize
  packSizeOptions = {
    1:1,
    3:3,
    6:5,
    12:10
  }

  handleGlazingChange = (event) => {
    const newGlazing = event.target.value;

    this.setState(prevState => ({
      ...prevState,
      glazingType: newGlazing
    }))
  };

  handlePackSizeChange = (event) => {
    const newPackSize = event.target.value;

    // console.log('selected class of button = ' + '.p' + event.target.value);
    // const selectedClassOfButton = '.p' + event.target.value;

    // const selectedbutton = document.querySelector(selectedClassOfButton);
    // console.log('selectedbutton = ', selectedbutton);

    // document.querySelector('.p1').style.backgroundColor = 'white'; 
    // document.querySelector('.p3').style.backgroundColor = 'white'; 
    // document.querySelector('.p6').style.backgroundColor = 'white'; 
    // document.querySelector('.p12').style.backgroundColor = 'white'; 

    // event.target.style.backgroundColor = 'grey'; 

    this.setState(prevState => ({
      ...prevState,
      packSize: newPackSize
    }))
  }


  calcPrice = () => {

    const basePrice = (this.props.rollPrice).slice(2);
    let finalCost = ( parseFloat(basePrice) * parseFloat(this.packSizeOptions[this.state.packSize]) ) + parseFloat(this.glazingOptions[this.state.glazingType]);
    finalCost = '$ '+ finalCost.toFixed(2)
    return (finalCost);
  };

  render() {

    const packSizeSelectedStyle = {
      backgroundColor: 'grey'
    }

    const packSizeUnselectedStyle = {
      backgroundColor: 'white'
    }

    return(
        <div className="item">
                <img className="item-img" src={ process.env.PUBLIC_URL + this.props.imageURL} alt="cinnamon roll"></img>
                <div className="item-desc">
                  <div className="item-name">
                    {this.props.rollName}
                  </div>
                  <div className="item-glazing">
                    <label htmlFor="glaze-original">Glazing:</label>
                    <select name="glaze-original" id="glaze-original" onChange={this.handleGlazingChange} value={this.state.glazingType}>
                      <option value="Keep Original">Keep Original</option>
                      <option value="Sugar Milk">Sugar Milk</option>
                      <option value="Vanilla Milk">Vanilla Milk</option>
                      <option value="Double Chocolate">Double Chocolate</option>
                    </select>
                  </div>
                  <div className="item-pack-size">
                    <p className="pack-p">Pack size</p>
                    <div className="pack"  >
                      <button type="button" className="pack-size p1" onClick={this.handlePackSizeChange} style={ this.state.packSize===1 ? packSizeSelectedStyle : packSizeUnselectedStyle} value={1} >1</button> 
                      <button type="button" className="pack-size p3" onClick={this.handlePackSizeChange} style={ this.state.packSize===3 ? packSizeSelectedStyle : packSizeUnselectedStyle} value={3}>3</button>
                      <button type="button" className="pack-size p6" onClick={this.handlePackSizeChange} style={ this.state.packSize===6 ? packSizeSelectedStyle : packSizeUnselectedStyle} value={6}>6</button>
                      <button type="button" className="pack-size p12" onClick={this.handlePackSizeChange} style={ this.state.packSize===12 ? packSizeSelectedStyle : packSizeUnselectedStyle} value={12}>12</button>
                    </div>
                  </div>
                  <div className="item-final">
                    <p className="item-cost" id="baseprice">{this.calcPrice()}</p>
                    <button className="item-cart" type="button" 
                    onClick={() => this.props.onAdd(this.props.rollName, this.state.glazingType, this.state.packSize,this.calcPrice())}>Add to Cart</button>
                  </div>
                </div>
            </div>
    );
  }
}

export default Roll;