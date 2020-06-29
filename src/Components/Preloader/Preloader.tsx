import * as React from "react";
import "./Preloader.scss";

export interface Props {}

export interface State {}

class Preloader extends React.Component<Props, State> {
  render() {
    return (
      <div className="container-xl preloader">
        <div className="row">
          <div className="col-12">
            <h1 className="text-warning text-center">Loading ...</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Preloader;
