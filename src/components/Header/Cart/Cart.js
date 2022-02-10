import CardItem from "./CardItem";

function Cart(props) {

  const local = JSON.parse(localStorage.getItem('cart'));

  return (
    <div className="cart">
      <div className="cart-title">
        <p>Cart</p>
        <button className='cart-title_close' onClick={() => props.setCarrito(!props.carrito)}>&#215;</button>
      </div>
      
      <div className="cart-products">
        {local.map(function (item){
          return (
            <div key={item.ObjectID} className='cart-products__card'>
              <CardItem item={item} addCart={props.addCart} delCart={props.delCart}/>
            </div>
          );
        })}
      </div>

      <div className="cart-price">
        <p>Total:</p>
        <span></span>
      </div>
    </div>
  );
}
  
export default Cart;