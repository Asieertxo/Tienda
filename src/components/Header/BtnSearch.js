import { useState } from "react";

function BtnSearch(props){

  return (
    <div className="btnsearch">
      <button onClick={() => props.setShow(!props.show)}>Click Que quieres ...</button>
    </div>
  );
}

export default BtnSearch;