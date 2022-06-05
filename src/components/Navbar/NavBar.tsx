import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import "./NavBar.scss";

// import logoSrc from "../../assets/love.svg";

const NavBar = () => {
  return (
    <NavBarWrapper>
      {/* TODO : тестовый компонент, переделать */}
      <StyledLink to="/" className={"navBarLink logoLink"}></StyledLink>
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
  padding: 10px 0;
  display: flex;
  flex-wrap: wrap;
  /* grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); */
  background-color: antiquewhite;
  justify-content: space-around;
`;
const StyledLink = styled(NavLink)`
  font-size: 16px;
  min-width: 100px;
  padding: 5px 0;
  text-decoration: none;
  color: black;

  &:hover {
    color: #7434fd;
  }

  &.active {
    color: red;
  }
`;
