import './cartItem.css';

const CartItem = ({ cartItem }) => {
  const { preview, price, name, quantity } = cartItem;
  return (
    <div className='cart-item-container'>
      <img className="cartImg" src={preview} alt={`${name}`} />
      <div className='item-details'>
        <span className='name'>{name}</span>
        <span className='price'>
          {quantity} x {price}/-
        </span>
      </div>
    </div>
  );
};

export default CartItem;