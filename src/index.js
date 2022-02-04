import React from 'react';
import ReactDOM from 'react-dom';

import "./sass/main.scss"

import Header from './components/Header/Header';
import Popup from './components/Popup/Popup';
import FirstSection from './components/FirstSection/FirstSection';
import SecondSection from './components/SecondSection/SecondSection';

ReactDOM.render(
  <>
    <Popup />

    <Header/>

    <FirstSection />

    <SecondSection />
  </>,
  document.getElementById('root')
);
