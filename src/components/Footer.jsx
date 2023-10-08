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
    contactarnos a través de correo@mail.com o consulta nuestras Preguntas
    Frecuentes para obtener más información sobre el proceso de reembolso.
   </FooterTop>
   <FooterDown>
    <svg
     width="154"
     height="35"
     viewBox="0 0 154 35"
     fill="none"
     xmlns="http://www.w3.org/2000/svg">
     <path
      d="M0.328125 34.5737V0.564941H11.8979V5.69189H8.53125V29.4468H11.2998V34.5737H0.328125Z"
      fill="white"
     />
     <path
      d="M16.125 25.772V22.4028H17.6875V13.5942H16.125V10.2251H24.9141V13.5942H22.7656V22.4517H25.9492L26.3398 18.8091H29.5625V25.772H16.125Z"
      fill="white"
     />
     <path
      d="M38.4395 26.0552C36.8314 26.0552 35.4414 25.7329 34.2695 25.0884C33.1042 24.4373 32.2057 23.5096 31.5742 22.3052C30.9427 21.1007 30.627 19.6717 30.627 18.0181C30.627 16.3514 30.9427 14.9159 31.5742 13.7114C32.2057 12.5005 33.1042 11.5695 34.2695 10.9185C35.4414 10.2674 36.8314 9.94189 38.4395 9.94189C40.054 9.94189 41.444 10.2674 42.6094 10.9185C43.7747 11.5695 44.6732 12.5005 45.3047 13.7114C45.9362 14.9159 46.252 16.3514 46.252 18.0181C46.252 19.6717 45.9362 21.1007 45.3047 22.3052C44.6732 23.5096 43.7747 24.4373 42.6094 25.0884C41.444 25.7329 40.054 26.0552 38.4395 26.0552ZM38.4395 22.686C39.1686 22.686 39.7285 22.2889 40.1191 21.4946C40.5098 20.7004 40.7051 19.5317 40.7051 17.9888C40.7051 16.4458 40.5098 15.2772 40.1191 14.4829C39.7285 13.6886 39.1686 13.2915 38.4395 13.2915C37.7103 13.2915 37.1504 13.6886 36.7598 14.4829C36.3691 15.2772 36.1738 16.4458 36.1738 17.9888C36.1738 19.5317 36.3691 20.7004 36.7598 21.4946C37.1504 22.2889 37.7103 22.686 38.4395 22.686Z"
      fill="white"
     />
     <path
      d="M56.7988 26.0552C54.9043 26.0552 53.2669 25.7134 51.8867 25.0298C50.513 24.3462 49.4518 23.3761 48.7031 22.1196C47.9544 20.8631 47.5801 19.3755 47.5801 17.6567C47.5801 16.1138 47.8796 14.7661 48.4785 13.6138C49.084 12.4549 49.9271 11.5532 51.0078 10.9087C52.0951 10.2642 53.3613 9.94189 54.8066 9.94189C55.8939 9.94189 56.8118 10.0949 57.5605 10.4009C58.3158 10.7069 58.931 11.1593 59.4062 11.7583L59.9043 10.2251H62.5898V15.8794H58.9766C58.8529 15.007 58.5859 14.3755 58.1758 13.9849C57.7656 13.5877 57.1797 13.3892 56.418 13.3892C55.8125 13.3892 55.2591 13.5422 54.7578 13.8481C54.2565 14.1476 53.8561 14.6131 53.5566 15.2446C53.2572 15.8696 53.1074 16.6704 53.1074 17.647C53.1074 19.0988 53.4525 20.2088 54.1426 20.9771C54.8392 21.7453 55.8288 22.1294 57.1113 22.1294C57.6452 22.1294 58.1172 22.061 58.5273 21.9243V20.3423H56.6719V17.4126H62.9219V24.6782C62.4271 24.9452 61.8411 25.1828 61.1641 25.3911C60.487 25.5994 59.7741 25.7622 59.0254 25.8794C58.2767 25.9966 57.5345 26.0552 56.7988 26.0552Z"
      fill="white"
     />
     <path
      d="M72.5215 26.0552C70.9134 26.0552 69.5234 25.7329 68.3516 25.0884C67.1862 24.4373 66.2878 23.5096 65.6562 22.3052C65.0247 21.1007 64.709 19.6717 64.709 18.0181C64.709 16.3514 65.0247 14.9159 65.6562 13.7114C66.2878 12.5005 67.1862 11.5695 68.3516 10.9185C69.5234 10.2674 70.9134 9.94189 72.5215 9.94189C74.1361 9.94189 75.526 10.2674 76.6914 10.9185C77.8568 11.5695 78.7552 12.5005 79.3867 13.7114C80.0182 14.9159 80.334 16.3514 80.334 18.0181C80.334 19.6717 80.0182 21.1007 79.3867 22.3052C78.7552 23.5096 77.8568 24.4373 76.6914 25.0884C75.526 25.7329 74.1361 26.0552 72.5215 26.0552ZM72.5215 22.686C73.2506 22.686 73.8105 22.2889 74.2012 21.4946C74.5918 20.7004 74.7871 19.5317 74.7871 17.9888C74.7871 16.4458 74.5918 15.2772 74.2012 14.4829C73.8105 13.6886 73.2506 13.2915 72.5215 13.2915C71.7923 13.2915 71.2324 13.6886 70.8418 14.4829C70.4512 15.2772 70.2559 16.4458 70.2559 17.9888C70.2559 19.5317 70.4512 20.7004 70.8418 21.4946C71.2324 22.2889 71.7923 22.686 72.5215 22.686Z"
      fill="white"
     />
     <path
      d="M83.8691 25.772V22.4028H86.7012V13.3989H84.9531L84.5625 16.6899H81.3398V10.2251H97.1406V16.6899H93.918L93.5273 13.3989H91.7793V22.4028H94.6113V25.772H83.8691Z"
      fill="white"
     />
     <path
      d="M98.1172 25.772V22.4028H99.7773V13.5942H98.1172V10.2251H106.516V13.5942H104.855V22.4028H106.516V25.772H98.1172Z"
      fill="white"
     />
     <path
      d="M107.668 25.772V22.4028H109.23V13.5942H107.668V10.2251H116.057C118.179 10.2251 119.781 10.6385 120.861 11.4653C121.942 12.2856 122.482 13.5161 122.482 15.1567C122.482 16.7453 121.945 17.9497 120.871 18.77C119.797 19.5838 118.225 19.9907 116.154 19.9907H114.191V22.4028H117.023V25.772H107.668ZM115.49 13.4966H114.191V17.0122H115.393C116.057 17.0122 116.555 16.8722 116.887 16.5923C117.219 16.3123 117.385 15.8664 117.385 15.2544C117.385 14.6359 117.222 14.1899 116.896 13.9165C116.577 13.6366 116.109 13.4966 115.49 13.4966Z"
      fill="white"
     />
     <path
      d="M131.447 26.0552C129.839 26.0552 128.449 25.7329 127.277 25.0884C126.112 24.4373 125.214 23.5096 124.582 22.3052C123.951 21.1007 123.635 19.6717 123.635 18.0181C123.635 16.3514 123.951 14.9159 124.582 13.7114C125.214 12.5005 126.112 11.5695 127.277 10.9185C128.449 10.2674 129.839 9.94189 131.447 9.94189C133.062 9.94189 134.452 10.2674 135.617 10.9185C136.783 11.5695 137.681 12.5005 138.312 13.7114C138.944 14.9159 139.26 16.3514 139.26 18.0181C139.26 19.6717 138.944 21.1007 138.312 22.3052C137.681 23.5096 136.783 24.4373 135.617 25.0884C134.452 25.7329 133.062 26.0552 131.447 26.0552ZM131.447 22.686C132.176 22.686 132.736 22.2889 133.127 21.4946C133.518 20.7004 133.713 19.5317 133.713 17.9888C133.713 16.4458 133.518 15.2772 133.127 14.4829C132.736 13.6886 132.176 13.2915 131.447 13.2915C130.718 13.2915 130.158 13.6886 129.768 14.4829C129.377 15.2772 129.182 16.4458 129.182 17.9888C129.182 19.5317 129.377 20.7004 129.768 21.4946C130.158 22.2889 130.718 22.686 131.447 22.686Z"
      fill="white"
     />
     <path
      d="M153.672 34.5737V0.564941H142.102V5.69189H145.469V29.4468H142.7V34.5737H153.672Z"
      fill="white"
     />
    </svg>
    <ItemFooter>
     <Pwhite>Política de Privacidad</Pwhite>
     <Pwhite>Términos y Condiciones</Pwhite>
     <Pwhite>Preguntas Frecuentes</Pwhite>
    </ItemFooter>
    <Pgrey>© 2023 MiEmpresa.com. Todos los derechos reservados.</Pgrey>
   </FooterDown>
  </ContainerFooter>
 );
};

export default Footer;
