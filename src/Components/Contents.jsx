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
                  and processing. <br />
                  <br />{" "}
                  <a href="https://www.repsol.com/en/energy-and-the-future/future-of-the-world/water-footprint/index.cshtml#:~:text=A%20water%20footprint%20is%20an,activity%20and%20obtain%20objective%20data.">
                    What do you mean by water footprints ?
                  </a>
                </article>
              </div>
            </details>
          </div>
          <div className="justify-content-md-center">
            <details className="fqa">
              <summary className={"col-3 text-center"}>
                Why is the water footprint important ?
              </summary>

              <div className="row">
                {" "}
                <article className={"col-7 atc"}>
                  It helps understand how water is used in production and
                  consumption, promoting sustainable water management and
                  raising awareness of water conservation. <br />
                  <br />
                  <a href="https://altogethergroup.com.au/about/news-media/reducing-water-footprint-tips-for-saving-water/#:~:text=By%20using%20less%20water%2C%20we,means%20less%20energy%20is%20wasted.">
                    Why do we need to reduce our water footprint?
                  </a>
                </article>
              </div>
            </details>
          </div>
          <div className={"justify-content-md-center"}>
            <details className="fqa">
              <summary className={"col-4 text-center"}>
                What are the types of water footprints?
              </summary>

              <div className="row">
                {" "}
                <article className={"col-7 atc"}>
                  There are three types: blue water (surface and groundwater
                  used), green water (rainwater stored in the soil and used by
                  plants), and grey water (water required to dilute pollutants
                  to meet water quality standards). <br />
                  <br />
                  <a href="https://www.suverimliligi.gov.tr/en/water-footprint/#:~:text=Components%20of%20the%20Water%20Footprint,represent%20water%20use%20and%20quality.">
                    What are the three components of the water footprint?
                  </a>
                </article>
              </div>
            </details>
          </div>
          <div className={"justify-content-md-center"}>
            <details className="fqa">
              <summary className={"col-3 text-center"}>
                How is the water footprint calculated?
              </summary>

              <div className="row">
                {" "}
                <article className={"col-7 atc"}>
                  It is calculated by summing up the volume of water used in the
                  various stages of production for a specific product or
                  service, considering blue, green, and grey water. <br />
                  <br />
                  <a href="https://www.waterfootprint.org/water-footprint-2/what-is-a-water-footprint/#:~:text=The%20water%20footprint%20measures%20the,an%20entire%20multi%2Dnational%20company.">
                    How is water footprint measured?
                  </a>
                </article>
              </div>
            </details>
          </div>
          <div className={"justify-content-md-center"}>
            <details className="fqa">
              <summary className={"col-4 text-center"}>
                Example of a product with a high water footprint?
              </summary>

              <div className="row">
                <article className={"col-7 atc"}>
                  A single cotton T-shirt can require about 2,700 liters of
                  water throughout its production process, including growing
                  cotton, dyeing, and processing. <br />
                  <br />
                  <a href="https://foodprint.org/blog/what-you-eat-has-a-water-footprint/#:~:text=Dairy%2C%20and%20especially%20meat%2C%20tend,the%20feed%20an%20animal%20eats.">
                    What products have the highest water footprint?
                  </a>
                </article>
              </div>
            </details>
          </div>
          <div className={"justify-content-md-center"}>
            <details className="fqa">
              <summary className={"col-4 text-center"}>
                How can individuals reduce their water footprint?
              </summary>

              <div className="row">
                {" "}
                <article className={"col-7 atc"}>
                  By consuming less water-intensive products, reducing meat
                  consumption, minimizing waste, using water-efficient
                  appliances, and supporting sustainable practices. <br />
                  <br />
                  <a href="https://en.reset.org/save-water-reduce-your-water-footprint/">
                    How to reduce your water footprint
                  </a>
                </article>
              </div>
            </details>
          </div>
          <div className={"justify-content-md-center"}>
            <details className="fqa">
              <summary className={"col-6 text-center"}>
                What is the difference between water footprint and virtual
                water?
              </summary>

              <div className="row">
                {" "}
                <article className={"col-7 atc"}>
                  A water footprint includes all water used in the production
                  and consumption of goods, while virtual water refers to the
                  hidden water embedded in traded goods and services. <br />
                  <br />
                  <a href="https://www.ijert.org/water-footprint-and-virtual-water#:~:text=Virtual%20water%20helps%20us%20realize,variety%20of%20goods%20and%20services.">
                    What is a water footprint and virtual water?
                  </a>
                </article>
              </div>
            </details>
          </div>
          <hr style={{ marginTop: "rem" }} />
        </div>
      </div>
    </>
  );
};
export default Content;
