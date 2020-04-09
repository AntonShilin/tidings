import * as React from "react";
import {
  Redirect,
  Route,
  Switch
} from "react-router-dom";
import TitlePage from "../Components/TitlePage/TitlePage";
import NewsPage from "../Components/NewsPage/NewsPage";


export interface Props {}

export interface State {}

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact={true} path="/" component={TitlePage} />
        <Route exact={true} path="/news" component={NewsPage} />
        {/* <Route path="/:name" component={DetailNews} /> */}
        <Redirect exact={true} from="/" to="/" />
      </Switch>
    );
  }
}

export default Routes;