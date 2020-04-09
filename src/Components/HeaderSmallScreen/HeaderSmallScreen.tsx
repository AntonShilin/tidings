import * as React from "react";
import { NavLink } from "react-router-dom";
import { FiChevronsDown } from "react-icons/fi";
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
                <p className="text-center">
                  All{" "}
                  <span>
                    <FiChevronsDown
                      style={{
                        fontSize: "1rem",
                        marginBottom: ".2rem",
                        marginLeft: ".1rem",
                      }}
                    />
                  </span>
                </p>
              </a>
            </div>
          </nav>
        </div>
        <div className="container menu_all_xs_screen d-xs-block d-sm-block d-md-none d-lg-none">
          <nav className="row">
            <div className="col-12 text-center">
              <a href="#">
                <p className="text-center">Business</p>
              </a>
            </div>
            <div className="col-12 text-center">
              <a href="#">
                <p className="text-center">Entertainment</p>
              </a>
            </div>
            <div className="col-12 text-center">
              <a href="#">
                <p className="text-center">Technology</p>
              </a>
            </div>
            <div className="col-12 text-center">
              <a href="#">
                <p className="text-center">Science</p>
              </a>
            </div>
            <div className="col-12 text-center">
              <a href="#">
                <p className="text-center">Health</p>
              </a>
            </div>
          </nav>
        </div>
      </React.Fragment>
    );
  }
}

export default HeaderSmallScreen;
