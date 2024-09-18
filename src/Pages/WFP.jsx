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
            <h1 className="display-4 text-center">Types of Products :</h1>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-6">
            <nav className="navbar navbar-light">
              <div className="container-fluid">
                <h2 className="display-6">Products</h2>
                <form className="d-flex">
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    style={{ flexGrow: 1 }}
                  />
                  <button className="btn btn-outline-success" type="submit">
                    Search
                  </button>
                </form>
              </div>
            </nav>
          </div>
        </div>
      </div>
      <table class="table" style={{ marginTop: "50px" }}>
        <thead>
          <tr>
            <th scope="col">S.NO</th>
            <th scope="col">PRODUCT</th>
            <th scope="col">WATER FOOTPRINTS</th>
            <th scope="col">REGION</th>
            <th scope="col">WEATHER</th>
            <th scope="col">SOLUTION</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Chocolate</td>
            <td>70%</td>
            <td>West</td>
            <td>66 C</td>
            <td>grey water</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td colspan="2">Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default WFP;
