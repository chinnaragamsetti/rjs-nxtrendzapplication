import {BsPlusSquare, BsDashSquare} from 'react-icons/bs'
import {AiFillCloseCircle} from 'react-icons/ai'

import CartContext from '../../context/CartContext'

import './index.css'

const CartItem = props => (
  <CartContext.Consumer>
    {value => {
      const {
        removeCartItem,
        incrementCartItemQuantity,
        decrementCartItemQuantity,
      } = value
      const {cartItemDetails} = props
      const {id, title, brand, quantity, price, imageUrl} = cartItemDetails

      const onRemoveCartItem = () => {
        removeCartItem(id)
      }
      // TODO: Update the functionality to increment and decrement quantity of the cart item
      const incrementCartItem = () => {
        incrementCartItemQuantity(id)
      }
      const decrementCartItem = () => {
        if (quantity > 1) {
          decrementCartItemQuantity(id)
        } else {
          removeCartItem(id)
        }
      }
      return (
        <li className="cart-item">
          <img className="cart-product-image" src={imageUrl} alt={title} />
          <div className="cart-item-details-container">
            <div className="cart-product-title-brand-container">
              <p className="cart-product-title">{title}</p>
              <p className="cart-product-brand">by {brand}</p>
            </div>
            <div className="cart-quantity-container">
              <button
                type="button"
                className="quantity-controller-button"
                onClick={decrementCartItem}
                data-testid="minus"
                aria-label="Save"
              >
                <BsDashSquare color="#52606D" size={12} />
              </button>
              <p className="cart-quantity">{quantity}</p>
              <button
                type="button"
                className="quantity-controller-button"
                onClick={incrementCartItem}
                data-testid="plus"
                aria-label="Save"
              >
                <BsPlusSquare color="#52606D" size={12} />
              </button>
            </div>
            <div className="total-price-remove-container">
              <p className="cart-total-price">Rs {price * quantity}/-</p>
            </div>
            <button
              className="delete-button"
              type="button"
              onClick={onRemoveCartItem}
              data-testid="remove"
              aria-label="Save"
            >
              <AiFillCloseCircle color="#616E7C" size={20} />
            </button>
          </div>
        </li>
      )
    }}
  </CartContext.Consumer>
)

export default CartItem
