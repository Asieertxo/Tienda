import Choice from "./Choice";
import Title from "./Title";
import Offer from "./Offer";

import menu from "./../../img/menu.png";
import bag from "./../../img/bag.png";

function Header() {
  return (
    <header className="header">
    <p className="header-T"><b>G</b>aming <b>S</b>hop</p>
    
    <Choice />

    <Title />

    <Offer />
    </header>
  );
}

export default Header;