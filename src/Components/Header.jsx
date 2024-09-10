import React from "react";
import { Link } from "react-router-dom";

const Header = ({ selectedMenu, handleMenuSelectionChange }) => {
  return (
    <header className="container1">
      <div className="row justify-content-center mt-3 mb-4">
        <div className="col-8">
          <h1 className="head">BLUENUAL</h1>
        </div>
        <div className="col-3 d-flex justify-content-end">
          <div className="containment">
            <select
              className="form-select form-select-lg"
              value={selectedMenu}
              onChange={handleMenuSelectionChange}
            >
              {/* using select to make selection button for group of members */}
              <option value="Home">
                {" "}
                <li>
                  <a href="#home">Home</a>
                </li>
              </option>
              <option value="About">
                <Link to={"/About"}>About</Link>
              </option>
              <option value="Services">
                <li>
                  <a href="#services">Services</a>
                </li>
              </option>
              <option value="Contact">
                {" "}
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </option>
            </select>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
