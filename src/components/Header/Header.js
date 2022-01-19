import "./Header.scss";

import Logo from './Logo/Logo';
import Navegation from './Navegation/Navegation';
import Search from './Search/Search';
import Icon from './Icon/Icon';

import carrito from "./../../img/carrito.png";
import hacker from "./../../img/hacker.png";
import technical from "./../../img/technical.png";

function Header() {
  return (
    <header className="header">
        <Logo />

        <Navegation />

        <Search />

        <Icon />
        
    </header>
  );
}

export default Header;