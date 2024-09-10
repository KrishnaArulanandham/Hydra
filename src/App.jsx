import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import WFP from "./Pages/WFP";
import WMS from "./Pages/WMS.jsx";
import Header from "./Components/Header.jsx";
import Action from "./Components/Body.jsx";
import Footer from "./Components/Footer.jsx";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Action />
    </>
  );
}

export default App;
