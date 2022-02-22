import Item from "./Item";
import list from "./../../api/bbdd"

function SecondSection(props) {
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














































