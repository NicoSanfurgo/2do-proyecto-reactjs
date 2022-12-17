import React, {useContext, useEffect, useState} from 'react'
import { DataContext } from "../../context/Dataprovider";
import { useParams } from "react-router-dom";
import { ProductoItem } from "./ProductoItem";

export const ProductosDetalles = () => {
  const value = useContext(DataContext);
  const [productos] = value.productos;
  const addCarrito = value.addCarrito;
  const [detalle, setDetalle] = useState([])
  const [url, setUrl]= useState(0)
  const [images, setImages] = useState('')
  const params = useParams();
  let item = 0;

  useEffect(() =>{
    console.log('re render' , params.id)
    item=0;
    productos.forEach(producto =>{
      if(producto.id === parseInt(params.id)){
        setDetalle(producto)
        setUrl(0)
      }
    })
  },[params.id, productos])


  return (
    <>
    {
        <div className="detalles">
          <h2>{detalle.title}</h2>
          <img src={detalle.image} />
          <p className="price">${detalle.price}</p>
          <button onClick={() => addCarrito(detalle.id)}>
            Añadir al carrito
          </button>
          
          
          <div className="description">
          <p><b>description: </b> {detalle.detalle} </p>
          </div>
        </div>
    }
    </>
  )
}
