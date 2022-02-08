const CartItem = (props) => {
    return(
        <div>
            <p href={props.item.url}>{props.item.name}</p>
        </div>
    );
};

export default CartItem;