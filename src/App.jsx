import styled from "styled-components";
import Headder from "./components/Headder";
import NavbarC from "./components/Navbar";
import ProductosDisponible from "./components/ProductosDisponible";
import PreguntasFrecuentes from "./components/PreguntasFrecuentes";

const ContenedorPadre = styled.div`
 display: flex;
 justify-content: center;
 width: 100%;
`;
function App() {
 return (
  <>
   <NavbarC />
   <ContenedorPadre>
    <Headder />
   </ContenedorPadre>
   <ContenedorPadre>
    <ProductosDisponible />
   </ContenedorPadre>
   <ContenedorPadre>
    <PreguntasFrecuentes />
   </ContenedorPadre>
  </>
 );
}

export default App;
