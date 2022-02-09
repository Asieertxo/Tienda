import { useState } from "react";

import Choice from "./Choice";
import Title from "./Title";
import Offer from "./Offer";
import Popup from "./Popup/Popup";
import Cart from "./Cart/Cart";

function Header(props) {

  const [popup, setPopup] = useState(false);
  const [carrito, setCarrito] = useState(false);

  return (
    <>
      {popup && <Popup popup={popup} setPopup={setPopup} addCart={props.addCart}/>}
      <header className="header">
        <p className="header-T"><b>G</b>aming <b>S</b>hop</p>
        
        <Choice />

        <Title popup={popup} setPopup={setPopup}  carrito={carrito} setCarrito={setCarrito}/>

        {carrito && <Cart carrito={carrito} setCarrito={setCarrito} addCart={props.addCart}/>}

        <Offer />
      </header>
    </>
  );
}

export default Header;