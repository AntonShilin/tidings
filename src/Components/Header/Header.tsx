import * as React from "react";
import "./Header.scss";
import { NavLink } from "react-router-dom";
import { FaCaretSquareRight } from "react-icons/fa";
import { FiChevronsDown } from "react-icons/fi";
import HeaderSmallScreen from "../HeaderSmallScreen/HeaderSmallScreen";


class Header extends React.Component<{}, {}> {
  render() {
    return (
      <React.Fragment>
        <header className="container-xl d-lg-block d-md-block d-none">
          <div className="row logo">
            <div className="col-lg-6 col-md-6 logo-brand">
              <NavLink to="/titlenews" className="">
                Tidings
              </NavLink>
            </div>
            <div className="col-lg-6 col-md-6 logo-moto d-sm-none d-md-none d-lg-block">
              <p className="text-center">News... but not as you know it</p>
            </div>
          </div>
          <nav className="row">
            <div className="col">
              <NavLink to="/morenews" className="">
                <p className="text-center">News</p>
              </NavLink>
            </div>
            <div className="col">
              <NavLink to="/morebusiness" className="">
                <p className="text-center">Business</p>
              </NavLink>
            </div>
            <div className="col d-lg-block d-none">
              <NavLink to="/moreentertainment" className="">
                <p className="text-center">Entertainment</p>
              </NavLink>
            </div>
            <div className="col more">
              <div className="row">
                <div className="col-12">
                  <NavLink to="#" className="">
                    <p className="text-center">
                      More
                      <span className="">
                        <FiChevronsDown
                          style={{
                            fontSize: "1rem",
                            marginBottom: ".2rem",
                            marginLeft: ".1rem",
                          }}
                        />
                      </span>
                    </p>
                  </NavLink>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                <NavLink to="/moretech" className="">
                    <p className="text-center">Tech</p>
                  </NavLink>
                </div>
                <div className="col-12">
                <NavLink to="/morehealth" className="">
                    <p className="text-center">Health</p>
                  </NavLink>
                </div>
                <div className="col-12">
                <NavLink to="/morescience" className="">
                    <p className="text-center">Science</p>
                  </NavLink>
                </div>
                <div className="col-12">
                  <NavLink to="/moresport" className="">
                    <p className="text-center">Sport</p>
                  </NavLink>
                </div>
                <div className="col-12 d-md-block d-lg-none">
                  <NavLink to="/moreentertainment" className="">
                    <p className="text-center">Entertainment</p>
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="col trending">
              <NavLink to="/moretrending" className="">
                <p className="text-center">Trending</p>
              </NavLink>
            </div>
            <div className="col-auto p-0 search">
              <button className="">
                <FaCaretSquareRight
                  style={{ fontSize: "1.5rem", color: "#007bff" }}
                />
              </button>
            </div>
          </nav>
        </header>
        <HeaderSmallScreen />
      </React.Fragment>
    );
  }
}

export default Header;
