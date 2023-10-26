import styled from "styled-components";
import Headder from "./components/Headder";
import ProductosDisponible from "./components/ProductosDisponible";
import PreguntasFrecuentes from "./components/PreguntasFrecuentes";
import Footer from "./components/Footer";
import whatsapp from "./assets/telegram.svg";

const ContenedorPadre = styled.div`
 display: flex;
 justify-content: center;
 width: 100%;
`;
const WhatsappIcon = styled.div`
 position: fixed;
 bottom: 20px;
 z-index: 999;
 right: 8%;
 max-width: 1440px;
 width: 100%;
 display: flex;
 justify-content: end;
 @media (max-width: 768px) {
  right: 5%;
 }
`;

const IconImage = styled.img`
 width: 90px;
 height: 90px;
 background: transparent;
 @media (max-width: 768px) {
  width: 50px;
  height: 50px;
 }
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
   <ContenedorPadre>
    <WhatsappIcon>
     <a
      href="https://api.whatsapp.com/send?phone=621315087"
      target="_blank"
      rel="noopener noreferrer">
      <IconImage src={whatsapp} alt="WhatsApp" />
     </a>
    </WhatsappIcon>
   </ContenedorPadre>
  </>
 );
}

export default App;
