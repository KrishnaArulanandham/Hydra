import React from "react";
import { Link } from "react-router-dom";

const Action = ({}) => {
  return (
    <>
      <div className="container">
        <section class="content">
          <div class="featured">
            <div class="feature-item">
              <Link to={"/WFP"} className="wfp">
                Water Footprints
              </Link>
              <p>
                Description of service 1. <a href="#">Learn more</a>
              </p>
            </div>
            <div class="feature-item">
              <Link to={"/WMS"} className="wms">
                Water Management
              </Link>

              <p>
                Description of service 2. <a href="#">Learn more</a>
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Action;
