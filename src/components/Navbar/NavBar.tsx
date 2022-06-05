import { NavLink } from "react-router-dom";
import "./NavBar.scss";

// import logoSrc from "../../assets/love.svg";
interface ILink {
  link: string;
  className: string;
  title: string;
  id: number;
}
const links: ILink[] = [
  { link: "/", className: "logoLink", title: "", id: 0 },
  { link: "playbill", className: "", title: "Афиша", id: 1 },
  { link: "library", className: "", title: "Библиотека", id: 2 },
  { link: "projects", className: "", title: "Проекты", id: 3 },
  { link: "history", className: "", title: "История", id: 4 },
  { link: "blog", className: "", title: "Блог", id: 5 },
  { link: "about", className: "", title: "О фестивале", id: 6 },
  { link: "contact", className: "", title: "Контакты", id: 7 },
  { link: "support", className: "", title: "+Поддержать", id: 8 },
];

const NavBar = () => {
  return (
    <nav className="NavBar">
      {links.map((item) => {
        return (
          <NavLink key={item.id} to={item.link} className={`NavBar__link ${item.className}`}>
            <div className="border borderLeft"></div>
            {item.title}
            <div className="border borderRight"></div>
          </NavLink>
        );
      })}
    </nav>
  );
};

export default NavBar;
