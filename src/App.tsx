import "./App.css";
import Header from "./conmpnents/content";
import Footer from "./conmpnents/footer";
import Content from "./conmpnents/content";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/header" element={<Header />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/content" element={<Content />} />
      </Routes>
    </>
  );
}

export default App;
