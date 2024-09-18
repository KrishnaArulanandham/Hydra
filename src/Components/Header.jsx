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
            <h1 className={"text-primary"}>BLUENUAL</h1>
          </div>
        </div>
      </div>
      <div className="row">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">
              Navbar
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Link
                  </a>
                </li>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    MENU
                  </a>
                  <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li>
                      <a class="dropdown-item" href="Action">
                        Action
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="Another action">
                        Another action
                      </a>
                    </li>
                    <li>
                      <hr class="dropdown-divider" />
                    </li>
                    <li>
                      <a class="dropdown-item" href="Some">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link disabled"
                    href="#"
                    tabindex="-1"
                    aria-disabled="true"
                  >
                    Disabled
                  </a>
                </li>
                <li class="nav-item">
                  <Link
                    to={"/Register"}
                    className={"nav-link register"}
                    href="#"
                    tabindex="-1"
                    aria-disabled="true"
                    style={{ marginLeft: "450px" }}
                  >
                    Register
                  </Link>
                </li>
                <li class="nav-item">
                  <Link
                    to={"/LogIN"}
                    className={"nav-link login"}
                    href="#"
                    tabindex="-1"
                    aria-disabled="true"
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
