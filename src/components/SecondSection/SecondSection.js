import Item from "./Item";


const list = [
  {
    img : './../../img/pc1.jpg',
    name : 'PC1',
    url:'https://reactjs.org/',
    caract: 'Jordan Walke',
    price: 647,
    points: 4,
    ObjectID: 0,
  },
  {
    img : 'pc2',
    name : 'PC2',
    url:'https://reactjs.org/',
    caract: 'Jordan Walke',
    price: 647,
    points: 4,
    ObjectID: 1,
  },
  {
    img : 'pc3',
    name : 'PC3',
    url:'https://reactjs.org/',
    caract: 'Jordan Walke',
    price: 647,
    points: 4,
    ObjectID: 2,
  },
  {
    img : 'pc4',
    name : 'PC4',
    url:'https://reactjs.org/',
    caract: 'Jordan Walke',
    price: 647,
    points: 4,
    ObjectID: 3,
  },
  {
    img : 'pc5',
    name : 'PC5',
    url:'https://reactjs.org/',
    caract: 'Jordan Walke',
    price: 647,
    points: 4,
    ObjectID: 4,
  }
];

function SecondSection() {
  return (
    <div className="secondsection">
      <h2>Toda nuestra gama de productos</h2>

      <ul>
         {list.map(function (item){
           return(
             <li key={item.ObjectID}>
               <Item item={item}/>
             </li>
           );
         })}
      </ul>

      <div className="footer">

      </div>
    </div>
  );
}

export default SecondSection;