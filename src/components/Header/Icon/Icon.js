//import "./Icon.scss";

import cart from "./../../../img/carrito.png";
import hacker from "./../../../img/hacker.png";
import technical from "./../../../img/technical.png";

function Icon() {
  return (
    <div className="header-icon">
        <div className="header-icon__technical">
            <img src={technical}></img>
        </div>
        <div className="header-icon__cart">
            <img src={cart}></img>
        </div>
        <div className="header-icon__user">
            <img src={hacker}></img>
        </div>
    </div>
  );
}

export default Icon;