import styled from "styled-components";

export const BackgroundRaro = styled.div`
 position: relative;
 background: #63c7b2;
 height: 651px;
 width: 1444px;
 z-index: -1;
 top: 0px;
 @media (max-width: 768px) {
  height: 1000.02px;
  margin-bottom: 25px;
 }
`;

export const SVGWrapper = styled.div`
 position: absolute;
 bottom: -6px;
 left: 0;
 right: 0;
 width: 100%;
 height: auto;
 z-index: -1;
 @media (max-width: 768px) {
  bottom: -5px;
 }
`;

export const SVG = styled.svg`
 width: 100%;
 height: auto;
`;
export const ContainerHeadder = styled.div`
 display: flex;
 justify-content: space-between;
 padding-top: 53px;
 padding-left: 19px;
 padding-right: 100px;
 @media (max-width: 768px) {
  flex-direction: column;
  padding-top: 23px;
  padding-left: 19px;
  padding-right: 19px;
 }
`;
export const Promo = styled.h4`
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
export const RectanguloH = styled.div`
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
export const RectanguloT = styled.div`
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
export const ProductosGratis = styled.h1`
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
  font-size: 42px;
  line-height: 42px;
  letter-spacing: 0em;
  text-align: left;
 }
`;
export const AhoraSon = styled.span`
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
export const Son = styled.span`
 transform: translate(37%, -0);

 @media (max-width: 768px) {
  transform: translate(3%, -0);
 }
`;
export const Gratis = styled.span`
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
export const TextoBlanco = styled.div`
 display: flex;
`;
export const SectionLeft = styled.div`
 max-width: 616px;
 width: 50%;
 height: 300px;
 margin-left: 19px;
 transform: translate(0, -50px);
 @media (max-width: 768px) {
  margin-left: 0;
  transform: translate(4, -70px);
  display: flex;
  width: 100%;
 }
`;
export const P = styled.p`
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
export const Jarron = styled.img`
 width: 130.75px;
 height: 231.37px;
 transform: translate(-15%);
`;

export const Libreta = styled.img`
 width: 162.26px;
 height: 223.98px;
 margin-left: 20px;
`;
export const Afila = styled.img`
 width: 171.21px;
 height: 157.79px;
 transform: translate(-15%, -95%);
`;
export const Cocacola = styled.img`
 width: 106.22px;
 height: 294.85px;
 transform: translate(-50%, 0);
`;
export const Usb = styled.img`
 width: 272.4px;
 height: 204.42px;
 transform: translate(500px, -233px);
`;
export const SectionRigth = styled.div`
 max-width: 616px;
 border-radius: 40px;
 border: 7px solid #63c7b2;
 background-color: #f5edf0;
 box-shadow: 0px 44px 64px -50px #7494ea80;
 padding: 50px 38px;
 z-index: 5;
 @media (max-width: 768px) {
  padding: 20px 18px;
  max-width: 350px;
  position: absolute;
  top: 295px;
  border: none;
 }
`;
export const ItemSection = styled.div`
 transform: translate(0, -5%);
 @media (max-width: 768px) {
  display: none;
 }
`;

export const H1Funciona = styled.h1`
 width: 299px;
 height: 23px;
 font-family: Bevan;
 font-size: 29px;
 font-weight: 400;
 line-height: 29px;
 letter-spacing: 0em;
 text-align: left;
 margin: 0;
 @media (max-width: 768px) {
 }
`;
export const Ph = styled.p`
 font-family: Mukta;
 font-size: 16px;
 font-weight: 300;
 line-height: 22px;
 letter-spacing: 0em;
 text-align: left;
 width: 540px;
 height: 10px;
 padding-top: 7px;
 margin: 0;
 @media (max-width: 768px) {
  width: 354px;
  padding-bottom: 25px;

  padding-top: 7px;
 }
`;

export const ContainerFunciona = styled.div`
 position: relative;
 margin-top: 10px;
`;
export const Item1 = styled.div`
 border-radius: 20px;
 gap: 30px;
 background-color: #ffffff;
 text-align: center;
 margin-top: 10px;
 padding: 5px;
 @media (max-width: 768px) {
  margin-top: 5px;
  padding: 5px;
 }
`;
export const Item2 = styled(Item1)`
 @media (max-width: 768px) {
 }
`;
export const Pitem = styled.h2`
 font-family: Mukta;
 font-size: 22px;
 font-weight: 800;
 line-height: 26px;
 letter-spacing: -0.03em;
 text-align: left;
`;

export const ItemSectionMobile = styled(ItemSection)`
 display: none;
 z-index: 200;
 @media (max-width: 768px) {
  display: block;
 }
`;
export const Libreta2 = styled.img`
 position: absolute;
 top: 550.77px;
 width: 107.92px;
 height: 148.97px;
 left: 50px;
 transform: rotate(-25.26deg);
 z-index: -1;
`;
export const Afila2 = styled.img`
 position: absolute;
 width: 113.87px;
 height: 104.95px;
 top: 535.77px;
 right: 50px;
 z-index: -1;
`;
export const Cocacola2 = styled.img`
 width: 70.65px;
 height: 196.1px;
 position: absolute;
 top: 550.77px;
 right: 150px;
`;
export const Usb2 = styled.img`
 width: 170.18px;
 height: 124.96px;
 position: absolute;
 top: 600.77px;
 right: -10px;
 transform: rotate(-10.08deg);
`;
export const Jarron2 = styled.img`
 width: 86.96px;
 height: 153.89px;
 position: absolute;
 top: 580.77px;
 left: -5px;
`;
export const ContendorItem = styled.div`
 display: flex;
 gap: 5px;
 align-items: center;
 padding:10px;
`;
export const Parrafo = styled.p`
 font-family: Mukta;
 font-size: 16px;
 font-weight: 300;
 line-height: 22px;
 letter-spacing: 0em;
 text-align: left;
 margin-bottom: 0;
 margin-top: 0;
 margin-left: 18px;
`;
