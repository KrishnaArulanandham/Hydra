import wfp from "../images/wfp1.png";

const WFP = () => {
  return (
    <>
      <div>
        <nav className="navbar navbar-light bg-light">
          <div className="container-fluid d-flex align-items-center">
            <div className="d-flex align-items-center">
              {/* Logo */}
              <img
                src={wfp}
                alt="wfp"
                width="150"
                className="d-inline-block align-top img-fluid"
              />
              {/* Title */}
              <h1
                className="d-inline-block ml-3"
                style={{
                  marginTop: "1rem",
                  fontSize: "2rem",
                }}
              >
                WATER FOOTPRINTS
              </h1>
            </div>
          </div>
        </nav>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-10" style={{ paddingBlock: "3rem" }}>
            <h1 class="display-6 text-center">Types of Products :</h1>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="col-7">
              <div class="input-group" style={{ width: "500px" }}>
                <span class="input-group-text" id="inputGroup-sizing-default">
                  Product Name
                </span>
                <input
                  type="text"
                  class="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-default"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WFP;
