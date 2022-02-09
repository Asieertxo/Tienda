function CartItem (props) {
  const item = props.item;
  return(
    <>
      <img src={item.img}></img>
      <a href='{item.url'>{item.name}</a>
      <p>x{item.quantity}</p>
      <span>{item.price}€</span>
      <div className='mod-cant'>
        <button>+</button>
        <button>-</button>
      </div>    
    </>
  );
};

export default CartItem;