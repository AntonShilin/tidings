import * as React from "react";
import { NavLink } from "react-router-dom";
import { FiChevronsDown } from "react-icons/fi";
import "./HeaderSmallScreen.scss";
import { connect } from "react-redux";
import { toggleSmallScreenMenu } from "../../Actions/Actions";

export interface HeaderSmScreenProps {
  toggleSmallScreenMenu: typeof toggleSmallScreenMenu;
}

export interface State {}

class HeaderSmallScreen extends React.Component<HeaderSmScreenProps, State> {
  private submenu = React.createRef<HTMLDivElement>();


  render() {
    return (
      <div className="container">
          <nav className="row main-menu-xs-screen">
            <div className="col-4">
              <NavLink to="/titlenews" className="">
                <p className="text-center">Tidings</p>
              </NavLink>
            </div>
            <div className="col-3">
              <NavLink to="/morenews" className="">
                <p className="text-center">News</p>
              </NavLink>
            </div>
            <div className="col-3">
              <NavLink to="/moresport" className="">
                <p className="text-center">Sports</p>
              </NavLink>
            </div>
            <div
              className="col-2"
              onClick={(e) => this.props.toggleSmallScreenMenu(e,this.submenu.current!)}
            >
              <NavLink to="#" className="">
                <p className="text-center text-nowrap"> 
                  All{" "}
                  <FiChevronsDown
                    style={{
                      fontSize: "1rem",
                      marginBottom: ".2rem",
                    }}
                  />
                </p>
              </NavLink>
            </div>
          </nav>
          <nav className="row  submenu-menu-xs-screen" ref={this.submenu}>
            <div className="col-12 text-center">
              <NavLink to="/morebusiness" className="">
                <p className="text-center">Business</p>
              </NavLink>
            </div>
            <div className="col-12 text-center">
              <NavLink to="/moreentertainment" className="">
                <p className="text-center">Entertainment</p>
              </NavLink>
            </div>
            <div className="col-12 text-center">
              <NavLink to="/moretech" className="">
                <p className="text-center">Tech</p>
              </NavLink>
            </div>
            <div className="col-12 text-center">
              <NavLink to="/morescience" className="">
                <p className="text-center">Science</p>
              </NavLink>
            </div>
            <div className="col-12 text-center">
              <NavLink to="/morehealth" className="">
                <p className="text-center">Health</p>
              </NavLink>
            </div>
            <div className="col-12 text-center">
              <NavLink to="/moretrending" className="">
                <p className="text-center">Trending</p>
              </NavLink>
            </div>
          </nav>
      </div>
    );
  }
}



const mapDispatchToProps = (dispatch:any) => {
  return {
    toggleSmallScreenMenu: (e: React.MouseEvent, elem: HTMLDivElement) =>
      dispatch(toggleSmallScreenMenu(e,elem))
  };
};

export default connect(null, mapDispatchToProps)(HeaderSmallScreen);
