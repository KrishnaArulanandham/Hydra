const WFP = ({}) => {
  return (
    <>
      <div>
        <div className="pic">
          <img
            className="row justify-content-center mt-3 mb-4"
            src="wfp.jpg"
            style={{ width: "300px" }}
          />
        </div>
        <div className="text-center">
          <h2 className="head2">WATER FOOTPRINTS</h2>
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
