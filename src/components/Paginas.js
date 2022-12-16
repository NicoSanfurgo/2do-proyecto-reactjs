import React from 'react'
import {Routes,Route} from 'react-router-dom';
import { Inicio } from './Inicio';
import { ProductosLista } from './productos/index';
import { ProductosDetalles } from './productos/ProductosDetalles';


export const Paginas = () => {
  return (
      <Routes>
        <Route path="/" exact component={Inicio} />
        <Route exact path='/productos' element={<ProductosLista />} />
        <Route exact path='/producto/:id' element={<ProductosDetalles />} />
      </Routes>
  )
}
