import * as React from "react";
import "./ServerError.scss";

export interface Props {}

export interface State {}

class ServerError extends React.Component<Props, State> {
  render() {
    return (
      <div className="container-xl server-error">
        <div className="row">
          <div className="col">
            <h3>
              Server error, client is not permitted access !!!
            </h3>
          </div>
        </div>
      </div>
    );
  }
}

export default ServerError;
