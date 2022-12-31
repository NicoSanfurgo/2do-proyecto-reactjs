import React from 'react'
import { DataContext } from '../../context/Dataprovider'
import './CartFinish.css'
import {addDoc, collection,getFirestore} from 'firebase/firestore'

export const CartFinish = () => {

    const sendOrder = () =>{
        const order = {
            buyer:{
                name:'nico', phone:'21234', email:'nico@prueba.com'
            },
            items:[{
                name:'Remera dark souls',
                price:1400
            }],
            total:1400
        }

        const db = getFirestore();
        const ordersCollection = collection(db, "orders");
        addDoc(ordersCollection,order).then(({id})=> (id))
    };


  return (
    <div>
        <h1>Finalizar mi compra</h1>
        <div className='producto-buyer'>
            <div>
                <label>Nombre</label>
                <input type="text" />
            </div>
            <div>
                <label>Direccion</label>
                <input type="text" />
            </div>
            <div>
                <label>Telefono</label>
                <input type="text" />
            </div>
        </div>
        {DataContext.map((producto) => {
            return (
                <div className="product-compra">
                    <img src={producto.image} width={50} height={50} />
                    <p>{producto.title}</p>
                    <p>{producto.price}</p>
                </div>
            );
        })}
        <div>
            <button onClick={()=>sendOrder()}>Generar orden</button>
        </div>
    </div>
  )
}
