import { useEffect, useState } from "react";
import Item from "./Item";
import getAsyncStories from "./../../api/bbdd"

function SecondSection(props) {

  useEffect(() => {
    getAsyncStories().then(result => {
      setList(result.data.stories);
    });
  }, []);
  const [list, setList] = useState([]);

  return (
    <div className="second">
      <h2 className="second-title">Toda nuestra gama de productos</h2>

      <div className="second-products">
         {list.map(function (item){
           return(
             <div key={item.ObjectID} className="second-products__card">
               <Item item={item} second={true} addCart={props.addCart}/>
             </div>
           );
         })}
      </div>
    </div>
  );
}



export default SecondSection;