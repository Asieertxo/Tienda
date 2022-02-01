
function Item(props){
    const item = props.item;

    return(
        <>
            <img className="imagen" src={item.img}></img>
            <span>
                <a href={item.url}>{item.name}</a>
            </span>
            <span>{item.caract}</span>
            <span>{item.price}</span>
            <span>{item.points}</span>
        </>
    )
}

export default Item;