# Bienvenido a mi proyecto de ReactJs!

En este proyecto se verá reflejado un **ecommerce** con lo aprendido en las clases de **CoderHouse**.
**Primero** 
Indicare los componentes que tiene mi proyecto e información de algunos códigos.
## Carpetas
Procedo hacer **3 carpetas principales** en las cuales estarán documentadas por código todo lo importante y relevante para la página que estamos diseñando.

 1. **Components**
 Creamos una carpeta **components** para organizar el contenido con otras carpetas de las cuales encontraremos:
 **Carrito**; Donde crearemos la funcion completa de un carrito de compras.
 **Figuras**;Donde ubicaremos la seccion de nuestros productos de categoria "Figuras".
 **Header**; Crearemos la navegacion por la pagina.
 **Productos**; Crearemos un *index* donde sera el punto principal para ver nuestros productos en base a un *.map*. Crearemos un *ProductoItem* para organizar la vista de nuestro producto. *ProductoDetalles* Donde organizaremos la vista para los detalles de el producto seleccionado por el cliente.
 **Remeras** Donde ubicaremos la seccion de nuestros productos de categoria "Remeras".
 *En la misma carpeta components* crearemos un archivo llamado **Paginas** en la cual estableceremos las rutas de navegación por la página.
 
 2. **Context**
 La carpeta *context* contara con *dos archivos* **Data.js** y **Dataprovider.js** 
 En el archivo **Data.js** Es donde introduciremos la información de todos nuestros productos, le pondremos un *id*, un *title* a nuestro producto el nombre, *price* el precio del mismo, *image* una imagen del producto, *category* le pondremos una categoría para poder hacer el filtrado de la página, *detalle* pondremos información sobre el producto y le pondremos una *cantidad*, cantidad en este caso lo dejaremos en **1** para que no se nos complique tanto, por decirlo de alguna manera, nuestro carrito a la hora de hacer sumas, restar, total y añadir y sacar productos.
 Ej: 
> {id: 1,
> title:'Remera Diseño Dark Souls',
> price: 1300,
> image: remera1,
> category: 1,
> detalle:"Remera con diseño de Dark Souls. Diseño: Liso. Medidas disponibles: S, L, XL",
> cantidad: 1,
> }

 
 3. **Images**
 En esta carpeta como su nombre lo dice, es donde ubicaremos todas nuestras **imágenes** que usaremos en el transcurso del proyecto, pondremos las imágenes de nuestros **productos** en este caso de figuras y remeras de videojuegos. También podemos incorporar algún logo para nuestra página.

## Archivos
En el archivo de **App.js** haremos *import* a funciones creadas anteriormente que ya mencionaremos y terminaremos de hacer lo que sería el **Navbar**
Llamando al *Header, carrito y paginas* todo esto con *router* de por medio.

    function  App() {
    return (
    <DataProvider>
    <div  className="App">
    <Router>
    <Header  />
    <Carrito  />
    <Paginas  />
    </Router>
    </div>
    </DataProvider>
    );
    }

Usaremos el **index.css** que viene cuando creamos un archivo react para darle el estilo a todo nuestro proyecto.
Le daremos estilo a toda la **pagina**, al **header**, a algunos **letras**, a nuestros **productos**, al **carrito**, los **botones**. 	A este mismo si quisiéramos más adelante le podríamos añadir *mediaqueries* y hacer una página que sea responsive.

## Firebase
*Momento de introducir firebase a nuestro proyecto*

 - Crearemos o iniciaremos nuestra cuenta en firebase de Google.
 - Crearemos un nuevo proyecto con el nombre de nuestro proyecto, en este caso se llamara "Coder-Eccomerce-Proyect"
 - Si bien el mismo firebase viene con diferentes planes de uso, en este caso usaremos el plan gratis
 - Nos vamos a la seccion de *firestore Database* en donde llenaremos la informacion basica que nos pide.
 - Crearemos una coleccion de **items** 
 - Agregaremos documentos con un id aleatorio y los campos los estaremos llenando con la informacion que teniamos en nuestro "Data.js"
 - Creamos un campo de *id, title, price, image, category, detalle, cantidad* el "tipo" lo dejaremos en *string* al momento de valores escritos y lo cambiaremos al tipo *number* cuando insertemos numeros como el *id, price, category y cantidad*
 - En *Valor* lo llenares con la informacion que tenemos guardada sobre nuestros productos.
 - **Estos pasos se suelen repetir casi iguales si quieres crear una coleccion de ordenes o categorias que tambien sirven bastante**
 
 ##Codigo Firebase
 En mi caso usare el *firebase* para que me muestre los productos por pantalla recopilando lo guardado en nuestro proyecto.
 
Antes de usar la información brindada en nuestros proyectos de firebase, tenemos que instalar lo que nos ofrece el firebase con un **npm install firebase**
Una vez instalado en nuestro "index.js" copiaremos la informacion que se nos brinda al momento de crear el proyecto. 
En mi caso seria;
`const  firebaseConfig  = {
apiKey: "AIzaSyBqI9yVGgKRHiGON097nbPg3F17X5l6sy8",
authDomain: "coder-eccomerce-proyect.firebaseapp.com",
projectId: "coder-eccomerce-proyect",
storageBucket: "coder-eccomerce-proyect.appspot.com",
messagingSenderId: "1028875631441",
appId: "1:1028875631441:web:f30f1c220dbee5b5a37170",
measurementId: "G-B3FXXH4RXJ"
};`

Lo inicializamos con un; `initializeApp(firebaseConfig);`

Ahora nos vamos a nuestro "Dataprovider.js" dentro de context. Importamos lo que usaremos de firebase; `import {collection, doc, getDocs, getFirestore} from  'firebase/firestore';`

Pasaremos a hacer uso del **useEffect**
El código nos quedaría de la siguiente manera; 
`useEffect(()=>{
const  db  =  getFirestore();
const  itemRef  =  collection(db,"item")
getDocs(itemRef).then((result) =>{
setProductos(result.docs.map((doc)=>({id:doc.id,...doc.data()})))
})
},[])`

Lo que estamos haciendo acá es declarar la constante "db" con el "getFirestore" - y al "itemRef" como la colección con "collection(db,"item").
**El "item" hace llamado a la coleccion que tenemos en firebase**
Con "setProductos" estaremos haciendo un llamado a los productos que tenemos en nuestro firebase en la coleccion de items, le haremos un recorrido con un **.map** y lo desestructuraremos. Seria; `setProductos(result.docs.map((doc)=>({id:doc.id,...doc.data()})))`

Ya con esto podriamos ver nuestros productos que creamos en el firebase manualmente en nuestra pagina.
Iniciamos con un **npm start** nuestro proyecto en un localhost:3000. Si todo ha salido como lo planeamos tendríamos que ver todos nuestros productos y hasta acceder a los detalles de cada uno con el botón de "vista".


**Ahí estaría en resumidas palabras mi proyecto de ecommerce, explicando archivos, carpetas y códigos importantes.**
