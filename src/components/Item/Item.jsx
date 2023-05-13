import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({id,nombre, img}) => {
return (
    <div className='cardProducto'>
    <img className='imgProducto' src={img} alt={nombre} />
    <h3>{nombre}</h3>
    <Link to={`/item/${id}`} className='btnProducto'>Ver detalle</Link>
    </div>
)
}

export default Item
