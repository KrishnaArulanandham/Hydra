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
import WFP from "./WFP";
import WMS from "./WMS.JSX";
import Header from "./Header";
import Action from "./Body";
import Footer from "./Footer";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/wfp" element={<WFP />} />

          <Route exact path="/wms" element={<WMS />} />

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
      <Header />
      <Action />
      <Footer />
    </>
  );
}

export default App;
