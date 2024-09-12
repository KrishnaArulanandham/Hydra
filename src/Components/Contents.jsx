const Content = ({}) => {
  return (
    <>
      <div></div>
      <div>
        <div className="col-12 text-center">
          <h4
            className="text-light bg-dark"
            style={{ paddingTop: "1rem", paddingBottom: "1rem" }}
          >
            FAQ
          </h4>
        </div>
        <div
          className="row justify-content-between align-items-center mt-3 mb-4"
          style={{ paddingBottom: "10rem" }}
        >
          <div className="justify-content-md-center">
            <details className="fqa">
              <summary className="col-3 text-center">
                What is Water footprints ?
              </summary>

              <div className="row">
                {" "}
                <article className={"col-7 atc"}>
                  A water footprint measures the total volume of freshwater used
                  to produce goods and services consumed by an individual,
                  community, or business. For example, producing one kilogram of
                  beef can require around 15,000 liters of water, including
                  water for growing animal feed, drinking water for livestock,
                  and processing.
                </article>
              </div>
            </details>
          </div>
          <div className="justify-content-md-center">
            <details className="fqa">
              <summary
                className={"col-3 text-center"}
                style={{ marginLeft: "52px" }}
              >
                Why is the water footprint important ?
              </summary>

              <div className="row">
                {" "}
                <article className={"col-7 atc"}>
                  It helps understand how water is used in production and
                  consumption, promoting sustainable water management and
                  raising awareness of water conservation.
                </article>
              </div>
            </details>
          </div>
          <div className={"justify-content-md-center"}>
            <details className="fqa">
              <summary
                className={"col-3 text-center"}
                style={{ marginLeft: "59px" }}
              >
                What are the types of water footprints?
              </summary>

              <div className="row">
                {" "}
                <article className={"col-7 atc"}>
                  There are three types: blue water (surface and groundwater
                  used), green water (rainwater stored in the soil and used by
                  plants), and grey water (water required to dilute pollutants
                  to meet water quality standards).
                </article>
              </div>
            </details>
          </div>
          <div className={"justify-content-md-center"}>
            <details className="fqa">
              <summary
                className={"col-3 text-center"}
                style={{ marginLeft: "54px" }}
              >
                How is the water footprint calculated?
              </summary>

              <div className="row">
                {" "}
                <article className={"col-7 atc"}>
                  It is calculated by summing up the volume of water used in the
                  various stages of production for a specific product or
                  service, considering blue, green, and grey water.
                </article>
              </div>
            </details>
          </div>
          <div className={"justify-content-md-center"}>
            <details className="fqa">
              <summary
                className={"col-5 text-center"}
                style={{ marginLeft: "30px" }}
              >
                What is an example of a product with a high water footprint?
              </summary>

              <div className="row">
                {" "}
                <article className={"col-7 atc"}>
                  A single cotton T-shirt can require about 2,700 liters of
                  water throughout its production process, including growing
                  cotton, dyeing, and processing.
                </article>
              </div>
            </details>
          </div>
          <div className={"justify-content-md-center"}>
            <details className="fqa">
              <summary
                className={"col-4 text-center"}
                style={{ marginLeft: "43px" }}
              >
                How can individuals reduce their water footprint?
              </summary>

              <div className="row">
                {" "}
                <article className={"col-7 atc"}>
                  By consuming less water-intensive products, reducing meat
                  consumption, minimizing waste, using water-efficient
                  appliances, and supporting sustainable practices.
                </article>
              </div>
            </details>
          </div>
          <div className={"justify-content-md-center"}>
            <details className="fqa">
              <summary
                className={"col-5 text-center"}
                style={{ marginLeft: "52px" }}
              >
                What is the difference between water footprint and virtual
                water?
              </summary>

              <div className="row">
                {" "}
                <article className={"col-7 atc"}>
                  A water footprint includes all water used in the production
                  and consumption of goods, while virtual water refers to the
                  hidden water embedded in traded goods and services.
                </article>
              </div>
            </details>
          </div>
        </div>
      </div>
    </>
  );
};
export default Content;
