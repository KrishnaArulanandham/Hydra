const Footer = ({}) => {
  var today = new Date();
  return (
    <>
      <footer className="ftcontainer2">
        <div className="row justify-content-center mt-3 mb-4">
          <div className="col-8">
            <h5>Agro Water Foot Prints - {today.getFullYear()}</h5>
            <p>
              Thanks to cisit our Website to know and get idea about WATER
              FOOTPRINTS
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
