import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Header from "./Components/Header.js";
import Action from "./Components/Body.js";
import Content from "./Components/Contents.js";
import Footer from "./Components/Footer.js";
const App = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Action />
      <Content />
      <Footer />
    </>
  );
};

export default App;
