import React, { useState } from "react";
import styled from "styled-components";
import dropdown from "../assets/dropdown.svg";
import logo from "../assets/logo.svg";
const Container = styled.div`
 width: 100%;
 border-bottom: 0.5px solid #1b2845;
 display: flex;
 justify-content: center;
 position: fixed;
 background-color: #ffffff;
`;
const Navbar = styled.nav`
 position: relative;
 height: 77px;
 width: 1444px;
 display: flex;
 justify-content: space-between;
 align-items: center;
 z-index: 100;
 padding: 0px;
`;

const Logo = styled.img`
 width: 153.34px;
 height: 34.01px;
 margin-left: 100px;
 @media (max-width: 768px) {
  margin-left: 20px;
 }
`;

const NavLinks = styled.ul`
 list-style: none;
 display: flex;
 margin-right: 100px;
`;

const NavLink = styled.li`
 margin-right: 40px;
 color: #1b2845;
 font-size: 16px;
 font-family: "Mukta", sans-serif;
 font-weight: 600;
 line-height: 26.59px;
 cursor: pointer;
 @media (max-width: 768px) {
  display: none;
 }
`;

const MobileMenuButton = styled.div`
 display: none;
 cursor: pointer;
 color: #1b2845;
 font-size: 24px;
 margin-right: 20px;

 @media (max-width: 768px) {
  display: block;
 }
`;

const MobileMenu = styled.div`
 display: none;

 @media (max-width: 768px) {
  display: ${props => (props.isOpen ? "block" : "none")};
  background-color: #ffffff;
  position: absolute;
  text-align: center;
  top: 77px;
  left: 0;
  width: 100%;
  z-index: 99;
  border-bottom: 0.5px solid #1b2845;
 }
`;

const MobileNavLink = styled(NavLink)`
 margin-right: 0;
 margin-top: 20px;
 display: block;
 @media (max-width: 768px) {
  display: block;
 }
`;

const NavbarComponent = () => {
 const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

 const toggleMobileMenu = () => {
  setIsMobileMenuOpen(!isMobileMenuOpen);
 };

 return (
  <Container>
   <Navbar>
    <Logo src={logo} />
    <NavLinks>
     <NavLink>Como funciona</NavLink>
     <NavLink>Productos</NavLink>
     <NavLink>Preguntas frecuentes</NavLink>
    </NavLinks>
    <MobileMenuButton onClick={toggleMobileMenu}>
     <img src={dropdown} />
    </MobileMenuButton>
   </Navbar>
   <MobileMenu isOpen={isMobileMenuOpen}>
    <MobileNavLink>Enlace 1</MobileNavLink>
    <MobileNavLink>Enlace 2</MobileNavLink>
    <MobileNavLink>Enlace 3</MobileNavLink>
   </MobileMenu>
  </Container>
 );
};

export default NavbarComponent;
