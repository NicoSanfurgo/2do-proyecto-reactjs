import remera1 from '../images/Remeras/DarkSouls1.jpg'
import remera2 from '../images/Remeras/Doom1.jpg'
import remera3 from '../images/Remeras/gow1.webp'
import remera4 from '../images/Remeras/DragonBall1.jpg'
import remera5 from '../images/Remeras/mk1.webp'
import remera6 from '../images/Remeras/Stalker1.webp'

import figura1 from '../images/Figuras/Baldur1.jpg'
import figura2 from '../images/Figuras/CaballeroFaraam1.webp'
import figura3 from '../images/Figuras/Sekiro1.webp'
import figura4 from '../images/Figuras/Enfermera1.jpg'
import figura5 from '../images/Figuras/PyramidHead1.jpg'
import figura6 from '../images/Figuras/Heather1.jpg'



export  const Categorias = [
    {
      name:'REMERAS',
      id:1,
      category:"Remeras",
    },
    {
      name:'FIGURAS',
      id:2,
      category:"Figuras",
    }
  ]

const data = {
    status: "success",
    items: [
        {
            id: 1,
            title:'Remera Diseño Dark Souls',
            price: 1300,
            image: remera1,
            category: 1,
            detalle:"Remera con diseño de Dark Souls. Diseño: Liso. Medidas disponibles: S, L, XL",
            cantidad: 1,
        },
        {
            id: 2,
            title:'Figura De Baldur',
            price: 2300,
            image: figura1,
            category: 2,
            detalle:"Material:Pvc . Altura:65cm . Ancho:47cm .",
            cantidad: 1,
        },
        {
            id: 3,
            title:'Remera Diseño DOOM',
            price: 1300,
            image: remera2,
            category: 1,
            detalle:"Remera con diseño de DOOM. Diseño: Liso. Medidas disponibles: S, L, XL",
            cantidad: 1,
        },
        {
            id: 4,
            title:'Figura De Caballero Faraam',
            price: 2300,
            image: figura2,
            category: 2,
            detalle:"Material:Pvc . Altura:55cm . Ancho:32cm .",
            cantidad: 1,
        },
        {
            id: 5,
            title:'Remera Diseño GoW',
            price: 1300,
            image: remera3,
            category: 1,
            detalle:"Remera con diseño de Gow Of War. Diseño: Liso. Medidas disponibles: S, L, XL",
            cantidad: 1,
        },
        {
            id: 6,
            title:'Figura De Sekiro',
            price: 2300,
            image: figura3,
            category: 2,
            detalle:"Material:Pvc . Altura:48cm . Ancho:36cm .",
            cantidad: 1,
        },
        {
            id: 7,
            title:'Remera Dragon Ball',
            price: 1300,
            image: remera4,
            category: 1,
            detalle:"Remera con diseño de Dragon Ball. Diseño: Liso. Medidas disponibles: S, L, XL",
            cantidad: 1,
        },
        {
            id: 8,
            title:'Figura Enfermera',
            price: 2300,
            image: figura4,
            category: 2,
            detalle:"Material:Pvc . Altura:22cm . Ancho:13cm .",
            cantidad: 1,
        },
        {
            id: 9,
            title:'Remera Mortal Kombat',
            price: 1300,
            image: remera5,
            category: 1,
            detalle:"Remera con diseño de Mortal Kombat. Diseño: Liso. Medidas disponibles: S, L, XL",
            cantidad: 1,
        },
        {
            id: 10,
            title:'Figura Pyramid Head',
            price: 2300,
            image: figura5,
            category: 2,
            detalle:"Material:Pvc . Altura:28cm . Ancho:15cm .",
            cantidad: 1,
        },
        {
            id: 11,
            title:'Remera S.T.A.L.K.E.R.',
            price: 1300,
            image: remera6,
            category: 1,
            detalle:"Remera con diseño de S.T.A.L.K.E.R. Diseño: Liso. Medidas disponibles: S, L, XL",
            cantidad: 1,
        },
        {
            id: 12,
            title:'Figura Heather',
            price: 2300,
            image: figura6,
            category: 2,
            detalle:"Material:Pvc . Altura:21cm . Ancho:11cm .",
            cantidad: 1,
        },
    ]
};

export default data;