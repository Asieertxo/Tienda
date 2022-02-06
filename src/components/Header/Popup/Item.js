function Item(props){
    const item = props.item;

    return(
        <>
          <img className="popup-products__card_image" src={item.img}></img>
          <div className="popup-products__card_text">
            <a href={item.url}>{item.name}</a>
            <span className="caract">{item.caract}</span>
            <span className="caract">{item.text}</span>
          </div>
          <span className="popup-products__card_price">{item.price}€</span>

        </>
    )
}

export default Item;