import React from "react";
import { Header } from "./components/header";
import 'boxicons';
import { BrowserRouter as Router } from "react-router-dom";
import {Paginas} from "./components/Paginas";
import { DataProvider } from "./context/Dataprovider"
import {Carrito} from "./components/Carrito/Index"


function App() {
  return (
    <DataProvider>
    <div className="App">
      <Router>
      <Header />
      <Carrito />
      <Paginas />
      </Router>
    </div>
    </DataProvider>
  );
}

export default App;
