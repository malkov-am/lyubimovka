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
interface IRoute {
  path: string;
  Component: React.ComponentType;
}
const routes: IRoute[] = [
  { path: "/", Component: Main },
  { path: "/playbill", Component: Playbill },
  { path: "/library", Component: Library },
  { path: "/projects", Component: Projects },
  { path: "/history", Component: History },
  { path: "/blog", Component: Blog },
  { path: "/news", Component: News },
  { path: "/about", Component: About },
  { path: "/contact", Component: Contact },
  { path: "/support", Component: Support },
  { path: "/400", Component: Page404 },
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
    </div>
  );
}

export default App;
