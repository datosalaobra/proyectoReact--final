import './Cart.css';
import { Link } from "react-router-dom"
import { useContext } from "react"
import { CarritoContext } from "../../context/CarritoContext"
import CartItem from "../CartItem/CartItem"

const Cart = () => {
    const {carrito, vaciarCarrito} = useContext(CarritoContext);

    //Calculamos la cantidad total de productos en el carrito. 
    const totalCantidad = carrito.reduce((total, producto) => total + producto.cantidad, 0);

    //Calculamos el precio total de los productos en el carrito.
    const total = carrito.reduce((total, producto) => total + (producto.item.precio * producto.cantidad), 0);

    if(totalCantidad === 0) {
        return (
            <div className='contenedorSinProductos'>
            <div className='subcontenedorSinProductos'>
                <h2>No hay productos en el carrito </h2>
                <Link to='/' className='btnProductos'> Productos </Link>
            </div>
            </div>
        )
    }

    return (
        <div className='contenedorOutCompra'>
            <div className='subcontenedorOutCompra'>
            {carrito.map(producto => <CartItem key={producto.id} {...producto} />)}
            <h3>Total: ${total} </h3>
            <Link to='/checkout'className='btnOutCompra' > Finalizar Compra </Link>
            <button className='btnVaciarCarrito' onClick={() => vaciarCarrito()}> Vaciar Carrito </button>
            </div>
        </div>
    )
}

export default Cart