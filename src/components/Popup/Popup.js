import {useState} from 'react';

import Search from "./Search";
import List from "./List";

function SecondSection() {

  const [searchTerm, setSearchTerm] = useState("");


  return (
    <div className="popup">
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>

      <List searchTerm={searchTerm}/>
    </div>
  );
}
  
export default SecondSection;