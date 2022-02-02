function Item(props){
    const item = props.item;

    return(
        <>
            <img className="second-products__card_imagen" src={item.img}></img>
            <span className="second-products__card_name">
                <a href={item.url}>{item.name}</a>
            </span>
            <span className="second-products__card_caract">{item.caract}</span>
            <span className="second-products__card_caract">{item.text}</span>
            <span className="second-products__card_price">{item.price}€</span>
            <span className="second-products__card_points">
                {item.points}
                {(() => {
                  switch (item.points) {
                    case 1:
                      return (
                        <div>&#9733;</div>
                      )
                    case 2:
                      return (
                        <div>&#9733;&#9733;</div>
                      )
                    case 3:
                      return (
                        <div>&#9733;&#9733;&#9733;</div>
                      )
                    case 4:
                      return (
                        <div>&#9733;&#9733;&#9733;&#9733;</div>
                      )
                    case 5:
                      return (
                        <div>&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                      )
                  }
                })()}
            </span>
        </>
    )
}

export default Item;