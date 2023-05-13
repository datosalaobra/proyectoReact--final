import './ItemCount.css';
import { useState } from "react"

const ItemCount = ({ inicial, stock, funcionAgregar }) => {
    const [contador, setContador] = useState(inicial);

    const incrementar = () => {
        if (contador < stock) {
            setContador(contador + 1);
        }
    }

    const decrementar = () => {
        if (contador > inicial) {
            setContador(contador - 1);
        }
    }
return (
    <>
    <div className="contenedorCount">
    <button className="btnDeCount" onClick={decrementar}>-</button>
    <strong className="strCount">{contador}</strong>
    <button className="btnInCount" onClick={incrementar}>+</button>
    </div>
    <button className='btnAgregar' onClick={() => funcionAgregar(contador)} >Agregar al Carrito</button>
    </>
)
}

export default ItemCount;
