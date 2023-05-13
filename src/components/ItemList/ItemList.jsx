import Item from "../Item/Item"
import './ItemList.css'

const ItemList = ({productos}) => {
return (
    <div className="contenedorProductos">
    {productos.map( prod => {
            return <Item key={prod.id}  {...prod} />
        })
    }
    </div>
)
}

export default ItemList
