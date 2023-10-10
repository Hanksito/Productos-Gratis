import { useForm } from "react-hook-form";
import styled from "styled-components";
import Swal from "sweetalert2";

const ContainerModal = styled.div`
 background-color: rgba(27, 40, 69, 0.9);
 width: 100%;
 height: 100%;
 position: absolute;
 display: flex;
 justify-content: center;
 align-items: center;
 z-index: 10000;
 position: fixed;
 top: 50%;
 left: 50%;
 transform: translate(-50%, -50%);
 .swal2-popup {
  max-width: 90%;
  text-align: center;
 }
`;
const ModalContent = styled.div`
 max-width: 590px;
 min-height: 549px;
 padding: 10px;
 display: flex;
 flex-direction: column;
 width: 100%;
 border-radius: 30px;
 max-width: 590px;
 background: linear-gradient(0deg, #1b2845, #1b2845),
  linear-gradient(0deg, #7494ea, #7494ea);
 border: 8px solid #7494ea;
`;
const CloseIcon = styled.div`
 display: flex;
 justify-content: end;
 width: 100%;
`;
const H5 = styled.h5`
 font-family: Bevan;
 font-size: 21px;
 font-weight: 400;
 line-height: 50px;
 letter-spacing: 0em;
 text-align: left;
 color: #ffffff;
 margin-bottom: 5px;
 margin-top: 10px;
`;
const P = styled.p`
 font-family: Mukta;
 font-size: 14px;
 font-weight: 400;
 line-height: 20px;
 letter-spacing: 0em;
 text-align: left;
 color: #ffffff;
`;
const Content = styled.div`
 padding: 20px;
`;

const InputForm = styled.input`
 border: 1px solid #ffffff;
 background-color: transparent;
 min-height: 51px;
 color: #ffffff;
 padding: 10px;
 color: #ffffff;
 font-family: Mukta;
 font-size: 18px;
 font-weight: 400;
 line-height: 30px;
 letter-spacing: 0em;
 text-align: left;
 &::placeholder {
  padding: 10px;
  color: #ffffff;
  font-family: Mukta;
  font-size: 18px;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: 0em;
  text-align: left;
 }
`;

const ContainerInputs = styled.div`
 display: flex;
 flex-direction: column;
 justify-content: space-between;
 gap: 10px;
`;
const SubmitButton = styled.button`
 background: #9857de;
 font-family: Mukta;
 height: 51px;
 font-size: 18px;
 font-weight: 600;
 line-height: 30px;
 letter-spacing: 0em;
 text-align: center;
 margin-top: 25px;
 color: #ffffff;
 width: 100%;
 border-radius: 6px;
 padding: 20px, 30px, 20px, 30px;
`;
const Modal = ({ setOpen, producto }) => {
 const { register, handleSubmit } = useForm();

 const onSubmit = data => {
  data.producto = producto.id;
  const options = {
   method: "POST",
   body: JSON.stringify(data),
   headers: {
    "Accept": "*/*",
    "Content-Type": "application/json"
   }
  };
  fetch("https://regalocompra.com/api/v1/registro", options)
   .then(res => res.json())
   .then(data => {
console.log(data);
   });
 };

 return (
  <ContainerModal>
   <ModalContent>
    <CloseIcon onClick={() => setOpen(false)}>
     <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
       d="M5.39683 26.989C3.89754 25.5409 2.70165 23.8087 1.87894 21.8935C1.05624 19.9784 0.623197 17.9185 0.605085 15.8342C0.586973 13.7498 0.984152 11.6827 1.77345 9.75355C2.56275 7.82435 3.72835 6.07167 5.20226 4.59777C6.67616 3.12386 8.42885 1.95825 10.358 1.16896C12.2872 0.37966 14.3543 -0.0175196 16.4387 0.000592696C18.523 0.018705 20.5828 0.451747 22.498 1.27445C24.4132 2.09715 26.1454 3.29304 27.5935 4.79234C30.4529 7.75297 32.0352 11.7183 31.9994 15.8342C31.9636 19.9501 30.3127 23.8873 27.4022 26.7977C24.4917 29.7082 20.5546 31.3591 16.4387 31.3949C12.3227 31.4307 8.35746 29.8484 5.39683 26.989ZM7.61021 24.7756C9.96664 27.132 13.1626 28.4558 16.4951 28.4558C19.8276 28.4558 23.0236 27.132 25.3801 24.7756C27.7365 22.4191 29.0603 19.2231 29.0603 15.8907C29.0603 12.5582 27.7365 9.36215 25.3801 7.00572C23.0236 4.64929 19.8276 3.32546 16.4951 3.32546C13.1626 3.32546 9.96664 4.64929 7.61021 7.00572C5.25378 9.36215 3.92996 12.5582 3.92996 15.8907C3.92996 19.2231 5.25378 22.4191 7.61021 24.7756ZM23.151 11.4482L18.7085 15.8907L23.151 20.3331L20.9376 22.5465L16.4951 18.104L12.0527 22.5465L9.8393 20.3331L14.2818 15.8907L9.8393 11.4482L12.0527 9.2348L16.4951 13.6773L20.9376 9.2348L23.151 11.4482Z"
       fill="#63C7B2"
      />
     </svg>
    </CloseIcon>

    <Content>
     <H5>INGRESA TU INFORMACION</H5>
     <P>
      Tu información es segura con nosotros, y garantizamos un proceso rápido y
      confiable.
     </P>
     <form onSubmit={handleSubmit(onSubmit)}>
      <ContainerInputs>
       <InputForm
        type="text"
        placeholder="Nombres y apellido"
        required
        {...register("nombre")}
       />
       <InputForm
        type="email"
        placeholder="Correo electrónico"
        required
        {...register("email")}
       />
       <InputForm
        type="text"
        placeholder="Número de Bizum"
        required
        {...register("telefono")}
       />
      </ContainerInputs>
      <SubmitButton type="submit">Solicitar Bizum</SubmitButton>
     </form>
    </Content>
   </ModalContent>
  </ContainerModal>
 );
};

export default Modal;
