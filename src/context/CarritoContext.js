//1) Voy a importar el hook useState y createContext que me permite crear un contexto que va a almacenar toda la lógica de mi carrillo de compras. 

import { useState, createContext } from "react";

//2) Creamos un nuevo contexto. 
//El valor inicial por default es un objeto con la propiedad "carrito" con un array vacío. 

export const CarritoContext = createContext({carrito:[]});

//3) Creamos un componente llamado "CarritoProvider". 
//También lo pueden encontrar como "proveedor de contextos". 

export const CarritoProvider = ({children}) => {
    //4)Creamos un estado local "carrito" con el hook useState.

    const [carrito, setCarrito] = useState([]);

    //Verificamos por consola: 
    console.log(carrito);

    //5) Agregamos algunos métodos al proveedor de contexto para manipular el carrito de compras: 

    //Función agregar al carrito: 

    const agregarProducto = (item, cantidad) => {
        if(!yaEstaEnCarrito(item.id)) {
            setCarrito(prev => [...prev, {item, cantidad}]);
            /*
            La sintaxis: prev => [...prev, {item, cantidad}]
            se utiliza para crear un nuevo array a partir del estado anterior del carrito (prev) y agregar un nuevo objeto que representa el nuevo producto. 
            */
        } else {
            console.log("Producto ya agregado");
        }
    }

    //Función para eliminar productos del carrito: 

    const eliminarProducto = (id)  => {
        const carritoActualizado = carrito.filter( prod => prod.id !== id);
        setCarrito(carritoActualizado);
    }

    //Función para vaciar el carrito de compras: 

    const vaciarCarrito = () => {
        setCarrito([]);
    }

    //Función auxiliar para verificar si ya esta el producto en el carrito: 

    const yaEstaEnCarrito = (id) => {
        return carrito.some(prod => prod.id === id);
    }

    //6) Usamos el componente CarritoContext.Provider para enviar el valor actual del carrito y los métodos a los componentes de mi aplicación que lo necesiten. 

    return (
        <CarritoContext.Provider value={{carrito, agregarProducto, eliminarProducto, vaciarCarrito}} >
            {children}
        </CarritoContext.Provider>
    )

    //7) Children: propiedad especial que se utiliza para representar a todos aquellos componentes que puedan necesitar el carrito y sus métodos. 

}