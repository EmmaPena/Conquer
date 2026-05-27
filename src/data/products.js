const products = [
    {
        id: 1,
        name: "PRIME EDITION",
        category: "Playeras",
        description: "Sudadera con gorro sin cierre, la primera edicion, cuenta con tela suave y afelpada interna (50%) para comodidad, a pesar que es color negra  lograr todo lo que deseas, mantiene el cuerpo fresco y comoda sin importar el clima.  corte oversized exacto, Cuello con capucha ajustable y manga larga. Bolsillo frontal tipo canguro, cuenta con un bordado enfrente de la marca y estampado en la espalda, parte inferior derecha. estampado- inspirado classic.",
        code: "ab1201-326",
        color: "negro",
        price: "$599",
        images: [
            "/images/prime/prime_1.jpg",
            "/images/prime/prime_2.jpg",
            "/images/prime/prime_3.jpg"
        ]
    },

    {
        id: 2,
        name: "RAMON DINO",
        category: "Playeras",
        description: "Sudadera con gorro sin cierre, El tejido de alta densidad se siente supersuave por dentro, aunque no es muy afelpado, pero su tecnologia logra mantenerte fresco mientras este en uso para clima caluroso o en un lugar frio, el ajuste cómodo y relajado te hará lograr todo lo que deseas,  corte oversized exacto, Cuello con capucha ajustable y manga larga. Bolsillo frontal tipo canguro, cuenta con un bordado enfrente de la marca y estampado perfecto en la parte trasera para mantener tu motivacion a donde vayas, asciendo notar tus espectativas y metas claras.",
        code: "AT9704-152",
        color: "NEGRO / GASPE",
        price: "$599",
        images: [
            "/images/ramon/ramon.jpg",
            "/images/ramon/ramon_2.jpg"
        ]
    },

    {
        id: 3,
        name: "FRANK ZANE",
        category: "Sudaderas",
        description: "Sudadera con gorro sin cierre, El tejido de alta densidad suave por dentro, aunque no es muy afelpado, pero su tecnologia logra mantenerte fresco mientras este en uso. corte oversized, Cuello con capucha ajustable y manga larga, Bolsillo frontal tipo canguro, cuenta con bordado de la marca  en la parte frontal.\n Estampado- inspirado classic en la espalda.",
        code: "at3702-027",
        color: "gris / gaspe",
        price: "$599",
        images: [
            "/images/ramon/ramon_1.jpg",
            "/images/frank/frank_2.jpg",
            "/images/frank/frank_3.jpg"
        ]
    },
    {
        id: 0,
        name: "MR. OLYMPIA",
        category: "Playeras",
        description: "",
        code: "",
        color: "",
        price: "$800",
        images: [
            "/images/olympia/olympia_1.jpg",
            "/images/olympia/olympia_2.jpg",
        ]
    },

    /*{
        id: 4,
        name: "",
        category: "Sudaderas",
        description: "",
        code: "",
        color: "",
        price: "$599",
        images: [
            "/images/",
        ]
    },*/

    {
        id: 4,
        name: "ED-CORNEY",
        category: "Playeras",
        description: "Sudadera con gorro sin cierre, El tejido de alta densidad y suave por dentro, permite que el exterior no afecte, su TECNOLOGÍA logra mantenerte fresco mientras ESTÉ en uso. corte oversized, Cuello con capucha ajustable y manga larga, Bolsillo frontal tipo canguro, cuenta con bordado de la marca  en la parte frontal. Estampado- inspirado classic en la espalda.",
        code: "at6ed3-170",
        color: "gris / gaspe",
        price: "$599",
        images: [
            "/images/corney/ed_1.jpg",
            "/images/corney/ed_2.jpg",
            "/images/corney/ed_3.jpg",
        ]
    },

    {
        id: 5,
        name: "SAMIR",
        category: "Sudaderas",
        description: "Sudadera con gorro sin cierre, El tejido de alta densidad suave por dentro, aunque no es muy afelpado, pero su tecnologia logra mantenerte fresco mientras este en uso. corte oversized, Cuello con capucha ajustable y manga larga, estampado de la partde trasera, Bolsillo frontal tipo canguro, cuenta con bordado de la marca  en la parte frontal.",
        code: "at3276-302",
        color: "verde / BOSQUE",
        price: "$599",
        images: [
            "/images/samir/samir_2.jpg",
            "/images/samir/samir_3.jpg",
            "/images/samir/samir_1.jpg"
        ]
    },

    {
        id: 6,
        name: "CENTAURO",
        category: "Sudaderas",
        description: "Sudadera con gorro sin cierre, El tejido de alta densidad suave por dentro, aunque no es muy afelpado, pero su tecnologia logra mantenerte fresco mientras este en uso para clima caluroso o en un lugar frio, el ajuste cómodo y relajado corte oversized exacto, Cuello con capucha ajustable y manga larga, estampado cerca del ANTEBRAZO, Bolsillo frontal tipo canguro, cuenta con una frase  bordada en la espalda de color verde BOSQUE y negro. la parte frontal vino.",
        code: "ang1207-143",
        color: "ang1207-143",
        price: "$599",
        images: [
            "/images/centauro/centauro_1.jpg",
            "/images/centauro/centauro_2.jpg",
            "/images/centauro/centauro_3.jpg"
        ]
    },

    {
        id: 7,
        name: "MIKE MENTZER ",
        category: "Sudaderas",
        description: "Sudadera con gorro sin cierre, Conoce a tu nueva sudadera con gorro favorita. El tejido Fleece de alta densidad se siente supersuave por dentro pero su tecnologia logra mantenerte fresco mientras este en uso para clima caluroso o en un lugar frio, el ajuste cómodo y relajado te hará lograr todo lo que deseas,  corte oversized exacto, Cuello con capucha ajustable y manga larga. Bolsillo frontal tipo canguro, cuenta con un bordado enfrente y exclusivo en manga de la linea.  estampado- inspirado classic en la espalda.",
        code: "cr7338-010",
        color: "MARRON / VINADO",
        price: "$599",
        images: [
            "/images/mike/mike_1.jpg",
            "/images/mike/mike_2.jpg",
            "/images/mike/mike_3.jpg"
        ]
    },

    {
        id: 8,
        name: "CHRIS BUMSTEAD",
        category: "Sudaderas",
        description: "Sudadera con gorro sin cierre, Está confeccionada con un suave tejido Fleece que es terso en la parte exterior y tiene una sensación de suavidad en el interior para brindar calidez y comodidad, logra mantenerte fresco mientras este en uso para clima caluroso o en un lugar frio, el ajuste cómodo y relajado te hará lograr todo lo que deseas con capucha ajustable y manga larga. Bolsillo frontal tipo canguro, cuenta con un bordado frontal y exclusivo en manga de la linea. corte oversized. \n estampado- inspirado classic en la espalda.",
        code: "cr1821-023",
        color: "verde / bosque",
        price: "$599",
        images: [
            "/images/cbum/cbum_1.jpg",
            "/images/cbum/cbum_2.jpg",
            "/images/cbum/cbum_3.jpg"
        ]
    },


];

export default products;
