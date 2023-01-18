import { Data } from "../../Mock";
import "./CartFinish.css";
import { addDoc, collection, doc, getFirestore, updateDoc, writeBatch } from "firebase/firestore";

const CartFinish = () => {
    const order = {
        buyer: {
          name: "pablo",
          phone: "2222",
          email: "prueba@coder.com",
        },
        items: [
          {
            name: "bicicleta",
            price: 2000,
          },
        ],
        total: 250,
      };
  const sendOrder = () => {
    const db = getFirestore();
    const ordersCollection = collection(db, "orders");
    addDoc(ordersCollection,order).then(({id})=> alert(id))
  };

  const updateOrder = () =>{
    const db = getFirestore()
    const orderDoc = doc(db,"orders","m68KF0gcgTerw0E5EXQV");
    updateDoc(orderDoc,{buyer:{email:"prueba2",name:'roberto',phone:"5555",},total:2500}).then(res => alert("se actualizo amigo"));
  }

  const batchOrder = () =>{
    const db = getFirestore();
    const batch =writeBatch(db);
    const doc1 = doc(db,"orders","m68KF0gcgTerw0E5EXQV");
    const doc2 = doc(db,"orders","ZEgCOBy2cdSGPcHszWmY");

    batch.update(doc1,{total:450})
    batch.set(doc2,order)


    batch.commit().then(res=>alert("todo batch"));
  }

  return (
    <div>
      <h1>Finaliza tu compra</h1>
      <div className="producto-buyer">
        <div>
          <label>Nombre</label>
          <input type="text" />
        </div>
        <div>
          <label>dirección</label>
          <input type="text" />
        </div>
        <div>
          <label>Numero telefonico</label>
          <input type="text" />
        </div>
      </div>
      {Data.map((producto) => {
        return (
          <div className="product-compra">
            <img src={producto.img} width={50} height={50} alt="img" />
            <p>{producto.name}</p>
            <p>{producto.price}</p>
          </div>
        );
      })}
      <div>
        <button onClick={()=>sendOrder()}>Generar order</button>
      </div>
      <div>
        <button onClick={()=>updateOrder()}>Actualizar order</button>
      </div>
      <div>
        <button onClick={()=>batchOrder()}>Batch order</button>
      </div>
    </div>
  );
};

export default CartFinish;
