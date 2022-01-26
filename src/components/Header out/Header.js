//import "./../../../sass/tienda.scss";

import Logo from './Logo';
import Navegation from './Navegation';
import Search from './Search';
import Icon from './Icon';

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