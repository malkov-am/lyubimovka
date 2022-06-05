import { Route, Routes } from "react-router";
import "./App.css";
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
// import Test1 from "./pages/Test1";
// import Test2 from "./pages/Test2";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        {/* basic route */}
        <Route path="/" element={<Main />}></Route>
        <Route path="/playbill" element={<Playbill />}></Route>
        <Route path="/library" element={<Library />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/history" element={<History />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/news" element={<News />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/support" element={<Support />}></Route>
        <Route path="/404" element={<Page404 />}></Route>
        <Route path="/500" element={<Page500 />}></Route>
      </Routes>
    </div>
  );
}

export default App;
