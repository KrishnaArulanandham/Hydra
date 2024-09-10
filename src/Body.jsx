import React from "react";
import { Link } from "react-router-dom";

const Action = ({}) => {
  return (
    <>
      <div className="container">
        <section class="content">
          <h2>Featured Services</h2>
          <div class="featured">
            <div class="feature-item">
              <h3>
                <a href="WFP.jsx">WATER FOOTPRINTS</a>
              </h3>
              <p>
                Description of service 1. <a href="#">Learn more</a>
              </p>
            </div>
            <div class="feature-item">
              <h3>
                <a href="WMS.jsx">WATER MANAGEMENT</a>
              </h3>
              <p>
                Description of service 2. <a href="#">Learn more</a>
              </p>
            </div>
            <div class="feature-item">
              <h3>Service 3</h3>
              <p>
                Description of service 3. <a href="#">Learn more</a>
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Action;
