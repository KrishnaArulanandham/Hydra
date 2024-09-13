import wfp from "../images/wfp1.png";

const WFP = ({}) => {
  return (
    <>
      <nav class="navbar navbar-light bg-light">
        <div class="container-fluid">
          <img
            src={wfp}
            alt=""
            width="300"
            height=""
            class="d-inline-block align-text-top"
          />{" "}
          <div className="navbar-brand">
            <h1 className="text-center">WATER FOOTPRINTS</h1>
          </div>
          <div className="row">
            <div className="justify-content-center"></div>
          </div>
        </div>
      </nav>
    </>
  );
};
export default WFP;
