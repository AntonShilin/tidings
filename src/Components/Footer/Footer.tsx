import * as React from "react";
import "./Footer.scss";

export interface FooterProps {}

export interface State {}

class Footer extends React.Component<FooterProps, State> {
  render() {
    return (
      <footer className="container mt-5">
        <div className="row">
          <div className="col-12">
            <p>© 2020 Newspapers</p>
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <a href="#">Contributors</a>
          </div>
          <div className="col-3">
            <a href="#">Newzit</a>
          </div>
          <div className="col-3">
            <a href="#">Daily Mail</a>
          </div>
          <div className="col-3">
            <a href="#">Terms and Conditions</a>
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <a href="#">Privacy Policy</a>
          </div>
          <div className="col-3">
            <a href="#">Don't sell my info</a>
          </div>
          <div className="col-3">
            <a href="#">Site map</a>
          </div>
          <div className="col-3">
            <a href="#">Contact Us</a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
