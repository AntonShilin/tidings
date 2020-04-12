import * as React from "react";
import "./NotFoundPage.scss";

export interface Props {}

export interface State {}

class NotFoundPage extends React.Component<Props, State> {
  render() {
    return (
      <div className="container">
        <div className="row not-found-page">
          <div className="col align-self-center">
            <h1 className="text-center">
           <mark>Sorry! Not found page... Try again!</mark>   
            </h1>
          </div>
        </div>
      </div>
    );
  }
}

export default NotFoundPage;
