import React, {useContext} from 'react'
import { DataContext } from '../../Context/Dataprovider'
import { ProductoItem } from '../ItemCount/ProductoItem'

export const Item = () => {
  const value = useContext(DataContext)
  const [productos] = value.productos



  return (
    <>
        <h1 className='title'>PRODUCTOS</h1>
        <div className='productos'>
          {
            productos.map(producto =>(
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
