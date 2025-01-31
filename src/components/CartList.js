import { Component } from "../common/Component.js";
import { CartItem } from "./CartItem.js";

export class CartList extends Component {

  constructor(props) {
    super(props)
    this.state = { cart: []} 
    
    this.updateCart = this.updateCart.bind(this)
    this.props.cartContext.subscribe(this.updateCart);

    this.cartListUl = null
    this.priceSumming = null
    this.itemCounting = null

  }

  updateCart(cart) {

    this.state.cart = cart;
    this.cartListUl.innerHTML = ``

    this.state.cart.forEach(item => {
      const cartItem = new CartItem({
        item,
        cartContext: this.props.cartContext
      })
      this.cartListUl.appendChild(cartItem.render())
    })
    
    this.priceSumming.textContent = `Total Price: CA$ ${this.props.cartContext.priceSum().toFixed(2)}`;
    this.itemCounting.textContent = `Total Items: ${this.props.cartContext.countItem()}x`;

  }




  render() {
    
  const cartListElement = document.createElement('div')
  cartListElement.className = "cart-list" 


  cartListElement.innerHTML = `
  <h2>My Cart:</h2>
  <ul id="cart-item-ul"></ul>

  <h3 id="total-price-text">Total Price: CA$ ${this.props.cartContext.priceSum().toFixed(2)}</h3>
  <h3 id="total-items-text">Total Items: ${this.props.cartContext.countItem()}x</h3>

  `  
    this.cartListUl = cartListElement.querySelector('#cart-item-ul')
    this.priceSumming = cartListElement.querySelector('#total-price-text')
    this.itemCounting = cartListElement.querySelector('#total-items-text')
    
    return cartListElement
  }
}