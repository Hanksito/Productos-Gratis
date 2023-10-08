import React from "react";
import styled from "styled-components";
import AccordionMenu from "./tools/Acordion";
const Container = styled.div`
 max-width: 1440px;
 width: 100%;
 display: flex;
 justify-content: center;
 background: #fbfafa;
 padding: 80px 280px;
 @media (max-width: 768px) {
  padding: 20px;
 }
`;
const H1F = styled.h1`
 font-family: Bevan;
 font-size: 36px;
 font-weight: 400;
 line-height: 35px;
 letter-spacing: 0em;
 text-align: center;
 color: #1b2845;
 margin-bottom: 71px;
`;

const PreguntasFrecuentes = () => {
 return (
  <Container>
   <div>
    <H1F>PREGUNTAS FRECUENTES</H1F>
    <AccordionMenu
     titulo="¿Cómo puedo obtener productos gratis?"
     contenido="Para obtener productos gratis, simplemente crea una cuenta y realiza una compra de cualquiera de nuestros productos seleccionados en la sección de Catálogo de Productos. Una vez realizada la compra, sigue las instrucciones para recibir un reembolso completo a través de Bizum."
    />
    <AccordionMenu
     titulo="¿Cuántos productos puedo obtener de forma gratuita?"
     contenido="Para obtener productos gratis, simplemente crea una cuenta y realiza una compra de cualquiera de nuestros productos seleccionados en la sección de Catálogo de Productos. Una vez realizada la compra, sigue las instrucciones para recibir un reembolso completo a través de Bizum."
    />
    <AccordionMenu
     titulo="¿Cómo solicito el reembolso después de la compra?"
     contenido="Para obtener productos gratis, simplemente crea una cuenta y realiza una compra de cualquiera de nuestros productos seleccionados en la sección de Catálogo de Productos. Una vez realizada la compra, sigue las instrucciones para recibir un reembolso completo a través de Bizum."
    />{" "}
    <AccordionMenu
     titulo="¿Cuánto tiempo tarda en procesarse el reembolso?"
     contenido="Para obtener productos gratis, simplemente crea una cuenta y realiza una compra de cualquiera de nuestros productos seleccionados en la sección de Catálogo de Productos. Una vez realizada la compra, sigue las instrucciones para recibir un reembolso completo a través de Bizum."
    />{" "}
    <AccordionMenu
     titulo="¿Qué debo hacer si tengo problemas con el reembolso?"
     contenido="Para obtener productos gratis, simplemente crea una cuenta y realiza una compra de cualquiera de nuestros productos seleccionados en la sección de Catálogo de Productos. Una vez realizada la compra, sigue las instrucciones para recibir un reembolso completo a través de Bizum."
    />{" "}
    <AccordionMenu
     titulo="¿Hay algún requisito especial para ser elegible para esta promoción?"
     contenido="Para obtener productos gratis, simplemente crea una cuenta y realiza una compra de cualquiera de nuestros productos seleccionados en la sección de Catálogo de Productos. Una vez realizada la compra, sigue las instrucciones para recibir un reembolso completo a través de Bizum."
    />{" "}
    <AccordionMenu
     titulo="¿Qué sucede si quiero devolver un producto?"
     contenido="Para obtener productos gratis, simplemente crea una cuenta y realiza una compra de cualquiera de nuestros productos seleccionados en la sección de Catálogo de Productos. Una vez realizada la compra, sigue las instrucciones para recibir un reembolso completo a través de Bizum."
    />
    <AccordionMenu
     titulo="¿Cómo puedo contactar al servicio al cliente para obtener ayuda?"
     contenido="Para obtener productos gratis, simplemente crea una cuenta y realiza una compra de cualquiera de nuestros productos seleccionados en la sección de Catálogo de Productos. Una vez realizada la compra, sigue las instrucciones para recibir un reembolso completo a través de Bizum."
    />
   </div>
  </Container>
 );
};

export default PreguntasFrecuentes;
