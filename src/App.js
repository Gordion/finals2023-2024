import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./components/homepage";
import Map from "./components/map";
import Layout from "./components/layout";
import Footer from "./components/footer";
import Touroute from "./components/touroute";
import Loginuser from "./components/login-user";
import AdminPage from "./components/admin-page";
import Secondary from "./components/secondary";
import News from "./components/news";
import brain from "brain.js";
import brainModel from "./models/brain_model.json";
import { createNeuralNetwork } from "./utils/neuralNetwork";
import DND from "./components/dnd";
function App() {
  // React.useEffect(() => {
  //   const neuralNetwork = createNeuralNetwork();
  //   const trainedNetwork = neuralNetwork.fromJSON(brainModel);
  //   console.log(
  //     trainedNetwork.run({ woods: 1, hills: 0.1, lakes: 0.5, animals: 0.8 })
  //   );
  // }, []);
  // console.log("username", userName);

  // console.log("user", user);

  React.useEffect(() => {
    const neuralNetwork = createNeuralNetwork();
    const trainedNetwork = neuralNetwork.fromJSON(brainModel);
    console.log(
      trainedNetwork.run({ woods: 1, hills: 0.1, lakes: 0.5, animals: 0.8 })
    );
  }, []);

  let user = JSON.parse(localStorage.getItem("user"));
  const [userName, setUserName] = useState(user?.name);
  const onLogout = () => {
    localStorage.removeItem("user");
  };
  return (
    <div className="App">
      <BrowserRouter>
        <Layout />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/map" element={<Map />} />
          <Route path="/touroute" element={<Touroute />} />
          <Route path="/news" element={<News />} />
          <Route path="/secondary" element={<Secondary />} />
          <Route path="/dnd" element={<DND />} />
          <Route
            path="/login-user"
            element={<Loginuser />}
            onLogin={setUserName}
            onLogout={onLogout}
          />
          <Route path="/admin-page" element={<AdminPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
