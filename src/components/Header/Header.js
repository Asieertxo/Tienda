import { useState } from "react";

import Choice from "./Choice";
import Title from "./Title";
import Offer from "./Offer";
import Popup from "./Popup/Popup";
import Cart from "./Cart/Cart";

function Header() {

  const [popup, setPopup] = useState(false);
  const [cart, setCart] = useState(false);

  return (
    <>
      {popup && <Popup popup={popup} setPopup={setPopup}/>}
      <header className="header">
        <p className="header-T"><b>G</b>aming <b>S</b>hop</p>
        
        <Choice />

        <Title popup={popup} setPopup={setPopup}  cart={cart} setCart={setCart}/>

        {cart && <Cart cart={cart} setCart={setCart}/>}

        <Offer />
      </header>
    </>
  );
}

export default Header;