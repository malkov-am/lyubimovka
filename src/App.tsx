import { Route, Routes } from "react-router";
import "./App.css";
import NavBar from "./components/Navbar/NavBar";
import Test1 from "./pages/Test1";
import Test2 from "./pages/Test2";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/test1" element={<Test1 />}></Route>
        <Route path="/test2" element={<Test2 />}></Route>
      </Routes>
    </div>
  );
}

export default App;
