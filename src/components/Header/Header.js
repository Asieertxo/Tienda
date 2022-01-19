import "./Header.scss";

function Header() {
  return (
    <header className="header">
        <img src="#" className="header-logo"></img>

        <nav className="header-navegation">
            <li className="header-navegation_menu"><a href="#">Ropa</a></li>
            <li className="header-navegation_menu"><a href="#">merchandising</a></li>
            <li className="header-navegation_menu"><a href="#">Ordenadores</a></li>
        </nav>

        <form action="#" className="header-search">
            <input type="text" className="header-search__input"></input>
            <button className="header-search__button">
                <svg className="header-search__icon">
                    <use xlinkHref='./../img/sprite.svg#icon-magnifying-glass'></use>
                </svg>
            </button>
        </form>

        <div className="header-user">
            <div class="header-user__cesta">
                <svg class="header-user__cesta__icon">
                    <use xlinkHref="img/sprite.svg#icon-chat"></use>
                </svg>
                <span class="header-user__cesta__notification">13</span>
            </div>
            <div class="header-user__user">
                <img src="img/user.jpg" alt="User photo" class="header-user__user__photo"></img>
                <span class="header-user__user__name">Jonas</span>
            </div>
        </div>

    </header>
  );
}

export default Header;