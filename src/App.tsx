import { Route, Routes } from "react-router";
import "./App.scss";
import NavBar from "./components/Navbar/NavBar";
import Page404 from "./pages/404";
import Page500 from "./pages/500";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import History from "./pages/History";
import Library from "./pages/Library";
import Main from "./pages/Main";
import News from "./pages/News";
import Playbill from "./pages/Playbill";
import Projects from "./pages/Projects";
import Support from "./pages/Support";
// import { CSSTransition } from "react-transition-group";
import "./assets/fonts/fonts.css";
import Footer from "./components/Footer/Footer";
interface IRoute {
  path: string;
  name?: string;
  Component: React.ComponentType;
}
const routes: IRoute[] = [
  { path: "/", name: "Любимовка", Component: Main },
  { path: "/playbill", name: "Афиша", Component: Playbill },
  { path: "/library", name: "Библиотека", Component: Library },
  { path: "/projects", name: "Проекты", Component: Projects },
  { path: "/history", name: "История", Component: History },
  { path: "/blog", name: "Блог", Component: Blog },
  { path: "/news", name: "Новости", Component: News },
  { path: "/about", name: "О фестивале", Component: About },
  { path: "/contact", name: "Контакты", Component: Contact },
  { path: "/support", name: "Поддержка", Component: Support },
  { path: "*", Component: Page404 },
  { path: "/500", Component: Page500 },
];

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        {routes.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
