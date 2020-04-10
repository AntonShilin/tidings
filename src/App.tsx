import React from "react";
import "./App.scss";
import Header from "./Components/Header/Header";
import TitlePage from "./Components/TitlePage/TitlePage";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes/Routes";
import HeaderSmallScreen from "./Components/HeaderSmallScreen/HeaderSmallScreen";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <HeaderSmallScreen />
      <Routes />
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
