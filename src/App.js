import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./components/homepage";
import Map from "./components/map";
import Layout from "./components/layout";
import Footer from "./components/footer";
import Touroute from "./components/touroute";

function App() {
  return (
    <div className="App">
      {/* <Homepage /> */}
      <BrowserRouter>
        <Layout />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/map" element={<Map />} />
          <Route path="/touroute" element={<Touroute />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
