import "./App.css";
import Header from "./conmpnents/header";
import Footer from "./conmpnents/footer";
import Content from "./conmpnents/content";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index path="/header" element={<Header />} />
            <Route path="/footer" element={<Footer />} />
            <Route path="/content" element={<Content />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
