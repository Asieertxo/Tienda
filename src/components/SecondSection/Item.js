import pc1 from './../../img/pc1.jpg';

function Item(props){
    const item = props.item;

    return(
        <>
            <img href={item.img}></img>
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