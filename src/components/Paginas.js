import React from 'react'
import {Routes,Route} from 'react-router-dom';
import { ProductosLista } from './productos/index';
import { ProductosDetalles } from './productos/ProductosDetalles';
import { Remeras } from './Remeras/Remeras';
import { Figuras } from './Figuras/Figuras';

export const Paginas = () => {
  return (
      <Routes>
        <Route exact path='/' element={<ProductosLista />} />
        <Route exact path='/productos' element={<ProductosLista />} />
        <Route exact path='/producto/:id' element={<ProductosDetalles />} />
        <Route exact path='/remeras' element={<Remeras />} />
        <Route exact path='/figuras' element={<Figuras />} />
      </Routes>
  )
}
