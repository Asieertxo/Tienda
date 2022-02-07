import { useState } from "react";

import Choice from "./Choice";
import Title from "./Title";
import Offer from "./Offer";
import Popup from "./Popup/Popup";
import Cart from "./Cart/Cart";

function Header() {

  const [show, setShow] = useState(false);

  return (
    <>
      {show && <Popup show={show} setShow={setShow}/>}
      <header className="header">
        <p className="header-T"><b>G</b>aming <b>S</b>hop</p>
        
        <Choice />

        <Title show={show} setShow={setShow}/>

        <Cart />

        <Offer />
      </header>
    </>
  );
}

export default Header;