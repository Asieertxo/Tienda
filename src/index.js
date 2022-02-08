import React from 'react';
import ReactDOM from 'react-dom';

import "./sass/main.scss"

import Header from './components/Header/Header';
import Popup from './components/Header/Popup/Popup';
import FirstSection from './components/FirstSection/FirstSection';
import SecondSection from './components/SecondSection/SecondSection';
import Footer from './components/Footer/Footer';

ReactDOM.render(
  <>
    <Header/>

    <FirstSection />

    <SecondSection />

    {/*<Footer />*/}
  </>,
  document.getElementById('root')
);



/*
13-01-2022 0:14:00 -- haba del localStorage y el sessionStorage
13-01-2022 1:30:00 -- useEffect desactivar los event listener

*/


/*
--useState    -> manejo de estados basico
--useRef      -> manejo de referencias mutables
--useReduces  -> manejo de estados complejos, usar cuando varios estados relaciones se influyen
--useEffect   -> 
*/