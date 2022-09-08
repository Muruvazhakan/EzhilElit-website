import React from "react";
import CartItem from "./CartItem";
import "./cartStyle.css";
import * as Datas from '../../Datas/Datas';

class CartComponent extends React.Component {
 
   

  state = {
    // cartItems: [
    //   { id: 1, name: "Pizza", qty: 0, price: 100, total: 0 },
    //   { id: 2, name: "Burger", qty: 0, price: 50, total: 0 },
    //   { id: 3, name: "Fries", qty: 0, price: 80, total: 0 },
    //   { id: 4, name: "Sandwich", qty: 0, price: 150, total: 0 },
    // ],
    cartItems: [
        { id: 1, type: "Lens",  name: "Grey", qty: 0, price: 100, total: 0 },
        { id: 2, type: "Lens", name: "Hazel", qty: 0, price: 50, total: 0 },   
        { id: 3, type: "Lashes",  name: "No55", qty: 0, price: 100, total: 0 },
        { id: 4, type: "Lashes", name: "No50", qty: 0, price: 50, total: 0 },      
      ],
  };

  increaseItem = (cart) => {
    cart.qty = cart.qty + 1;
    cart.total = cart.qty * cart.price;
    this.setState({ cartItems: this.state.cartItems });
  };

  decreaseItem = (cart) => {
   
    if (cart.qty > 0) {
      cart.qty = cart.qty - 1;
      cart.total = cart.qty * cart.price;
      this.setState({ cartItems: this.state.cartItems });
    }
  };

  removeItems = () => {
    for (var key in this.state.cartItems) {
      this.state.cartItems[key].qty = 0;
      this.state.cartItems[key].total = 0;
    }

    this.setState({ cartItems: this.state.cartItems });
  };
  MakeItem = function(X) {
    return <option>{X}</option>;
};
  render() {
   
    return (
      <React.Fragment>
        <h1>Ezhil Elit Accessories</h1>
        <button onClick={this.removeItems}>Remove All Items</button>
        <table border="1">
       
          <tr>
            <th>Type</th>
            <th>Item</th>
            <th>Quantity</th>
            <th>Action</th>
            {/* <th>Price</th> */}
           
            {/* <th>Total</th> */}
           
          </tr>
          
          {this.state.cartItems.map((cart) => (
              <>
            <CartItem
              cart={cart}
              onIncrement={this.increaseItem}
              onDecrement={this.decreaseItem}
            />
           
            </>
          ))}
          <tr>

            {/* <th colSpan="2">Total Amount</th>
            <th>
              {this.state.cartItems.reduce(
                (total, cart) => total + cart.qty * cart.price,
                0
              )}
            </th> */}
            <th>Quantity</th>
            <th>
              {this.state.cartItems.reduce(
                (total, cart) => total + cart.qty,
                0
              )}
            </th>
            <button 
            // onClick={() => this.props.onIncrement(this.props.cart)}
            >
            Place the Order
          </button>
          </tr>
        </table>
      </React.Fragment>
    );
  }
}

export default CartComponent;