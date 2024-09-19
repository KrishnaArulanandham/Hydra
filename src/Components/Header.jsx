import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import ft from "../images/foot12.png";
import bg from "../images/agri.jpeg";
import { DropdownItem } from "react-bootstrap";
const Header = ({ selectedMenu, handleMenuSelectionChange }) => {
  const navigate = useNavigate(); // Hook to navigate programmatically

  const onMenuChange = (event) => {
    const selectedValue = event.target.value;
    handleMenuSelectionChange(selectedValue); // Update the selected menu in the parent component
    if (selectedValue === "About") {
      navigate("/About");
    } else {
      // For internal anchors, you might want to scroll to the section
      window.location.hash = selectedValue.toLowerCase();
    }
  };

  return (
    <header>
      <div className="container1">
        <div className="justify-content-between align-items-center mt-3 mb-4">
          <img src={bg} class="img-fluid" alt="BG" />
          <div className="text-center">
            <h1 className={"text-success"}>BLUENUAL</h1>
          </div>
        </div>
      </div>
      <div className="row">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#"></a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    <Link to={"/"}>Home</Link>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Link
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    MENU
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link disabled"
                    href="#"
                    tabindex="-1"
                    aria-disabled="true"
                  >
                    Disabled
                  </a>
                </li>
                <li className="nav-item">
                  <Link
                    to={"/Register"}
                    className="nav-link register"
                    style={{ marginLeft: "450px" }}
                  >
                    Register
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to={"/LogIN"}
                    className="nav-link login"
                    style={{ marginLeft: "30px" }}
                  >
                    Log In
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
