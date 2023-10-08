import React, { useState } from "react";
import styled from "styled-components";

const AccordionContainer = styled.div`
 width: 100%;
`;

const AccordionItem = styled.div`
 width: 100%;
 font-family: Mukta;
 font-size: 20px;
 font-weight: 400;
 line-height: 26px;
 letter-spacing: 0em;
 text-align: left;
 border: 1px solid #968f95;
 padding: 10px;
 border: 1px solid #ddd;
 cursor: pointer;
 transition: background-color 0.3s ease;

 &:hover {
  background-color: #ffffff;
 }
`;

const AccordionContent = styled.div`
 display: ${props => (props.isOpen ? "block" : "none")};
 width: 100%;
 background-color: #fff;
 font-family: Mukta;
 font-size: 16px;
 font-weight: 300;
 line-height: 22px;
 letter-spacing: 0em;
 text-align: left;
 color: #1b2845;
 padding: 10px;
`;
const TituloContainer = styled.div`
 display: flex;
 justify-content: space-between;
 align-items: center;
`;

function AccordionMenu({ titulo, contenido }) {
 const [isOpen, setIsOpen] = useState(false);

 const toggleAccordion = () => {
  setIsOpen(!isOpen);
 };

 return (
  <AccordionContainer>
   <AccordionItem onClick={toggleAccordion}>
    <TituloContainer>
     {titulo}
     {isOpen ? (
      <svg
       width="12"
       height="13"
       viewBox="0 0 12 13"
       fill="none"
       xmlns="http://www.w3.org/2000/svg">
       <path
        d="M0.286034 7.28171L5.28603 12.2817C5.38113 12.3728 5.49328 12.4441 5.61603 12.4917C5.85949 12.5917 6.13257 12.5917 6.37603 12.4917C6.49878 12.4441 6.61093 12.3728 6.70603 12.2817L11.706 7.28172C11.7993 7.18848 11.8732 7.07779 11.9237 6.95597C11.9742 6.83414 12.0001 6.70358 12.0001 6.57172C12.0001 6.30542 11.8943 6.05002 11.706 5.86172C11.5177 5.67341 11.2623 5.56762 10.996 5.56762C10.7297 5.56762 10.4743 5.67341 10.286 5.86172L6.99603 9.16172V1.57172C6.99603 1.3065 6.89068 1.05215 6.70314 0.864609C6.5156 0.677072 6.26125 0.571716 5.99603 0.571716C5.73082 0.571716 5.47646 0.677072 5.28893 0.864609C5.10139 1.05215 4.99603 1.3065 4.99603 1.57172V9.16172L1.70603 5.86172C1.61307 5.76799 1.50247 5.69359 1.38061 5.64282C1.25875 5.59206 1.12804 5.56592 0.996033 5.56592C0.864021 5.56592 0.733315 5.59206 0.611456 5.64282C0.489597 5.69359 0.378997 5.76799 0.286034 5.86171C0.192305 5.95468 0.117909 6.06528 0.0671406 6.18714C0.0163719 6.309 -0.00976561 6.4397 -0.00976562 6.57171C-0.00976564 6.70373 0.0163719 6.83443 0.0671406 6.95629C0.117909 7.07815 0.192305 7.18875 0.286034 7.28171Z"
        fill="#1B2845"
       />
      </svg>
     ) : (
      <svg
       width="12"
       height="13"
       viewBox="0 0 12 13"
       fill="none"
       xmlns="http://www.w3.org/2000/svg">
       <path
        d="M0.286034 5.85685L5.28603 0.856849C5.38113 0.765808 5.49328 0.694443 5.61603 0.646849C5.85949 0.54683 6.13257 0.546831 6.37603 0.646849C6.49878 0.694443 6.61093 0.765808 6.70603 0.856849L11.706 5.85685C11.7993 5.95009 11.8732 6.06078 11.9237 6.1826C11.9742 6.30442 12.0001 6.43499 12.0001 6.56685C12.0001 6.83315 11.8943 7.08854 11.706 7.27685C11.5177 7.46515 11.2623 7.57094 10.996 7.57094C10.7297 7.57094 10.4743 7.46515 10.286 7.27685L6.99603 3.97685V11.5668C6.99603 11.8321 6.89068 12.0864 6.70314 12.274C6.5156 12.4615 6.26125 12.5668 5.99603 12.5668C5.73082 12.5668 5.47646 12.4615 5.28893 12.274C5.10139 12.0864 4.99603 11.8321 4.99603 11.5668V3.97685L1.70603 7.27685C1.61307 7.37058 1.50247 7.44497 1.38061 7.49574C1.25875 7.54651 1.12804 7.57265 0.996033 7.57265C0.864021 7.57265 0.733315 7.54651 0.611456 7.49574C0.489597 7.44497 0.378997 7.37058 0.286034 7.27685C0.192305 7.18389 0.117909 7.07329 0.0671406 6.95143C0.0163719 6.82957 -0.00976561 6.69886 -0.00976562 6.56685C-0.00976564 6.43484 0.0163719 6.30413 0.0671406 6.18227C0.117909 6.06041 0.192305 5.94981 0.286034 5.85685Z"
        fill="#1B2845"
       />
      </svg>
     )}
    </TituloContainer>
   </AccordionItem>
   <AccordionContent isOpen={isOpen}>{contenido}</AccordionContent>
  </AccordionContainer>
 );
}

export default AccordionMenu;
