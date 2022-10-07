import React, { Component } from 'react';

import './App.css';

import Nav from './Nav.js'
import Roll from './Roll.js';
import Cart from './Cart.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rollData: [
        {
          imageURL: "/assets/img/original-cinnamon-roll.jpg",
          rollName: "Original cinnamon roll",
          rollPrice: "$ 2.49"
        },
        {
          imageURL: "/assets/img/apple-cinnamon-roll.jpg",
          rollName: "Apple cinnamon roll",
          rollPrice: "$ 3.49"
        },
        {
          imageURL: "/assets/img/raisin-cinnamon-roll.jpg",
          rollName: "Raisin cinnamon roll",
          rollPrice: "$ 2.99",
  
        },
        {
          imageURL: "/assets/img/walnut-cinnamon-roll.jpg",
          rollName: "Walnut cinnamon roll",
          rollPrice: "$ 3.49"
        },
        {
          imageURL: "/assets/img/double-chocolate-cinnamon-roll.jpg",
          rollName: "Double Chocolate cinnamon roll",
          rollPrice: "$ 3.49"
        },
        {
          imageURL: "/assets/img/strawberry-cinnamon-roll.jpg",
          rollName: "Strawberry  cinnamon roll",
          rollPrice: "$ 3.99"
        }
        
      ],
      selectedRollIndex: null,
      glazingType: "Keep Original",
      packSize: 1,
      cartArray : [],
      sortType : 'Name',
      searchValue : '',
      cartTotal : 0,
      cartItems :0,
      

    }
  }

  
      
 popUpSummary = (name,glaze,pack,price) => {
  let popup = document.getElementById("popupSummary");
  popup.innerHTML = "<b>" +name + "</b>" + "</br>" + glaze + "<br/>" + "Pack of " + pack + "<br/>Price: " + price;
  popup.classList.toggle("show");
}

 popUpHide = () => {
  let popup = document.getElementById("popupSummary");
  popup.style.display='none';
}


  addToCart = ( name, glaze, pack, price) => {

    const rollobj = 
    {
      rollname: name,
      rollglaze: glaze,
      rollpack: pack,
      rollprice: price
    }
    console.log('rollobj',rollobj);

      //add to array 
       console.log('cartArray',this.state.cartArray);

      this.state.cartArray.push(rollobj);
      
      //call popup with the new object - loop over objects to get total price
      this.popUpSummary(name, glaze, pack, price);
      setTimeout(this.popUpHide,3000);


      let currentPrice = parseFloat((rollobj.rollprice).slice(2)); // 19.994058346473974957569
      currentPrice = currentPrice.toFixed(2); // "19.99"
      currentPrice = Number(currentPrice);  // 19.99
      this.state.cartTotal += currentPrice;
      this.state.cartItems +=1;

      this.setState(prevState => ({
        ...prevState,
        //rollData: newRollData,
        cartArray: [...this.state.cartArray], //[...prevState.cartArray, rollobj],
        glazingType: "",
        packSize: "",
        selectedRollIndex: null,
        cartItems: this.state.cartItems,
        cartTotal: this.state.cartTotal
      }), 
      ()=>{


      }
      )
  }


  handleSort = (event) => {
    this.setState(prevState => ({
      ...prevState,
      sortType: event.target.value
    }))

  }

  handleSearch = (event) => {
    let searchInput = document.getElementById("search-input");
    console.log('searchInput =', searchInput);

    // access input values here
    const searchText = searchInput.value.toLowerCase();
    console.log('handleSubmit ran = ', searchText);

    this.setState(prevState => ({
      ...prevState,
      searchValue: searchText
    }))

    //loop over rollData
    // for (let i=0; i<6; i++) {
    //   if(this.state.rollData[i].rollName.toLowerCase().includes(searchText) )
    //   {
    //     console.log(this.state.rollData[i].rollName);
    //   }

    // }
  }

  // removeButtonHandler = (rollIndex) => {
  //   const newRollData = this.state.rollData;
  //   newRollData.splice(rollIndex, 1);
  //   this.setState(prevState => ({
  //     ...prevState,
  //     rollData: newRollData
  //   }))
  //   // let numberlist = [1, 2, 3];
  //   // numberlist.splice(0, 1);
  //   // // [2, 3]
  //   // numberlist.splice(0, 2);
  //   // // [3]
  //   // numberlist.splice(1, 1);
  //   // // [1, 3]
  //   // numberlist.splice(1, 2);
  //   // // [1]

  //   // numberlist.splice(0, 1, 4);
  //   // // [4, 2, 3]
  // }
 
  render() {
    return (
      <div className="App">
        <Nav />

        <Cart cartItems={this.state.cartItems} cartTotal={this.state.cartTotal} cartArray={this.state.cartArray} />

      <div className="searchsort">
        <div className="search">
                <input type="text" name="search" id="search-input" />
                <button className="search-button" onClick={this.handleSearch}>
                    Search
                </button>
        </div>
        <div className="sortRollClass">
        <label htmlFor="sort-by" id="sortText">sort by:</label>
                    <select name="sort-by" id="sortRoll" onChange={this.handleSort} value={this.state.sortType}>
                      <option value="Base Price">Base Price</option>
                      <option value="Name">Name</option>
                    </select>
        </div>

      </div>        
          <div className="gallery">
                  {this.state.rollData.map(
                  (roll, idx) => {
                    let check=0;

                    if(check==1) 
                    { return <div>No match!</div> }

                    if ((this.state.searchValue == '') || 
                    (this.state.rollData[idx].rollName.toLowerCase().includes(this.state.searchValue))) //&& idx<3
                     {
                      return <Roll 
                      key={idx}
                      rollIndex={idx}
                      imageURL={roll.imageURL}
                      rollName={roll.rollName}
                      rollPrice={roll.rollPrice}
                      onAdd={this.addToCart}
                      //onRemove={this.removeButtonHandler} 
                      />
                     } 
                     else {
                      check = check +1; console.log('check = ',check);
                      return <div />
                      }
                  }
                  )}


                   {/* <Roll
                      rollIndex={0}
                      imageURL={this.state.rollData[0].imageURL}
                      rollName={this.state.rollData[0].rollName}
                      rollPrice={this.state.rollData[0].rollPrice}
                      glazingType={this.state.rollData[0].glazingType} 
                      packSize={this.state.rollData[0].packSize}
                      onAdd={this.addToCart}
                   />
                   <Roll
                      rollIndex={1}
                      imageURL={this.state.rollData[1].imageURL}
                      rollName={this.state.rollData[1].rollName}
                      rollPrice={this.state.rollData[1].rollPrice}
                      glazingType={this.state.rollData[1].glazingType} 
                      packSize={this.state.rollData[1].packSize} 
                      onAdd={this.addToCart}
                   />
                   <Roll
                      rollIndex={2}
                      imageURL={this.state.rollData[2].imageURL}
                      rollName={this.state.rollData[2].rollName}
                      rollPrice={this.state.rollData[2].rollPrice}
                      glazingType={this.state.rollData[2].glazingType} 
                      packSize={this.state.rollData[2].packSize} 
                      onAdd={this.addToCart}
                   /> */}
              {/* <div className="item-row"> */}
             
                   {/* <Roll
                      rollIndex={3}
                      imageURL={this.state.rollData[3].imageURL}
                      rollName={this.state.rollData[3].rollName}
                      rollPrice={this.state.rollData[3].rollPrice}
                      glazingType={this.state.rollData[3].glazingType} 
                      packSize={this.state.rollData[3].packSize} 
                      onAdd={this.addToCart}
                   />
                   <Roll
                      rollIndex={4}
                      imageURL={this.state.rollData[4].imageURL}
                      rollName={this.state.rollData[4].rollName}
                      rollPrice={this.state.rollData[4].rollPrice}
                      glazingType={this.state.rollData[4].glazingType} 
                      packSize={this.state.rollData[4].packSize} 
                      onAdd={this.addToCart}
                   />
                   <Roll
                      rollIndex={5}
                      imageURL={this.state.rollData[5].imageURL}
                      rollName={this.state.rollData[5].rollName}
                      rollPrice={this.state.rollData[5].rollPrice}
                      glazingType={this.state.rollData[5].glazingType} 
                      packSize={this.state.rollData[5].packSize} 
                      onAdd={this.addToCart}
                   /> */}
                {/* </div> */}
            </div>
      </div>
    );
  }
  
}

export default App;
