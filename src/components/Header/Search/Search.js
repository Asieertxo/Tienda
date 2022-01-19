import "./Search.scss";

import Lupa from "./../../../img/lupa.png";

function Search() {
  return (
    <form action="#" className="header-search">
        <input type="text" className="header-search__input"></input>
        <button className="header-search__button">
          <img src={Lupa}></img>
        </button>
    </form>
  );
}

export default Search;