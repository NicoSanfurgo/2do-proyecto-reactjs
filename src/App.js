import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  getFirestore,
} from "firebase/firestore";
import { Header } from "./components/Navbar/Navbar";
import 'boxicons';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { DataProvider } from "./Context/Dataprovider"
import {Carrito} from "./components/Cart/Index"
import { Item } from './components/Item/Item';
import { ProductosDetalles } from './components/ItemDetail/ProductosDetalles';
import { CartFinish } from './components/CartFinish/CartFinish';
import menus from "./Mock";
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function Paginas() {
  const [categorias, setCategorias] = useState([]);
  useEffect(() => {
    const db = getFirestore();

    const categoryCollection = collection(db, "categorias");

    getDocs(categoryCollection).then((result) => {
      if (result.size === 0) {
        console.log("no retorna nada");
      }
      setCategorias(result.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      console.log(categorias);
    });
  }, []);


  return (
    <DataProvider>
    <div className="App">
      <BrowserRouter>
      <Header menus={menus} categorias={categorias} />
        <Routes>
          <Route exact path='/' element={<Item />} />
          <Route exact path='/productos' element={<Item />} />
          <Route exact path='/producto/:id' element={<ProductosDetalles />} />
          <Route exact path='/category/:id' element={<ItemListContainer />} />
          <Route exact path='/cart' element={<CartFinish />} />
        </Routes>
      </BrowserRouter>
      <Carrito />
    </div>
    </DataProvider>
  )
}
export default Paginas;