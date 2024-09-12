import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Header from "./Components/Header.jsx";
import Action from "./Components/Body.jsx";
import Content from "./Components/Contents.jsx";
import Footer from "./Components/Footer.jsx";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Action />
      <Content />
      <Footer />
    </>
  );
}

export default App;
