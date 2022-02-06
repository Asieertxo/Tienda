import { useState } from "react";

function BtnSearch(props){

  return (
    <div className="btnsearch">
      <button onClick={() => props.setShow(!props.show)}>Que quieres ...</button>
    </div>
  );
}

export default BtnSearch;