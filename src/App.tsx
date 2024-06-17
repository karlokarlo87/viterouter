import "./App.css";
import Header from "./conmpnents/content";
import Footer from "./conmpnents/footer";
import Content from "./conmpnents/content";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/header" element={<Header />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/content" element={<Content />} />
        </Routes>
      </BrowserRouter>
      <Outlet />
    </>
  );
}

export default App;
