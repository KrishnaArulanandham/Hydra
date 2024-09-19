import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Header from "./Components/Header.jsx";
import Action from "./Components/Body.jsx";
import Content from "./Components/Contents.jsx";
import Footer from "./Components/Footer.jsx";

const App = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    // Fetch data from the Flask API
    fetch("http://localhost:5000/api/data")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <>
      <div>
        <h1>Data from MySQL</h1>
        <ul>
          {data.map((item) => (
            <li key={item.id}>
              {item.name}: {item.value}
            </li> // Adjust based on your data structure
          ))}
        </ul>
      </div>
      <Header />
      <Action />
      <Content />
      <Footer />
    </>
  );
};

export default App;
