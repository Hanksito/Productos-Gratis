import styled from "styled-components";
import Headder from "./components/Headder";
import NavbarC from "./components/Navbar";
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
  </>
 );
}

export default App;
