import styled from "styled-components";
import coca from "../../assets/coca.svg";
import { useState, useEffect } from "react";
import Modal from "./Modal";

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
 text-overflow: ellipsis;
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
 const { id, texto, foto } = producto;
 return (
  <CardContainer>
   {open && <Modal setOpen={setOpen} producto={producto} />}
   <ImgContainer>
    <Img src={foto} alt={texto} />
   </ImgContainer>
   <PCard>{texto}</PCard>
   <Btn
    onClick={() => {
     setOpen(true);
    }}>
    <BtnText>Lo quiero</BtnText>

    <svg
     width="12"
     height="12"
     viewBox="0 0 12 13"
     fill="none"
     xmlns="http://www.w3.org/2000/svg">
     <path
      d="M6.71244 11.7735L11.7124 6.77354C11.8035 6.67844 11.8748 6.56629 11.9224 6.44354C12.0225 6.20008 12.0225 5.927 11.9224 5.68354C11.8748 5.56079 11.8035 5.44864 11.7124 5.35354L6.71244 0.35354C6.6192 0.260301 6.50851 0.186341 6.38669 0.13588C6.26487 0.0854202 6.1343 0.0594482 6.00244 0.0594482C5.73614 0.0594482 5.48075 0.165236 5.29244 0.35354C5.10414 0.541844 4.99835 0.797238 4.99835 1.06354C4.99835 1.32984 5.10414 1.58524 5.29244 1.77354L8.59244 5.06354H1.00244C0.737225 5.06354 0.48287 5.1689 0.295334 5.35643C0.107798 5.54397 0.00244142 5.79832 0.00244141 6.06354C0.00244139 6.32876 0.107797 6.58311 0.295334 6.77065C0.48287 6.95818 0.737225 7.06354 1.00244 7.06354H8.59244L5.29244 10.3535C5.19871 10.4465 5.12432 10.5571 5.07355 10.679C5.02278 10.8008 4.99664 10.9315 4.99664 11.0635C4.99664 11.1956 5.02278 11.3263 5.07355 11.4481C5.12432 11.57 5.19871 11.6806 5.29244 11.7735C5.3854 11.8673 5.496 11.9417 5.61786 11.9924C5.73972 12.0432 5.87043 12.0693 6.00244 12.0693C6.13445 12.0693 6.26516 12.0432 6.38702 11.9924C6.50888 11.9417 6.61948 11.8673 6.71244 11.7735Z"
      fill="#F5EDF0"
     />
    </svg>
   </Btn>
  </CardContainer>
 );
};

export default Card;
