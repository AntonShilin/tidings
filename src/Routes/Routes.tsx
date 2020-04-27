import * as React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
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
import TitleSelectArticle from "../Components/TitlePage/TitleSelectArticle/TitleSelectArticle";
import SelectArticleNews from "../Components/MoreNews/SelectArticleNews/SelectArticleNews";
import SelectArticleBusiness from "../Components/MoreBusiness/SelectArticleBusiness/SelectArticleBusiness";
import SelectArticleEntertainment from "../Components/MoreEntertainment/SelectArticleEntertainment/SelectArticleEntertainment";
import SelectArticleTech from "../Components/MoreTech/SelectArticleTech/SelectArticleTech";
import SelectArticleHealth from "../Components/MoreHealth/SelectArticleHealth/SelectArticleHealth";
import SelectArticleScience from "../Components/MoreScience/SelectArticleScience/SelectArticleScience";
import SelectArticleSport from "../Components/MoreSport/SelectArticleSport/SelectArticleSport";
import RightSidebar from "../Components/RightSidebar/RightSidebar";
import SelectArticleSidebar from "../Components/RightSidebar/SelectArticleSidebar/SelectArticleSidebar";
import TitlePageSlider from "../Components/TitlePage/TitlePageSlider/TitlePageSlider";

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact={true} path="/titlenews" component={TitlePage} />
        <Route
          exact={true}
          path="/titlenews/:id"
          component={TitleSelectArticle}
        />
        <Route
          exact={true}
          path="/titlenews/:name/:id"
          component={SelectArticleSidebar}
        />
        <Route exact={true} path="/morenews" component={MoreNews} />
        <Route
          exact={true}
          path="/morenews/:id"
          component={SelectArticleNews}
        />
        <Route
          exact={true}
          path="/morenews/:name/:id"
          component={SelectArticleSidebar}
        />
        <Route exact={true} path="/moresport" component={MoreSport} />
        <Route
          exact={true}
          path="/moresport/:id"
          component={SelectArticleSport}
        />
        <Route
          exact={true}
          path="/moresport/:name/:id"
          component={SelectArticleSidebar}
        />
        <Route exact={true} path="/morebusiness" component={MoreBusiness} />
        <Route
          exact={true}
          path="/morebusiness/:id"
          component={SelectArticleBusiness}
        />
        <Route
          exact={true}
          path="/morebusiness/:name/:id"
          component={SelectArticleSidebar}
        />
        <Route
          exact={true}
          path="/moreentertainment"
          component={MoreEntertainment}
        />
        <Route
          exact={true}
          path="/moreentertainment/:id"
          component={SelectArticleEntertainment}
        />
        <Route
          exact={true}
          path="/moreentertainment/:name/:id"
          component={SelectArticleSidebar}
        />
        <Route exact={true} path="/moretrending" component={MoreTrending} />
        <Route exact={true} path="/moretech" component={MoreTech} />
        <Route
          exact={true}
          path="/moretech/:id"
          component={SelectArticleTech}
        />
        <Route
          exact={true}
          path="/moretech/:name/:id"
          component={SelectArticleSidebar}
        />
        <Route exact={true} path="/morehealth" component={MoreHealth} />
        <Route
          exact={true}
          path="/morehealth/:id"
          component={SelectArticleHealth}
        />
        <Route
          exact={true}
          path="/morehealth/:name/:id"
          component={SelectArticleSidebar}
        />
        <Route exact={true} path="/morescience" component={MoreScience} />
        <Route
          exact={true}
          path="/morescience/:id"
          component={SelectArticleScience}
        />
        <Route
          exact={true}
          path="/morescience/:name/:id"
          component={SelectArticleSidebar}
        />
        <Route exact={true} path="/rightsidebar" component={RightSidebar} />
        <Route
          exact={true}
          path="/rightsidebar/:id"
          component={SelectArticleSidebar}
        />
        <Redirect exact={true} from="/" to="/titlenews" />
        <Route exact={true} path="/404" component={NotFoundPage} />
        <Route component={NotFoundPage} />
      </Switch>
    );
  }
}

export default Routes;
