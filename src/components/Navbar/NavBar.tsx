import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavBar = () => {
  return (
    <NavBarWrapper>
      {/* TODO : тестовый компонент, переделать */}
      <StyledLink to="/"> {"<3"} </StyledLink>
      <StyledLink to="playbill">Афиша</StyledLink>
      <StyledLink to="library">Библиотека</StyledLink>
      <StyledLink to="projects">Проекты</StyledLink>
      <StyledLink to="history">История</StyledLink>
      <StyledLink to="blog">Блог</StyledLink>
      <StyledLink to="about">О фестивале</StyledLink>
      <StyledLink to="contact">Контакты</StyledLink>
      {/* обычные ссылки на соцсети */}
      <StyledLink to="support">+Поддержать</StyledLink>
    </NavBarWrapper>
  );
};
//  className={({ isActive }) => (isActive ? "a" : "b")}
// .attrs({ activeClassname: "anyClassName" })
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
  color: black;

  &.active {
    color: red;
  }
`;
