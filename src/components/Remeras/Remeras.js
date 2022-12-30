import React, {useContext} from 'react'
import { DataContext } from '../../context/Dataprovider'
import { ProductoItem } from '../productos/ProductoItem'
import { categorias } from '../../context/Data'

export const Remeras = () => {
  const value = useContext(DataContext)
  const [productos] = value.productos



  return (
    <>
        <h1 className='title'>REMERAS</h1>
        <div className='productos'>
          {
            productos.map((producto) => (
              <ProductoItem 
              key={producto.id} 
              title={producto.title}
              price={producto.price}
              image={producto.image}
              detalle={producto.detalle}
              cantidad={producto.cantidad}
              id={producto.id}
              />
            ))
          }
        </div>
    </>
  )
}
