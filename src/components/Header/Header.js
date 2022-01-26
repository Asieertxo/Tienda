
function Header() {
  return (
    <header className="header">
    <p className="header-T"><b>G</b>aming <b>S</b>hop</p>
    
    <div className="header-title">
      <div className="header-bodertop">
        <div className="header-bodertop__circle red"></div>
        <div className="header-bodertop__circle yellow"></div>
        <div className="header-bodertop__circle green"></div>
      </div>

      <h1>start renting gaming</h1>
      <h3>best equipment to use in our hotel</h3>
      <div className="header-title__search">
        <input type="text" placeholder="Que quieres..."></input>
        <a href="#">Search</a>
      </div>
    </div>


    <div className="header-offer">
      <p className="header-offer__title">BEST OFFER</p>
      <p className="header-offer__top">&#x25B2; 39.90€</p>
      <p className="header-offer__sub">Desde</p>
      <hr />
      <p className="header-offer__top">&#x25B2; 39.90€</p>
      <p className="header-offer__sub">Desde</p>
      <hr />
      <p className="header-offer__top">&#x25B2; 39.90€</p>
      <p className="header-offer__sub">Desde</p>
    </div>
    </header>
  );
}

export default Header;