//import { getUnProducto } from "../../asyncmock";
import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

//importamos las nuevas funciones: 
import { db } from "../../services/firebase/config";
import {getDoc, doc} from "firebase/firestore";


const ItemDetailContainer = () => {
    const [producto, setProducto] = useState(null);

    const {idItem} = useParams();

    useEffect( ()=> {
        const nuevoDoc = doc(db, "productos", idItem);

        getDoc(nuevoDoc)
            .then(res => {
                const data = res.data(); 
                const nuevoProducto = {id: res.id, ...data}
                setProducto(nuevoProducto);
            })
            .catch( error => console.log(error))

    }, [idItem])


    return (
        <div>
            <ItemDetail {...producto} />
        </div>
    )
}

export default ItemDetailContainer
