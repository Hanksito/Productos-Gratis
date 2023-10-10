import styled from "styled-components";
import Headder from "./components/Headder";
import ProductosDisponible from "./components/ProductosDisponible";
import PreguntasFrecuentes from "./components/PreguntasFrecuentes";
import Footer from "./components/Footer";
import whatsapp from "./assets/whatsapp.svg";

const ContenedorPadre = styled.div`
 display: flex;
 justify-content: center;
 width: 100%;
`;
const WhatsappIcon = styled.div`
 position: fixed;
 bottom: 20px;
 right: 20px;
 z-index: 999;
 max-width: 1000px;
`;

const IconImage = styled.img`
 width: 50px;
 height: 50px;
 background: transparent;
`;

function App() {
 return (
  <>
   <ContenedorPadre>
    <Headder />
   </ContenedorPadre>
   <ContenedorPadre>
    <ProductosDisponible />
   </ContenedorPadre>
   <ContenedorPadre>
    <PreguntasFrecuentes />
   </ContenedorPadre>
   <ContenedorPadre>
    <Footer />
   </ContenedorPadre>

   <WhatsappIcon>
    <a
     href="https://api.whatsapp.com/send?phone=621315087"
     target="_blank"
     rel="noopener noreferrer">
     <IconImage src={whatsapp} alt="WhatsApp" />
    </a>
   </WhatsappIcon>
  </>
 );
}

export default App;
