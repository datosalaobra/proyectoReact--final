import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
import { useState } from 'react'

//Importamos CarritoContext: 
import { CarritoContext } from '../../context/CarritoContext'
//Importo el Hook useContext:
import { useContext } from 'react'

const ItemDetail = ({ id, nombre, precio, img, stock, descripcion }) => {
    // Creamos un estado con la cantidad de productos agregados
    const [agregarCantidad, setAgregarCantidad] = useState(0);

    // useContext
    const {agregarProducto} = useContext(CarritoContext);

    // Creamos una función que administre la cantidad
    const handlerOnAdd =(cantidad)=>{
        setAgregarCantidad(cantidad);

    //Ahora acá creo un objeto con el item y la cantidad: 
    const item = {id, nombre, precio};
    agregarProducto(item, cantidad);
        
    }
return (
    <div className='contenedorItem'>
        <div className='contenedorDetail'>
        <h2 className='nombreDetail'>{nombre}</h2>
        <img className='imgDetails' src={img} alt={nombre} />
        <h3 className='precioDetail'>PRECIO: ${precio}</h3>
        {
            // Aplicamos la lógica para el montaje y desmontaje de componentes
            agregarCantidad > 0 ? (<Link to="/cart" className='outCompra'> Terminar compra </Link>) : (<ItemCount inicial={1} stock={stock} funcionAgregar={handlerOnAdd} />)
        }
        <h3 className='idDetail'>ID: {id}</h3>
        <p className='descripcion'>{descripcion}</p>
        </div>
    </div>
)
}

export default ItemDetail
