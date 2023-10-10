import styled from "styled-components";
import Headder from "./components/Headder";
import ProductosDisponible from "./components/ProductosDisponible";
import PreguntasFrecuentes from "./components/PreguntasFrecuentes";
import Footer from "./components/Footer";

const ContenedorPadre = styled.div`
 display: flex;
 justify-content: center;
 width: 100%;
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
  </>
 );
}

export default App;
