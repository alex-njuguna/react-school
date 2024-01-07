import { Link } from "react-router-dom";
import './Footer.css'

const Footer = () => {

  const currentYear = new Date().getFullYear()

  return (
    <div className="container-fluid shadow p-2 fixed-bottom">
      <div className="row">
        <div className="col-md-6 p-5">
          {/* Logo Section */}
          <Link to="/" className="text-decoration-none fw-bolder fs-3 m-auto p-4">
            <span className="text-dark">your</span>
            <span className="text-danger">logo</span>
          </Link>
        </div>
        <div className="col-md-6">
          {/* Links Section */}
          <div className="row">
            <div className="col-md-4">
              <h3 className="fw-bold fs-6">RESOURCES</h3><br />
              <Link to="/" className="text-decoration-none text-dark mb-2">Home</Link><br /><br />
              <Link to="/about" className="text-decoration-none text-dark mb-2">About</Link>
            </div>
            <div className="col-md-4">
              <h3 className="fw-bold fs-6">FOLLOW US</h3><br />
              <Link to="https://github.com" className="text-decoration-none text-dark mb-2" target="_blank" rel="noopener noreferrer">Github</Link><br /><br />
              <Link to="https://discord.com" className="text-decoration-none text-dark mb-2" target="_blank" rel="noopener noreferrer">Discord</Link>
            </div>
            <div className="col-md-4">
              <h3 className="fw-bold fs-6">LEGAL</h3><br />
              <Link to="/privacy-policy" className="text-decoration-none text-dark mb-2">Privacy Policy</Link><br /><br />
              <Link to="/terms-and-conditions" className="text-decoration-none text-dark mb-2">Terms & Conditions</Link>
            </div>
          </div>
        </div>
      </div>

      <hr />

      <div className="row">
        <div className="col-md-6">
          {/* Second Section Content */}
          <div className="p-2">
          <i className="fa-solid fa-copyright"></i>{currentYear} Alex Kinuthia. All Rights Reserved.
          </div>
        </div>
        <div className="col-md-6 ">
          {/* Second Section Content */}
          <Link to="#" className="text-primary">
            <i className="fab fa-facebook fa-lg social"></i>
          </Link>
          <Link to="#" className="text-primary">
            <i className="fab fa-twitter fa-lg social"></i>
          </Link>
          <Link to="#" className="text-dark">
            <i className="fab fa-github fa-lg social"></i>
          </Link>
          <Link to="#" className="text-info">
            <i className="fab fa-discord fa-lg social"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
