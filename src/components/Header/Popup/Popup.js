import {useState} from 'react';

import Search from "./Search";
import List from "./List";

function Popup(props) {

  const [searchTerm, setSearchTerm] = useState("");


  return (
    <div className="popup">
      <button className="popup-close" onClick={() => props.setShow(!props.show)}>x</button>
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>

      <List searchTerm={searchTerm}/>
    </div>
  );
}
  
export default Popup;