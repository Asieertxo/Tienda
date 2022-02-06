import BtnSearch from "./BtnSearch";

import menu from "./../../img/menu.png";
import bag from "./../../img/bag.png";

function Title(props) {
  return (
    <div className="header-title">
      <div className="header-bodertop">
        <div className="header-bodertop__circle red"></div>
        <div className="header-bodertop__circle yellow"></div>
        <div className="header-bodertop__circle green"></div>
      </div>

      <div className="header-title__icon">
        <img src={menu}></img>
        <img src={bag}></img>
      </div>

      <h1>start renting gaming</h1>
      <h3>best equipment to use in our hotel</h3>
      
      <BtnSearch show={props.show} setShow={props.setShow}/>

    </div>
  );
}

export default Title;