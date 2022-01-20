//import "./../../../sass/tienda.scss";

import Logo from './Logo/Logo';
import Navegation from './Navegation/Navegation';
import Search from './Search/Search';
import Icon from './Icon/Icon';

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