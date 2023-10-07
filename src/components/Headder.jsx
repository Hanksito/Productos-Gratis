import styled from "styled-components";
import afila from "../assets/afila.svg";
import cocacola from "../assets/cocacola.svg";
import jarron from "../assets/jarron.svg";
import libreta from "../assets/libreta.svg";
import usb from "../assets/usb.svg";

const BackgroundRaro = styled.div`
 position: relative;
 background: #63c7b2;
 height: 658.92px;
 width: 1444px;
 z-index: -1;
 top: 77.53px;
`;

const SVGWrapper = styled.div`
 position: absolute;
 bottom: -4px;
 left: 0;
 right: 0;
 width: 100%;
 height: auto;
 z-index: -1;
`;

const SVG = styled.svg`
 width: 100%;
 height: auto;
`;
const ContainerHeadder = styled.div`
 display: flex;
 justify-content: space-between;
 padding-top: 53px;
 padding-left: 19px;
 padding-right: 100px;
 @media (max-width: 768px) {
 }
`;
const Promo = styled.h4`
 position: relative;
 color: #ffffff;
 font-family: "Bevan", serif;
 font-size: 20px;
 font-weight: 400;
 line-height: 19px;
 letter-spacing: 0em;
 text-align: left;
 left: 15px;
 top: 12px;
 transform: rotate(-2.02deg);
 @media (max-width: 768px) {
  font-size: 14px;
  line-height: 13px;
 }
`;
const RectanguloH = styled.div`
 width: 133.51px;
 height: 43.67px;
 transform: translate(10%, 0) rotate(2.02deg);
 background-color: #9857de;
 @media (max-width: 768px) {
  width: 93.06px;
  height: 30.44px;
  transform: translate(10%, 1px) rotate(2.02deg);
 }
`;
const RectanguloT = styled.div`
 background: #9857de;
 width: 189.02px;
 height: 40.29px;
 top: 179.28px;
 left: 67.56px;
 transform: translate(-5%, 220%) rotate(-10.42deg);
 @media (max-width: 768px) {
  width: 131.76px;
  height: 28.08px;
  top: 134.74px;
  left: 22.46px;
  transform: translate(-5%, 237%) rotate(-10.42deg);
 }
`;
const ProductosGratis = styled.h1`
 font-family: "Bevan", serif;
 font-size: 68px;
 font-style: italic;
 font-weight: 400;
 line-height: 60px;
 letter-spacing: 0em;
 width: 520px;
 height: 173px;
 top: 194.34px;
 left: 100px;
 transform: translate(5%, -19%);
 @media (max-width: 768px) {
  width: 362.47px;
  height: 120px;
  top: 145.24px;
  left: 45.07px;
  font-size: 42px;
  line-height: 42px;
  letter-spacing: 0em;
  text-align: left;
  transform: translate(5%, -15%);
 }
`;
const AhoraSon = styled.span`
 display: flex;
 flex-direction: column;
 text-align: left;
 font-family: Bevan;
 font-size: 30px;
 font-style: italic;
 font-weight: 400;
 line-height: 28px;
 letter-spacing: 0em;
 text-align: left;
 color: #ffffff;
 @media (max-width: 768px) {
  font-family: Bevan;
  font-size: 21px;
  font-style: italic;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0em;
 }
`;
const Son = styled.span`
 transform: translate(37%, -0);

 @media (max-width: 768px) {
  transform: translate(3%, -0);
 }
`;
const Gratis = styled.span`
 color: #ffffff;
 font-style: normal;
 @media (max-width: 768px) {
  padding-left: 5px;
  font-size: 47px;
  font-weight: 400;
  line-height: 42px;
  letter-spacing: 0em;
  text-align: left;
 }
`;
const TextoBlanco = styled.div`
 display: flex;
`;
const SectionLeft = styled.div`
 max-width: 616px;
 width: 50%;
 height: 648px;
 margin-left: 19px;
 transform: translate(0, -50px);
 @media (max-width: 768px) {
  margin-left: 25px;
  transform: translate(4, -70px);
  max-width: 430px;
 }
`;
const P = styled.p`
 font-family: Mukta;
 font-size: 20px;
 font-weight: 400;
 line-height: 26px;
 letter-spacing: 0em;
 text-align: center;
 width: 530px;
 color: #ffffff;
 margin: 0;
 transform: translate(10px, -50px);
 @media (max-width: 768px) {
  margin-left: 5px;
  font-weight: 400;
  line-height: 26px;
  letter-spacing: 0em;
  text-align: left;
  width: 360px;
  height: 39px;
  transform: translate(-2px, -30px);
 }
`;
const Jarron = styled.img`
 width: 130.75px;
 height: 231.37px;
 transform: translate(-15%);
`;

