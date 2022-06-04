import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import "./NavBar.css";

const NavBar = () => {
  return (
    <NavBarWrapper>
      {/* TODO : тестовый компонент, переделать */}
      <StyledLink to="test1">1</StyledLink>
      <StyledLink to="test2">2</StyledLink>
      <StyledLink to="main">Main</StyledLink>
      <StyledLink to="about/page">About</StyledLink>
      <StyledLink to="news">News</StyledLink>
    </NavBarWrapper>
  );
};

export default NavBar;

const NavBarWrapper = styled.nav`
  width: 100%;
  display: flex;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  background-color: antiquewhite;
  justify-content: space-around;
`;

const StyledLink = styled(NavLink)`
  font-size: 20px;
  min-width: 100px;
  text-decoration: none;
`;
