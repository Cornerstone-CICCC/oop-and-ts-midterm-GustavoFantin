import { Component } from "../common/Component.js";

export class ProductItem extends Component {
  constructor(props, cart) {
    super(props, cart)
    this.handleAddToCart = this.handleAddToCart.bind(this)
    // this.openModal = this.openModal.bind(this);
    // this.closeModal = this.closeModal.bind(this);
  }

  handleAddToCart() {
    this.props.cartContext.addProduct(this.props.product)
    // console.log('esse eh o correto',this.props.cartContext.cart)
  }


  openModal(modal) {
    modal.showModal();  
  }

  
  closeModal(modal) {
    modal.close()
  }
  
  
 

  render() {
    const product = document.createElement('div')
    product.className = "product-item"
    // console.log(this.props.product.id);
  
    const modalId = `modal-${this.props.product.id}`


    product.innerHTML = `
      <button class='open-modal'> 
        <img src="${this.props.product.image}" width=200px>
        <h3>${this.props.product.id} ${this.props.product.title} - CA$ ${parseFloat(this.props.product.price).toFixed(2)}</h3>
      </button>

      
      <dialog id="${modalId}">
        <button class="close-modal">Close</button>
        <div class='div-img-modal'>
          <img src="${this.props.product.image}" width=200px>
        </div>
        <div class="info-modal">
          <h3>${this.props.product.title}</h3>
          <h4>${this.props.product.description}</h4>
        </div>
        <div class='price-modal'>
          CA$ ${parseFloat(this.props.product.price).toFixed(2)}
        </div>
        <button class="add-cart-btn">Add to Cart</button>
      </dialog>
    `

    const modal = product.querySelector(`#${modalId}`)
    



    product.querySelector(".open-modal").addEventListener('click', () => this.openModal(modal))
    product.querySelector(".close-modal").addEventListener('click', () => this.closeModal(modal))
    
    product.querySelector('.add-cart-btn').addEventListener('click', this.handleAddToCart)

    return product
  }

  
}

