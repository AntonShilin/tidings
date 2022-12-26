import * as React from "react";
import "./Preloader.scss";

export interface IPreloaderProps {}

export interface IPreloaderState {
  stroke: number[];
}

class Preloader extends React.Component<IPreloaderProps, IPreloaderState> {
  private progress: any;

  constructor(props: any) {
    super(props);
    this.state = {
      stroke: [1, 2, 3, 4, 5, 6, 7, 1, 2, 3, 4, 5, 6, 7, 1, 2, 3, 4, 5, 6, 7],
    };
  }


  render() {
    const { stroke} = this.state;

    return (
      <div className="container-xl preloader">
        <div className="row">
          {stroke.map((el, i) => (
            <div className={"progress col-" + el} key={i}>
              <div className="progress-bar"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Preloader;
