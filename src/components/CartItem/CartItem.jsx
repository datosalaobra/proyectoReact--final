const CartItem = ({item, cantidad}) => {
    return (
    <div>
        <h4> {item.nombre} </h4>
        <p>Cantidad: {cantidad} </p>
        <p>Precio: $ {item.precio} </p>
    </div>
    )
}

export default CartItem