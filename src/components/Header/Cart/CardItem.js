function CartItem (props) {
  const item = props.item;
  const addCart = props.addCart;

  return(
    <>
      <img src={item.img}></img>
      <a href='{item.url'>{item.name}</a>
      <p>x{item.quantity}</p>
      <span>{item.price}€</span>
      <div className='mod-cant'>
        <button onClick={()=>addCart(item)}>+</button>
        <button>-</button>
      </div>    
    </>
  );
};

export default CartItem;