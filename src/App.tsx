import React from "react";
import "./App.scss";
import Header from "./Components/Header/Header";
import TitlePage from "./Components/TitlePage/TitlePage";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Reducers/Routes";
import HeaderSmallScreen from "./Components/HeaderSmallScreen/HeaderSmallScreen";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <HeaderSmallScreen />
      <Routes />
    </BrowserRouter>
  );
}

export default App;
