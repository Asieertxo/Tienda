import {useState} from 'react';

function Cart(props) {

  const [count, setCount] = useState(0);

  return (
    <div className="cart">
      <div className="cart-title">
        <p>Cart</p>
        <button className='cart-title_close' onClick={() => props.setCart(!props.cart)}>&#215;</button>
      </div>
      <div className="cart-products">
        {list.map(function (item){
          return(
            <div key={item.ObjectID} className="cart-products__card">
              <img src={item.img}></img>
              <a href={item.url}>{item.name}</a>
              <p aling="right">x{count}</p>
              <span>{item.price}€</span>
              <div className='mod-cant'>
                <button onClick={() => setCount(count + 1)}>+</button>
                <button onClick={() => setCount(count - 1)}>-</button>
              </div>
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

























const list = [
  {
    img: require('./../../../img/pc1.jpg'),
    name: 'Millenium Machine 1 Mini Soraka',
    url:'https://www.pccomponentes.com/millenium-machine-1-mini-soraka-amd-ryzen-5-5600x-16gb-1tb-480gb-ssd-rtx-3060ti',
    caract: 'AMD Ryzen 5 5600X/16GB/1TB+480GB SSD/RTX 3060Ti',
    text: 'Tener un procesador potente con 6 núcleos es un elemento importante, ¡pero también porque el Ryzen 5 5600X necesita una RAM rápida para funcionar con toda su potencia! Es por eso que hemos instalado dos memorias de RAM de 8 GB que permiten un primer aumento de los caudales gracias al funcionamiento de Doble Canal.',
    price: 1600,
    points: 4,
    ObjectID: 0,
  },
  {
    img: require('./../../../img/pc2.jpg'),
    name: 'PcCom Gold',
    url:'https://www.pccomponentes.com/pccom-gold-amd-ryzen-5-5600x-16gb-1tbssd-rtx3060ti',
    caract: 'AMD Ryzen 5 5600X/16GB/1TBSSD/RTX3060Ti',
    text: 'Tener un procesador potente con 6 núcleos es un elemento importante, ¡pero también porque el Ryzen 5 5600X necesita una RAM rápida para funcionar con toda su potencia! Es por eso que hemos instalado dos memorias de RAM de 8 GB que permiten un primer aumento de los caudales gracias al funcionamiento de Doble Canal.',
    price: 1709,
    points: 5,
    ObjectID: 1,
  },
];