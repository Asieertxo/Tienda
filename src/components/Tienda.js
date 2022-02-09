import {useReducer} from "react";
import {reducerCart, initialState, TYPES} from "./../reducers/cartReducer";

import Header from './Header/Header';
import FirstSection from './FirstSection/FirstSection';
import SecondSection from './SecondSection/SecondSection';
import Footer from './Footer/Footer';

function Tienda() {

//reducer de cesta-------------------------------------------------
const [state, dispatch] = useReducer(reducerCart, initialState);
//const {cart} = state;

const addCart = (item) => {
  dispatch ({
    type: TYPES.add,payload:item,
  });
}
localStorage.setItem('cart',JSON.stringify(state));
//reducer de cesta-------------------------------------------------

  return (
    <>
    <Header addCart={addCart}/>

    <FirstSection />

    <SecondSection addCart={addCart}/>

    <Footer />
    </>
  );
}

export default Tienda;