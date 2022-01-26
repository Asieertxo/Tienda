import mouse from "./../../img/mouse.png";


function FirstSection() {
  return (
    <div className="firstsection">
      <h2>Complete Gaming Solution</h2>

      <div className="card">
        <div className="card-one">




          <div className="card-one__image">
            <p>Peripherals</p>
            <div className="card-one__image_im">
              {/*<img src={mouse}></img>*/}
            </div>
            <div className="card-one__image_txt">
              <h4>Wolf Pack</h4>
              <span>Mira los perifericos que mejor se adaptan a ti</span>
              <a>View</a>
            </div>
          </div>







          <h4>Exceptional Peripherals</h4>
          <p>Los mejores perifericos gaming del momento para juegos de competicion, cuentan con los menores tiempos de respuesta del mercado y una ergonomia certificada. Enfrentate en nuestros torneos y vence.</p>
        </div>

        <div className="card-one">
          <div className="card-one__image">
            <p></p>
          </div>

          <h4>Exceptional Peripherals</h4>
          <p>Los mejores perifericos gaming del momento para juegos de competicion, cuentan con los menores tiempos de respuesta del mercado y una ergonomia certificada. Enfrentate en nuestros torneos y vence.</p>
        </div>

        <div className="card-one">
          <div className="card-one__image">
            <p></p>
          </div>

          <h4>Exceptional Peripherals</h4>
          <p>Los mejores perifericos gaming del momento para juegos de competicion, cuentan con los menores tiempos de respuesta del mercado y una ergonomia certificada. Enfrentate en nuestros torneos y vence.</p>
        </div>

      </div>
    </div>
  );
}

export default FirstSection;