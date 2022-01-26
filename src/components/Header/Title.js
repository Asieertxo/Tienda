import menu from "./../../img/menu.png";
import bag from "./../../img/bag.png";

function Title() {
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
      <div className="header-title__search">
        <input type="text" placeholder="Que quieres..."></input>
        <a href="#" className="button">Search</a>
      </div>
    </div>
  );
}

export default Title;