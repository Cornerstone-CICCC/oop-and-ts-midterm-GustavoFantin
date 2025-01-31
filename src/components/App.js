import { Component } from "../common/Component.js";
import { ProductList } from "./ProductList.js";
import { CartList } from "./CartList.js";



export class App extends Component {
  render() {
    const appContainer = document.createElement('div')
    appContainer.classList.add('container')
    appContainer.innerHTML = `
    <div class = 'checkbox-div'></div>
    <div class='wrapper'></div>
    <div class="cart-div"></div>
    `


    const productList = new ProductList({
      cartContext: this.props.cartContext
    })

    const cartList = new CartList({
      cartContext: this.props.cartContext
    })


    
    productList.mount(appContainer.querySelector('.wrapper'))
    appContainer.querySelector('.cart-div').appendChild(cartList.render())

    
    
    
    return appContainer
  }

}