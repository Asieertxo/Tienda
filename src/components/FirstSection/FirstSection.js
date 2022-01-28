import mouse from "./../../img/mouse.png";
import pcfront from "./../../img/pc-frontal.jpg";
import pcside from "./../../img/pc-lado.jpg";


function FirstSection() {
  return (
    <div className="firstsection">
      <h2>Complete Gaming Solution</h2>


      <div className="cards">
        <div className="cards-one">

          <div className="cards-one__image">
            <p>Peripherals</p>
            <div className="cards-one__image_im">
              <img src={mouse}></img>
            </div>
            <div className="cards-one__image_txt">
              <h4>Wolf Pack</h4>
              <span>Mira los perifericos que mejor se adaptan a ti</span>
              <a href="#">View &#8594;</a>
            </div>
          </div>

          <h4>Exceptional Peripherals</h4>
          <p>Los mejores perifericos gaming del momento para juegos de competicion, cuentan con los menores tiempos de respuesta del mercado y una ergonomia certificada. Enfrentate en nuestros torneos y vence.</p>
        </div>


        <div className="cards-two">
          <div className="cards-two__image">
            <div className="cards-two__image_side">
              <img src={pcside}></img>
            </div>
            <div className="cards-two__image_front">
              <img src={pcfront}></img>
            </div>
          </div>

          <h4>Exceptional Peripherals</h4>
          <p>Los mejores perifericos gaming del momento para juegos de competicion, cuentan con los menores tiempos de respuesta del mercado y una ergonomia certificada. Enfrentate en nuestros torneos y vence.</p>
        </div>


        <div className="cards-one">
          <div className="cards-one__image">
            <p></p>
          </div>

          <h4>Exceptional Peripherals</h4>
          <p>Los mejores perifericos gaming del momento para juegos de competicion, cuentan con los menores tiempos de respuesta del mercado y una ergonomia certificada. Enfrentate en nuestros torneos y vence.</p>
        </div>

      </div>


      <a href="#" className="button">View all the Products</a>
    </div>
  );
}

export default FirstSection;