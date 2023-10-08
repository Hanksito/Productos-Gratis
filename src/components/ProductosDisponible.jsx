import styled from "styled-components";
import Card from "./tools/Card";
import Modal from "./tools/Modal";

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
 margin-top: 57px;
 width: 230px;
 margin-top: 190px;
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
 // a la espera de ver como llegan los datos del backend

 const prueba = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

 return (
  <Container>
   <Modal />

   <H1>PRODUCTOS DISPONIBLES</H1>
   <ItemContainer>
    {prueba.map(producto => {
     return <Card producto={producto} />;
    })}
   </ItemContainer>
   {/* Y esto mas de lo mismo  */}
   <BtnMore>Ver más productos</BtnMore>
  </Container>
 );
};

export default ProductosDisponible;
