import React, { useState } from "react";
import styled from "styled-components";
import dropdown from "../assets/dropdown.svg";
import logo from "../assets/logo.svg";
import {
 Container,
 Navbar,
 Logo,
 NavLinks,
 NavLink,
 MobileMenuButton,
 MobileMenu,
 MobileNavLink
} from "./styleComponents/Navbar.style";

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
    <MobileNavLink>Como funciona</MobileNavLink>
    <MobileNavLink>Productos</MobileNavLink>
    <MobileNavLink>Preguntas frecuentes</MobileNavLink>
   </MobileMenu>
  </Container>
 );
};

export default NavbarComponent;
