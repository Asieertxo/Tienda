import React from 'react';
import ReactDOM from 'react-dom';

import "./sass/main.scss"

import Header from './components/Header/Header';
import FirstSection from './components/FirstSection/FirstSection';

ReactDOM.render(
  <>
    <Header/>

    <FirstSection />
  </>,
  document.getElementById('root')
);
