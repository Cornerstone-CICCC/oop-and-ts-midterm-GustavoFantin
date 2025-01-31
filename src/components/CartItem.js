import { Component } from "../common/Component.js";

export class CartItem extends Component {
  constructor(props) {
    super(props)
    this.handleAddToCart = this.handleAddToCart.bind(this)
    this.handleRemoveToCart = this.handleRemoveToCart.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }
  
  handleDelete() {
      this.props.cartContext.deleteItem(this.props.item)
  }


  handleAddToCart() {
    this.props.cartContext.addProduct(this.props.item)
  }

  handleRemoveToCart() {
    if (this.props.item.quantity > 1) {
      this.props.cartContext.rmvProduct(this.props.item)
    } else {
      this.props.cartContext.deleteItem(this.props.item)
    }

  }

  render() {
    const shopCart = document.createElement('div')
    shopCart.className = 'cart-item';
    const priceTimesItem = this.props.item.price * this.props.item.quantity
    


    shopCart.innerHTML = `
    <img src="${this.props.item.image}" width=70px>
    <h3>${this.props.item.title}</h3>
    <button class="btn-remove-item">-</button>
    <span>${this.props.item.quantity}x</span>
    <button class="btn-add-item">+</button>
    <span>CA$${priceTimesItem}</span>
    <button class="remove-product">Remove</button>
    `


    //adicionando eventos para os botoes
    shopCart.querySelector('.btn-remove-item').addEventListener('click', this.handleRemoveToCart)
    shopCart.querySelector('.btn-add-item').addEventListener('click', this.handleAddToCart)
    shopCart.querySelector('.remove-product').addEventListener('click', this.handleDelete)
    


    return shopCart
  }
}