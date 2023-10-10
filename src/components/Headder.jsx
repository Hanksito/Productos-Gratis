import styled from "styled-components";
import afila from "../assets/afila.svg";
import cocacola from "../assets/cocacola.svg";
import jarron from "../assets/jarron.svg";
import libreta from "../assets/libreta.svg";
import usb from "../assets/usb.svg";
import {
 BackgroundRaro,
 SVGWrapper,
 SVG,
 ContainerHeadder,
 Promo,
 RectanguloH,
 RectanguloT,
 ProductosGratis,
 AhoraSon,
 Son,
 Gratis,
 TextoBlanco,
 SectionLeft,
 P,
 Jarron,
 Libreta,
 Afila,
 Cocacola,
 Usb,
 SectionRigth,
 ItemSection,
 H1Funciona,
 Ph,
 ContainerFunciona,
 Item1,
 Item2,
 Pitem,
 ItemSectionMobile,
 Libreta2,
 Afila2,
 Cocacola2,
 Usb2,
 Jarron2,
 ContendorItem,
 Parrafo
} from "./styleComponents/Headder.style";












const Headder = () => {
 return (
  <BackgroundRaro>
   <ContainerHeadder>
    <SectionLeft>
     <div style={{ width: "100%" }}>
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
      <Item1>
       <ContendorItem>
        <div>
         <svg
          width="50"
          height="34"
          viewBox="0 0 50 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <rect
           width="50"
           height="33"
           transform="translate(0 0.915771)"
           fill="#7494EA"
          />
          <path
           d="M5.54688 29.9158V24.9158H8.51562V15.697H5.23438V11.1189L15.9375 8.47827V24.9158H18.3594V29.9158H5.54688ZM24.0469 30.3376C22.724 30.3376 21.6615 29.9783 20.8594 29.2595C20.0573 28.5408 19.6562 27.572 19.6562 26.3533C19.6562 25.1449 20.0573 24.1918 20.8594 23.4939C21.6615 22.796 22.724 22.447 24.0469 22.447C25.3802 22.447 26.4427 22.796 27.2344 23.4939C28.0365 24.1918 28.4375 25.1449 28.4375 26.3533C28.4375 27.572 28.0365 28.5408 27.2344 29.2595C26.4323 29.9783 25.3698 30.3376 24.0469 30.3376Z"
           fill="white"
          />
         </svg>
        </div>
        <Pitem>Elige tu producto</Pitem>
       </ContendorItem>
       <Parrafo>
        Explora nuestro catálogo de productos y selecciona el que más te guste.
       </Parrafo>
      </Item1>
      <Item2>
       <ContendorItem>
        <div>
         <svg
          width="50"
          height="34"
          viewBox="0 0 50 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <rect
           width="50"
           height="33"
           transform="translate(0 0.915771)"
           fill="#7494EA"
          />
          <path
           d="M5.51562 29.9158V25.4626C8.56771 24.2751 10.9167 22.8793 12.5625 21.2751C14.2188 19.671 15.0469 17.9887 15.0469 16.2283C15.0469 15.2387 14.8385 14.447 14.4219 13.8533C14.0052 13.2595 13.3802 12.9626 12.5469 12.9626C11.6823 12.9626 11.0208 13.2543 10.5625 13.8376C10.1146 14.4106 9.89062 15.1554 9.89062 16.072C9.89062 16.5824 9.95312 17.0512 10.0781 17.4783C10.2135 17.9054 10.4219 18.3793 10.7031 18.9001L6.71875 20.4783C6.20833 19.9679 5.79688 19.2908 5.48438 18.447C5.17188 17.6033 5.01562 16.7126 5.01562 15.7751C5.01562 14.1918 5.40625 12.8585 6.1875 11.7751C6.97917 10.6918 8.04167 9.8741 9.375 9.32202C10.7188 8.75952 12.224 8.47827 13.8906 8.47827C15.6094 8.47827 17.1094 8.75431 18.3906 9.3064C19.6823 9.84806 20.6823 10.6449 21.3906 11.697C22.1094 12.7491 22.4688 14.0251 22.4688 15.5251C22.4688 17.3585 21.8073 19.0564 20.4844 20.6189C19.1719 22.1814 17.1927 23.4835 14.5469 24.5251H22.9844L23.0625 29.9158H5.51562ZM28.9219 30.3376C27.599 30.3376 26.5365 29.9783 25.7344 29.2595C24.9323 28.5408 24.5312 27.572 24.5312 26.3533C24.5312 25.1449 24.9323 24.1918 25.7344 23.4939C26.5365 22.796 27.599 22.447 28.9219 22.447C30.2552 22.447 31.3177 22.796 32.1094 23.4939C32.9115 24.1918 33.3125 25.1449 33.3125 26.3533C33.3125 27.572 32.9115 28.5408 32.1094 29.2595C31.3073 29.9783 30.2448 30.3376 28.9219 30.3376Z"
           fill="white"
          />
         </svg>
        </div>
        <Pitem>Te hacemos un Bizum</Pitem>
       </ContendorItem>
       <Parrafo>
        Completa el formulario de registro con tu nombre, dirección de correo
        electrónico y número de Bizum donde te transferiremos el dinero para que
        puedas realizar la compra.
       </Parrafo>
      </Item2>
      <Item2>
       {" "}
       <ContendorItem>
        <div>
         <svg
          width="50"
          height="34"
          viewBox="0 0 50 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <rect
           width="50"
           height="33"
           transform="translate(0 0.915771)"
           fill="#7494EA"
          />
          <path
           d="M12.9375 30.3533C12.0208 30.3533 11.0885 30.2804 10.1406 30.1345C9.19271 29.9887 8.3125 29.7856 7.5 29.5251C6.6875 29.2543 6.01562 28.947 5.48438 28.6033V23.9158L5.90625 23.7283C6.57292 24.2283 7.39062 24.6449 8.35938 24.9783C9.32812 25.3116 10.4896 25.4783 11.8438 25.4783C12.8854 25.4783 13.776 25.3116 14.5156 24.9783C15.2552 24.6345 15.625 24.0512 15.625 23.2283C15.625 22.3949 15.2552 21.8064 14.5156 21.4626C13.7865 21.1189 12.9271 20.947 11.9375 20.947C11.5729 20.947 11.1562 20.9731 10.6875 21.0251C10.2188 21.0668 9.76042 21.1449 9.3125 21.2595L8.89062 21.072V18.6658L14.7969 14.1814H5.46875V8.79077H22.2031V13.0876L16.5312 17.3533C18.5521 17.6241 20.1406 18.2647 21.2969 19.2751C22.4635 20.2751 23.0469 21.6397 23.0469 23.3689C23.0469 25.5043 22.1823 27.2022 20.4531 28.4626C18.7344 29.7231 16.2292 30.3533 12.9375 30.3533ZM28.8281 30.3376C27.5052 30.3376 26.4427 29.9783 25.6406 29.2595C24.8385 28.5408 24.4375 27.572 24.4375 26.3533C24.4375 25.1449 24.8385 24.1918 25.6406 23.4939C26.4427 22.796 27.5052 22.447 28.8281 22.447C30.1615 22.447 31.224 22.796 32.0156 23.4939C32.8177 24.1918 33.2188 25.1449 33.2188 26.3533C33.2188 27.572 32.8177 28.5408 32.0156 29.2595C31.2135 29.9783 30.151 30.3376 28.8281 30.3376Z"
           fill="white"
          />
         </svg>
        </div>
        <Pitem>Completa tu compra</Pitem>
       </ContendorItem>
       <Parrafo>
        Recibirás un correo electrónico de confirmación con un enlace. Haz clic
        en ese enlace para finalizar tu compra de forma gratuita.
       </Parrafo>
      </Item2>
     </ContainerFunciona>
    </SectionRigth>
    <ItemSectionMobile>
     <Jarron2 src={jarron} alt="jarron" />
     <Libreta2 src={libreta} alt="libreta" />
     <Afila2 src={afila} alt="afila" />
     <Cocacola2 src={cocacola} alt="cocacola" />
     <Usb2 src={usb} alt="usb" />
    </ItemSectionMobile>
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
