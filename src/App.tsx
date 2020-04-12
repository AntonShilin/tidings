import React from "react";
import "./App.scss";
import Header from "./Components/Header/Header";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes/Routes";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
      <BrowserRouter>
        <Header />
        <Routes />
        <Footer />
      </BrowserRouter>
  );
}

export default App;
