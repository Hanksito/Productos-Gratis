import styled from "styled-components";
import coca from "../../assets/coca.svg";
import { useState, useEffect } from "react";
import Modal from "./Modal";

const Enlace = styled.a`
 text-decoration:none;
 pointer:hand;
 `;
const CardContainer = styled.div`
 min-width: 285px;
 max-width: 290px;
 height: 350px;
 padding: 15px;
 border-radius: 40px;
 display: flex;
 justify-content: space-between;
 align-items: center;
 flex-direction: column;
 border: 1px solid #968f95;
`;
const ImgContainer = styled.div`
 display: flex;
 justify-content: center;
 width: 200px;
 height: 200px;
 border-radius: 24px;
 background: #0000000d;
`;
const PCard = styled.p`
 font-family: Mukta;
 font-size: 16px;
 font-weight: 400;
 line-height: 26px;
 letter-spacing: 0em;
 text-align: center;
 overflow: hidden;
 padding-bottom: 5px;
 text-overflow: ellipsis;
 max-height: 50px;
`;
const Img = styled.img`
 width: 100%;
 height: 100%;
 object-fit: cover;
`;
const Btn = styled.button`
 color: #f5edf0;
 padding: 16px, 20px, 16px, 20px;
 border-radius: 6px;
 gap: 10px;
 background: #9857de;
 width: 135px;
 margin: 0 auto;
 height: 44px;
 display: flex;
 border: 0;
 box-shadow: none;
 justify-content: center;
 align-items: center;
`;
const BtnText = styled.span`
 font-family: Mukta;
 font-size: 18px;
 font-weight: 600;
 line-height: 30px;
 letter-spacing: 0em;
 text-align: left;
`;

const Card = ({ producto }) => {
 const [open, setOpen] = useState(false);
 const { id, texto, foto,link } = producto;
 return (
  <CardContainer>
   {open && <Modal setOpen={setOpen} producto={producto} />}
   <Enlace href={`${link}`}>
   <ImgContainer>
    <Img src={foto} alt={texto} />
   </ImgContainer>
   </Enlace>
   <PCard>{texto}</PCard>
   
   
  
  </CardContainer>
 );
};

export default Card;
