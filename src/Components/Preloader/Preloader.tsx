import * as React from "react";
import "./Preloader.scss";

export interface IPreloaderProps {}

export interface IPreloaderState {
  stroke: number[];
  progressBar: number;
}

class Preloader extends React.Component<IPreloaderProps, IPreloaderState> {
  private progress: any;

  constructor(props: any) {
    super(props);
    this.state = {
      stroke: [1, 2, 3, 4, 5, 6, 7, 1, 2, 3, 4, 5, 6, 7, 1, 2, 3, 4, 5, 6, 7],
      progressBar: 0,
    };
  }

  componentDidMount() {
    this.progress = setInterval(() => this.tick(), 60);
  }

  componentWillUnmount() {
    clearInterval(this.progress);
  }

  tick() {
    if (this.state.progressBar < 100) {
      this.setState({
        progressBar: this.state.progressBar + 1,
      });
    } else {
      this.setState({
        progressBar: 0,
      });
    }
  }

  render() {
    const { stroke, progressBar } = this.state;

    return (
      <div className="container-xl preloader">
        <div className="row">
          {stroke.map((el, i) => (
            <div className={"progress col-" + el} key={i}>
              <div
                className="progress-bar"
                style={{ width: el + progressBar + "%" }}
              >
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Preloader;