const Libreta = styled.img`
 width: 162.26px;
 height: 223.98px;
 margin-left: 20px;
`;
const Afila = styled.img`
 width: 171.21px;
 height: 157.79px;
 transform: translate(-15%, -95%);
`;
const Cocacola = styled.img`
 width: 106.22px;
 height: 294.85px;
 transform: translate(-50%, 0);
`;
const Usb = styled.img`
 width: 272.4px;
 height: 204.42px;
 transform: translate(500px, -233px);
`;
const SectionRigth = styled.div`
 width: 616px;
 height: 648px;
 border-radius: 40px;
 border: 7px solid #63c7b2;
 background-color: #f5edf0;
 box-shadow: 0px 44px 64px -50px #7494ea80;
 padding: 50px, 38px, 50px, 38px !important;
 z-index: 5;
`;
const ItemSection = styled.div`
 transform: translate(0, -5%);
`;

const H1Funciona = styled.h1`
 width: 299px;
 height: 23px;
 font-family: Bevan;
 font-size: 29px;
 font-weight: 400;
 line-height: 29px;
 letter-spacing: 0em;
 text-align: left;
 padding-left: 38px;
 padding-top: 40px;
 margin: 0;
`;
const Ph = styled.p`
 font-family: Mukta;
 font-size: 16px;
 font-weight: 300;
 line-height: 22px;
 letter-spacing: 0em;
 text-align: left;
 width: 540px;
 height: 10px;
 padding-left: 38px;
 padding-top: 20px;
 margin: 0;
`;

const ContainerFunciona = styled.div`
 position: relative;
 width: 500px;
 height: 455px;
 gap: 10px;
 padding-left: 31px;
 margin-right: 31px;
 padding-top: 30px;
`;
const Item1 = styled.div`
 width: 100%;
 height: 80px;
 padding: 30px;
 border-radius: 20px;
 gap: 30px;
 background-color: #ffffff;
 padding: 20px;
 margin-right: 30px;
`;
const H2item1 = styled.h2`
 width: 410px;
 height: 14px;
 font-family: Mukta;
 font-size: 22px;
 font-weight: 800;
 line-height: 26px;
 letter-spacing: -0.03em;
 text-align: left;
`;
const Row = styled.div``;
const Headder = () => {
 return (
  <BackgroundRaro>
   <ContainerHeadder>
    <SectionLeft>
     <div>
      <RectanguloT></RectanguloT>
      <RectanguloH>
       <Promo>PROMO ESPECIAL</Promo>
      </RectanguloH>
      <ProductosGratis>
       ESTOS PRODUCTOS
       <TextoBlanco>
        <AhoraSon>
         AHORA <Son>SON</Son>
        </AhoraSon>
        <Gratis>GRATIS</Gratis>
       </TextoBlanco>
      </ProductosGratis>
      <P>Elige entre nuestra selección de productos y obténlos gratis</P>
      <ItemSection>
       <Jarron src={jarron} alt="jarron" />
       <Libreta src={libreta} alt="libreta" />
       <Afila src={afila} alt="afila" />
       <Cocacola src={cocacola} alt="cocacola" />
       <Usb src={usb} alt="usb" />
      </ItemSection>
     </div>
    </SectionLeft>
    <SectionRigth>
     <H1Funciona>CÓMO FUNCIONA</H1Funciona>
     <Ph>
      Sigue estos pasos para obtener cualquiera de estos productos gratis.
     </Ph>
     <ContainerFunciona>
      <Item1></Item1>
     </ContainerFunciona>
    </SectionRigth>
   </ContainerHeadder>

   <SVGWrapper>
    <SVG
     width="100%"
     height="211"
     viewBox="0 0 1440 211"
     fill="none"
     xmlns="http://www.w3.org/2000/svg">
     <path
      d="M1265.93 24.4396C1336.46 -12.7632 1396.54 -6.35588 1440 37.5122V210.969H0V63.5786C100 105.364 254.566 161.176 440 85.6891C657.123 -2.69795 786.122 11.2835 947.755 85.6891C1109.39 160.095 1177.77 70.9431 1265.93 24.4396Z"
      fill="white"
     />
    </SVG>
   </SVGWrapper>
  </BackgroundRaro>
 );
};

export default Headder;
