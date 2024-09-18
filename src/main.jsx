import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
//import "./index.css";
import "./scss/styles.scss";
import "bootstrap/dist/css/bootstrap.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import WFP from "./Pages/WFP.jsx";
import WMS from "./Pages/WMS.jsx";
import About from "./Pages/About.jsx";
import Register from "./Pages/Register.jsx";
import LogIn from "./Pages/LogIn.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "WFP",
    element: <WFP />,
  },
  {
    path: "WMS",
    element: <WMS />,
  },
  {
    path: "About",
    element: <About />,
  },
  {
    path: "Register",
    element: <Register />,
  },
  {
    path: "LogIn",
    element: <LogIn />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
