import styled from "styled-components";
import Card from "./tools/Card";
import Modal from "./tools/Modal";
import { useState, useEffect } from "react";

const Container = styled.div`
 max-width: 1440px;
 padding: 40px 100px;
 @media (max-width: 768px) {
  padding: 20px;
 }
`;
const H1 = styled.h1`
 font-family: Bevan;
 font-size: 29px;
 font-weight: 400;
 line-height: 29px;
 letter-spacing: 0em;
 text-align: left;
 width: 230px;
 margin-top: 5px;
 margin-bottom: 55px;
 margin-left: 35px;
 @media (max-width: 768px) {
  margin: 130px auto 20px;
 }
`;
const ItemContainer = styled.div`
 display: flex;
 justify-content: center;
 flex-wrap: wrap;
 gap: 30px;
 padding: 7px;
`;

const BtnMore = styled.button`
 display: flex;
 justify-content: center;
 align-items: center;
 margin-top: 56px;
 width: 170px;
 height: 42px;
 border-radius: 6px;
 border: 1px solid #1b2845;
 font-family: Mukta;
 font-size: 16px;
 font-weight: 600;
 line-height: 27px;
 letter-spacing: 0em;
 margin: 56px auto 0;
`;

const ProductosDisponible = () => {
 const [count, setCount] = useState(0);
 const [pedidos, setPedidos] = useState([
  {
   "id": 1,
   "texto": "Gominolas Haribo Fini bolsas para llevar gran variedad de sabores",
   "foto":
    "https://img.mrvcdn.com/g/fb/kf/E28defc21e64a478781d0e283321c025bx.jpg",
   "precio": 1.1,
   "link":
    "https://www.awin1.com/cread.php?awinmid=37166&awinaffid=546231&clickref=i1356596438740314-s2070262925757786.html&ued=https://www.miravia.es/p/i1356596438740314-s2070262925757786.html",
   "fecha_alta": "2023-10-10 12:40:24",
   "fecha_baja": null
  },
  {
   "id": 2,
   "texto": "Nike - Cuidado del hombre - Ultra Blue Man Desodorante Roll On",
   "foto":
    "https://img.mrvcdn.com/g/fb/kf/E3b0d0475de94417d802be3a6dd8e0f4aN.jpg",
   "precio": 1.1,
   "link":
    "https://www.awin1.com/cread.php?awinmid=37166&awinaffid=546231&clickref=i1356596438740314-s2070262925757786.html&ued=https://www.miravia.es/p/i1355987398542172-s2068824764318556.html",
   "fecha_alta": "2023-10-10 12:40:24",
   "fecha_baja": null
  },
  {
   "id": 3,
   "texto":
    "Tulipán Negro - Cuidado personal - Kiss Fresa y Nata Gel de Baño y Ducha",
   "foto":
    "https://img.mrvcdn.com/g/fb/kf/Ec19acb6dd54e4d3d81aaa8903c6192ee9.jpg",
   "precio": 1.65,
   "link":
    "https://www.awin1.com/cread.php?awinmid=37166&awinaffid=546231&clickref=i1356596438740314-s2070262925757786.html&ued=https://www.miravia.es/p/i1355990352671907-s2068829503927459.html",
   "fecha_alta": "2023-10-10 12:40:24",
   "fecha_baja": null
  },
  {
   "id": 4,
   "texto":
    "Naturel Art Cosmetics - Cuidado personal - Gel de Baño y Ducha Sweet Candy",
   "foto":
    "https://img.mrvcdn.com/g/fb/kf/E25af93b63e04425486156b29be115982c.jpg",
   "precio": 1.1,
   "link":
    "https://www.awin1.com/cread.php?awinmid=37166&awinaffid=546231&clickref=i1356596438740314-s2070262925757786.html&ued=https://www.miravia.es/p/i1355984932299614-s2068820838450014.html",
   "fecha_alta": "2023-10-10 12:40:24",
   "fecha_baja": null
  },
  {
   "id": 5,
   "texto":
    "BLUEKAKA-Cable de carga súper rápida USB a tipo C, Cable de datos de 1,5 M/2M, 6A, 120W, para Huawei y Xiaomi",
   "foto":
    "https://img.mrvcdn.com/g/fb/kf/Sde61847fbb714b09b06b47abe676d801l.jpg",
   "precio": 1.5,
   "link":
    "https://www.awin1.com/cread.php?awinmid=37166&awinaffid=546231&clickref=i1356596438740314-s2070262925757786.html&ued=https://www.miravia.es/p/i1356448075176661-s2069901918964437.html",
   "fecha_alta": "2023-10-10 12:40:24",
   "fecha_baja": null
  },
  {
   "id": 6,
   "texto":
    "Barrita de Proteínas de HSN Evobars 60g | Snack Saludable | Rica en Proteínas + Baja en Calorías + Baja en Carbohidratos + Textura Crujiente + Sin Aceite de Palma",
   "foto":
    "https://img.mrvcdn.com/g/fb/kf/Ebd46fd7fa85b4839acfe4194e502a64f0.jpg",
   "precio": 1.65,
   "link":
    "https://www.awin1.com/cread.php?awinmid=37166&awinaffid=546231&clickref=i1356596438740314-s2070262925757786.html&ued=https://www.miravia.es/p/i1355883833271250-s2069158464291794.html",
   "fecha_alta": "2023-10-10 12:40:24",
   "fecha_baja": null
  },
  {
   "id": 7,
   "texto": "Fideos Instantáneos Meishida - Samyang, Nissin, Nongshim",
   "foto":
    "https://img.mrvcdn.com/g/fb/kf/E5ea84a4138af48d8bd6fb52de9cb2ce1I.png",
   "precio": 1.49,
   "link":
    "https://www.awin1.com/cread.php?awinmid=37166&awinaffid=546231&clickref=i1356596438740314-s2070262925757786.html&ued=https://www.miravia.es/p/i1356506966605331-s2070055224376851.html",
   "fecha_alta": "2023-10-10 12:40:24",
   "fecha_baja": null
  },
  {
   "id": 8,
   "texto":
    "Cable USB Original de carga rápida para iPhone, Cable de datos para cargador de teléfono, accesorios para iPad, 14, 13, 12 Pro Max, Mini, XR, XS",
   "foto":
    "https://img.mrvcdn.com/g/fb/kf/S03da51abf05f4584aefd282723c07be32.jpg",
   "precio": 1.83,
   "link":
    "https://www.awin1.com/cread.php?awinmid=37166&awinaffid=546231&clickref=i1356596438740314-s2070262925757786.html&ued=https://www.miravia.es/p/i1356225678396604.html",
   "fecha_alta": "2023-10-10 12:40:24",
   "fecha_baja": null
  },
  {
   "id": 9,
   "texto":
    "Vehículo de juguete para niños, mini modelo de coche de carreras, juguete de fricción a prueba de choques divertido, acrobacia para niños",
   "foto":
    "https://img.mrvcdn.com/g/fb/kf/E0b231f03d7ef40f8a60b20514141d6a7e.jpg",
   "precio": 1.99,
   "link":
    "https://www.awin1.com/cread.php?awinmid=37166&awinaffid=546231&clickref=i1356596438740314-s2070262925757786.html&ued=https://www.miravia.es/p/i1356594769069320.html",
   "fecha_alta": "2023-10-10 12:40:24",
   "fecha_baja": null
  },
  {
   "id": 10,
   "texto":
    "Juguete antiestrés emergente para niños y adultos, figuras divertidas de ratón y queso para apretar, ocultar y buscar, alivio del estrés",
   "foto":
    "https://img.mrvcdn.com/g/fb/kf/Eb33048cd89a2449d8e5bbaab38327ca26.jpg",
   "precio": 1.99,
   "link":
    "https://www.awin1.com/cread.php?awinmid=37166&awinaffid=546231&clickref=i1356596438740314-s2070262925757786.html&ued=https://www.miravia.es/p/i1356673519059680.html",
   "fecha_alta": "2023-10-10 12:40:24",
   "fecha_baja": null
  },
  {
   "id": 11,
   "texto":
    "Baberos impermeables para bebé, delantal de manga larga para alimentación de niños, ropa suave para eructar, Bandana",
   "foto":
    "https://img.mrvcdn.com/g/fb/kf/S06481be64e4e4659a625c85302b22d898.jpg",
   "precio": 1.51,
   "link":
    "https://www.awin1.com/cread.php?awinmid=37166&awinaffid=546231&clickref=i1356596438740314-s2070262925757786.html&ued=https://www.miravia.es/p/i1356239186566945.html",
   "fecha_alta": "2023-10-10 12:40:24",
   "fecha_baja": null
  },
  {
   "id": 12,
   "texto":
    "Delantal impermeable a prueba de aceite puede limpiar las manos ropa de trabajo de la cocina Limpieza de cocina para el hogar hombres y mujeres universal delantal sin mangas",
   "foto":
    "https://img.mrvcdn.com/g/fb/kf/E7c873f3ce6174252bb4c5a5390a16683Y.jpg",
   "precio": 1.99,
   "link":
    "https://www.awin1.com/cread.php?awinmid=37166&awinaffid=546231&clickref=i1356596438740314-s2070262925757786.html&ued=https://www.miravia.es/p/i1356487034998224.html",
   "fecha_alta": "2023-10-10 12:40:24",
   "fecha_baja": null
  },
  {
   "id": 13,
   "texto":
    "Calcetines antideslizantes de algodón para mujer, medias elásticas coloridas para Yoga, Fitness, Pilates, gimnasio, cinco dedos, gran oferta, Invierno",
   "foto":
    "https://img.mrvcdn.com/g/fb/kf/Se7eb0fdda3354d778ef28597ac9cb0fcV.jpg",
   "precio": 1.69,
   "link":
    "https://www.awin1.com/cread.php?awinmid=37166&awinaffid=546231&clickref=i1356596438740314-s2070262925757786.html&ued=https://www.miravia.es/p/i1356167439447999.html",
   "fecha_alta": "2023-10-10 12:40:24",
   "fecha_baja": null
  }
 ]);

 const pedidosBack = async () => {
  const respuesta = await fetch(
   `https://regalocompra.com/api/v1/productos/8/${count}`
  );
  const data = await respuesta.json();
  if (data.productos.length > 0) {
   setPedidos(prevPedidos => [...prevPedidos, ...data.productos]);
  }
 };

 useEffect(() => {
  pedidosBack();
 }, [count]);

 return (
  <Container>
   <ItemContainer>
    {pedidos.map((producto, index) => {
     return <Card key={index} producto={producto} />;
    })}
   </ItemContainer>
   <BtnMore
    onClick={() => {
     setCount(count + 1);
    }}>
    Ver más productos
   </BtnMore>
  </Container>
 );
};

export default ProductosDisponible;
