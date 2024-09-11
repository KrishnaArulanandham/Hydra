const WFP = ({}) => {
  return (
    <>
      <div className="text-center">
        <div className="wf1">
          <img
            className="col-3 d-flex justify-content-end"
            src="wfp.jpg"
            style={{ width: "100px" }}
          />
          <h2>WATER FOOTPRINTS</h2>
        </div>
      </div>
      <div className="input">
        <p className="lbl1">Types of Products :</p>
        <input
          type="text"
          placeholder="Enter item name"
          style={{ width: "400px", height: "40px" }}
        />
      </div>
    </>
  );
};
export default WFP;
