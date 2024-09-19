import React from "react";
import { Link } from "react-router-dom";
import wfp from "../images/wfp.jpg";
import wms from "../images/wm.jpeg";

const Action = ({}) => {
  return (
    <>
      <div className={"container"} style={{ paddingBottom: "3rem" }}>
        <section class="content">
          <div class="featured">
            <div class="feature-item">
              <div style={{ paddingBottom: "1.5rem" }}>
                <img src={wfp} alt="wfp" style={{ width: "200px" }} />
              </div>

              <Link to={"/WFP"} className="wfp">
                <button className="btn btn-primary"> Water Footprints</button>
              </Link>
              <p style={{ paddingTop: "2rem" }}>
                Description of service 1.{" "}
                <a href="https://en.wikipedia.org/wiki/Water_footprint">
                  Learn more
                </a>
              </p>
            </div>
            <div class="feature-item">
              <div style={{ paddingBottom: "1.5rem" }}>
                <img src={wms} alt="wms" style={{ width: "120px" }} />
              </div>
              <Link to={"/WMS"} className="wms">
                <button className="btn btn-primary"> Water Management</button>
              </Link>

              <p style={{ paddingTop: "2rem" }}>
                Description of service 2.{" "}
                <a href="https://en.wikipedia.org/wiki/Category:Water_management">
                  Learn more
                </a>
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Action;
