import styled from "styled-components";

const ContainerFooter = styled.div`
 max-width: 1640px;
 width: 100%;
`;
const FooterTop = styled.div`
 border-top: 1px solid #7494ea;
 background-color: #1b2845;
 color: #ffffff;
 padding: 39px 100px;
 font-family: Mukta;
 font-size: 14px;
 font-weight: 500;
 line-height: 17px;
 letter-spacing: 0em;
 text-align: center;
`;
const FooterDown = styled.div`
 width: 100%;
 gap: 40px;
 display: flex;
 flex-direction: column;
 justify-content: space-between;
 align-items: center;
 color: #ffffff;
 background: #1b2845;
`;
const ItemFooter = styled.div`
 width: 50%;
 display: flex;
 flex-direction: row;
 justify-content: space-evenly;
 @media (max-width: 768px) {
  flex-direction: column;
  align-items: center;
 }
`;
const Pwhite = styled.p`
 font-family: Mukta;
 font-size: 16px;
 font-weight: 400;
 line-height: 27px;
 letter-spacing: 0em;
 text-align: left;
`;
const Pgrey = styled.p`
 font-family: Mukta;
 font-size: 16px;
 font-weight: 400;
 line-height: 27px;
 letter-spacing: 0em;
 text-align: center;
 padding-bottom: 20px;
 color: #767474ff;
`;
const Footer = () => {
 return (
  <ContainerFooter>
   <FooterTop>
    ¿Tienes alguna pregunta o necesitas ayuda adicional? No dudes en
    contactarnos a través de <span style={{fontWeight:"500", color:"#63c7b2"}}>regalocomprainfo@gmail.com</span> o consulta nuestras Preguntas
    Frecuentes para obtener más información sobre el proceso de reembolso.
   </FooterTop>
   <FooterDown>
    <Pgrey>© 2023 RegaloCompra.com. Todos los derechos reservados.</Pgrey>
   </FooterDown>
  </ContainerFooter>
 );
};

export default Footer;
