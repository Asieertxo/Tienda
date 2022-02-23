import List from "./List";
import Item from "./Item";

function SecondSection(props) {

  return (
    <div className="second">
      <h2 className="second-title">Toda nuestra gama de productos</h2>

      <List addCart={props.addCart}/>
    </div>
  );
}



export default SecondSection;