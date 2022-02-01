import Item from "./Item";


const list = [
  {
    img: require('./../../img/pc1.jpg'),
    name: 'Millenium Machine 1 Mini Soraka',
    url:'https://www.pccomponentes.com/millenium-machine-1-mini-soraka-amd-ryzen-5-5600x-16gb-1tb-480gb-ssd-rtx-3060ti',
    caract: 'AMD Ryzen 5 5600X/16GB/1TB+480GB SSD/RTX 3060Ti',
    price: 1600,
    points: 9,
    ObjectID: 0,
  },
  {
    img: require('./../../img/pc2.jpg'),
    name: 'PcCom Gold',
    url:'https://www.pccomponentes.com/pccom-gold-amd-ryzen-5-5600x-16gb-1tbssd-rtx3060ti',
    caract: 'AMD Ryzen 5 5600X/16GB/1TBSSD/RTX3060Ti',
    price: 1709,
    points: 9.64,
    ObjectID: 1,
  },
  {
    img: require('./../../img/pc3.jpg'),
    name: 'PcCom Bronze SP',
    url:'https://www.pccomponentes.com/pccom-bronze-sp-intel-core-i5-10400f-8gb-480gbssd-gtx1050ti-windows-10-home',
    caract: 'ntel Core i5-10400F/8GB/480GBSSD/GTX1050Ti',
    price: 791.56,
    points: 9.05,
    ObjectID: 2,
  },
  {
    img: require('./../../img/pc4.jpg'),
    name: 'PcVIP Crusher',
    url:'https://www.pccomponentes.com/pcvip-crusher-intel-core-i5-10400f-16gb-1tb-500gb-ssd-gtx1050ti',
    caract: 'Intel Core i5 10400F/16GB/1TB + 500GB SSD/GTX1050Ti',
    price: 820,
    points: 9,
    ObjectID: 3,
  },
  {
    img: require('./../../img/pc5.jpg'),
    name: 'PcCom Silver Ultra',
    url:'https://www.pccomponentes.com/pccom-silver-ultra-intel-core-i7-11700-16gb-1tb-500gb-ssd-rtx2060',
    caract: 'Intel Core i7-11700/16GB/1TB + 500GB SSD/RTX2060',
    price: 1442,
    points: 9.2,
    ObjectID: 4,
  },
  {
    img: require('./../../img/pc6.jpg'),
    name: 'Zone Evil Silver76',
    url:'https://www.pccomponentes.com/zone-evil-silver76-intel-core-i5-11400f-16gb-1tb-500gb-ssd-gtx-1650',
    caract: 'Intel Core i5-11400F/16GB/1TB+500GB SSD/GTX 1650',
    price: 1046,
    points: 9.38,
    ObjectID: 5,
  },
  {
    img: require('./../../img/pc7.jpg'),
    name: 'Legion-Q Tracker Lambda',
    url:'https://www.pccomponentes.com/legion-q-tracker-lambda-intel-core-i5-10400-16gb-1tb-250gb-ssd-gt-1030',
    caract: 'ntel Core i5-10400/16GB/1TB+250GB SSD/GT 1030',
    price: 689,
    points: 8.89,
    ObjectID: 6,
  }
];

function SecondSection() {
  return (
    <div className="second">
      <h2 className="second-title">Toda nuestra gama de productos</h2>

      <div className="second-products">
         {list.map(function (item){
           return(
             <div key={item.ObjectID} className="second-products__card">
               <Item item={item}/>
             </div>
           );
         })}
      </div>

      <div className="footer">

      </div>
    </div>
  );
}

export default SecondSection;