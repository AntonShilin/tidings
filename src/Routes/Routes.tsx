import * as React from "react";
import {
  Redirect,
  Route,
  Switch
} from "react-router-dom";
import TitlePage from "../Components/TitlePage/TitlePage";
import MoreSport from "../Components/MoreSport/MoreSport";
import NotFoundPage from "../Components/NotFoundPage/NotFoundPage";
import MoreBusiness from "../Components/MoreBusiness/MoreBusiness";
import MoreNews from "../Components/MoreNews/MoreNews";
import MoreEntertainment from "../Components/MoreEntertainment/MoreEntertainment";
import MoreTrending from "../Components/MoreTrending/MoreTrending";
import MoreTech from "../Components/MoreTech/MoreTech";
import MoreHealth from "../Components/MoreHealth/MoreHealth";
import MoreScience from "../Components/MoreScience/MoreScience";


export interface Props {}

export interface State {}

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact={true} path="/" component={TitlePage} />
        <Route exact={true} path="/morenews" component={MoreNews} />
        <Route exact={true} path="/moresport" component={MoreSport} />
        <Route exact={true} path="/morebusiness" component={MoreBusiness} />
        <Route exact={true} path="/moreentertainment" component={MoreEntertainment} />
        <Route exact={true} path="/moretrending" component={MoreTrending} />
        <Route exact={true} path="/moretech" component={MoreTech} />
        <Route exact={true} path="/morehealth" component={MoreHealth} />
        <Route exact={true} path="/morescience" component={MoreScience} />
        {/* <Route path="/:name" component={DetailNews} /> */}
        <Route component={NotFoundPage} />
        <Redirect exact={true} from="/" to="/" />
      </Switch>
    );
  }
}

export default Routes;