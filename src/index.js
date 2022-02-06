import React from 'react';
import ReactDOM from 'react-dom';

import "./sass/main.scss"

import Header from './components/Header/Header';
import Popup from './components/Header/Popup/Popup';
import FirstSection from './components/FirstSection/FirstSection';
import SecondSection from './components/SecondSection/SecondSection';

ReactDOM.render(
  <>
    <Header/>

    <FirstSection />

    <SecondSection />
  </>,
  document.getElementById('root')
);



/*13-01-2022 0:14:00 -- haba del localStorage y el sessionStorage*/
/*13 despues useEffect*/