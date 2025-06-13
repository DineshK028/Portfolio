import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';

const theme = {
  primary: '#007bff',
  primaryDark: '#0056b3',
  secondary: '#6c757d',
  background: '#2d2d2d',
  text: '#ffffff',
  lightText: '#b3b3b3',
  white: '#ffffff',
  cardBg: '#2d2d2d',
  hoverBg: '#3d3d3d',
  border: '#404040'
};

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: ${theme.background};
  padding: 1rem 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  border-bottom: 1px solid ${theme.border};
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${theme.primary};
  transition: all 0.3s ease;

  &:hover {
    color: ${theme.primaryDark};
    transform: translateY(-2px);
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
`;

const NavLink = styled(Link)`
  cursor: pointer;
  color: ${theme.text};
  font-weight: 500;
  transition: all 0.3s ease;
  padding: 0.5rem 1rem;
  border-radius: 5px;

  &:hover {
    color: ${theme.primary};
    background-color: ${theme.hoverBg};
  }

  &.active {
    color: ${theme.primary};
    background-color: ${theme.hoverBg};
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <NavContainer>
        <Logo>DK</Logo>
        <NavLinks>
          <NavLink to="home" smooth={true} duration={500}>Home</NavLink>
          <NavLink to="about" smooth={true} duration={500}>About</NavLink>
          <NavLink to="projects" smooth={true} duration={500}>Projects</NavLink>
          <NavLink to="contact" smooth={true} duration={500}>Contact</NavLink>
        </NavLinks>
      </NavContainer>
    </Nav>
  );
};

export default Navbar; 