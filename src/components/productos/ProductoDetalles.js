import React, {useContext, useState, useEffect} from 'react'
import {DataContext} from "../../context/Dataprovider"
import { useParams } from "react-router-dom"



export const ProductoDetalles = () => {
    const value = useContext(DataContext)
    const [productos] = value.productos;
    const [detalle, setDetalle] = useState([])
    const params = useParams();

    useEffect(() =>{
        productos.forEach(producto =>{
            if(producto.id === params.id){
            setDetalle(producto)
            }
        })
    }, [params.id, productos])

    

  return (
    <>
    {
        <div className='detalles'>
            <h2>{detalle.title}</h2>
            <p className='price'>${detalle.price} </p>
            <div>
                <img src={detalle.image} />
            </div>
        </div>
    }
    </>
  )
}
