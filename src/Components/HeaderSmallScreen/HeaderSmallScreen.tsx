import * as React from "react";
import { NavLink } from "react-router-dom";
import "./HeaderSmallScreen.scss";

export interface Props {}

export interface State {}

class HeaderSmallScreen extends React.Component<Props, State> {
  render() {
    return (
      <React.Fragment>
      <div className="container d-xs-block d-sm-block d-md-none d-lg-none menu_xs_screen">
        <nav className="row">
          <div className="col-3">
            <a href="#">
              <p className="text-center">Tidings</p>
            </a>
          </div>
          <div className="col-3">
            <a href="#">
              <p className="text-center">News</p>
            </a>
          </div>
          <div className="col-3">
            <a href="#">
              <p className="text-center">Sport</p>
            </a>
          </div>
          <div className="col-3">
            <a href="#">
              <p className="text-center">All</p>
            </a>
          </div>
        </nav>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">1</div>
            <div className="col-12 text-center">1</div>
            <div className="col-12 text-center">1</div>
            <div className="col-12 text-center">1</div>
          </div>
        </div>
        </React.Fragment>
    );
  }
}

export default HeaderSmallScreen;
