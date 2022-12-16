import React from 'react'
import {Routes,Route} from 'react-router-dom';
import { Inicio } from './Inicio';
import { ProductosLista } from './productos/index';
import { ProductoDetalles } from './productos/ProductoDetalles';


export const Paginas = () => {
  return (
      <Routes>
        <Route path="/" exact component={Inicio} />
        <Route exact path='/productos' element={<ProductosLista />} />
        <Route exact path='/producto/:id' element={<ProductoDetalles />} />
      </Routes>
  )
}
