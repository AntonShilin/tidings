import * as React from "react";
import "./Header.scss";
import { NavLink } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import HeaderSmallScreen from "../HeaderSmallScreen/HeaderSmallScreen";

export interface Props {}

export interface State {}

class Header extends React.Component<Props, State> {
  render() {
    return (
      <React.Fragment>
        <div className="container d-lg-block d-md-block d-none">
          <div className="row logo">
            <div className="col-lg-6 col-md-6 logo-brand">
              <p className="text-start">Tidings</p>
            </div>
            <div className="col-lg-6 col-md-6 logo-moto d-sm-none d-md-none d-lg-block">
              <p className="text-center">News... but not as you know it</p>
            </div>
          </div>
          <nav className="row">
            <div className="col">
              <a className="">
                <p className="text-center">News</p>
              </a>
            </div>
            <div className="col">
              <a className="">
                <p className="text-center">Business</p>
              </a>
            </div>
            <div className="col d-lg-block d-none">
              <a className="">
                <p className="text-center">Entertainment</p>
              </a>
            </div>
            <div className="col more">
              <div className="row">
                <div className="col-12">
                  <a className="">
                    <p className="text-center">More</p>
                  </a>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <a className="">
                    <p className="text-center">Technology</p>
                  </a>
                </div>
                <div className="col-12">
                  <a className="">
                    <p className="text-center">Health</p>
                  </a>
                </div>
                <div className="col-12">
                  <a className="">
                    <p className="text-center">Science</p>
                  </a>
                </div>
                <div className="col-12">
                  <a className="">
                    <p className="text-center">Sports</p>
                  </a>
                </div>
                <div className="col-12 d-md-block d-lg-none">
                  <a className="">
                    <p className="text-center">Entertainment</p>
                  </a>
                </div>
              </div>
            </div>
            <div className="col trending">
              <a className="">
                <p className="text-center">Trending</p>
              </a>
            </div>
            <div className="col-auto p-0 search">
              <button className="">
                <FaSearch style={{ fontSize: "1.5rem" }} />
              </button>
            </div>
          </nav>
        </div>
        <HeaderSmallScreen/>
      </React.Fragment>
    );
  }
}

export default Header;
