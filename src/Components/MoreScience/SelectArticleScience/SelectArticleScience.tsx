import * as React from "react";
import "./SelectArticleScience.scss";
import { connect } from "react-redux";
import Preloader from "../../Preloader/Preloader";
import { FiChevronsRight } from "react-icons/fi";
import { getScience, goToPublisherPage } from "../../../Actions/Actions";
import RightSidebar from "../../RightSidebar/RightSidebar";
import defaultImage from "../../Media/img/question.jpg";
import { IData, RouteParams } from "../../../Types/Types";
import PreviewSport from "../../PreviewSport/PreviewSport";
import { RootState } from "../../../Store/Store";
import { withRouter, RouteComponentProps } from "react-router-dom";

export interface SelectArticleProps extends RouteComponentProps<RouteParams> {
  scienceNews: IData | null;
  getScience: typeof getScience;
  goToPublisherPage: typeof goToPublisherPage;
  colors: string[];
  keyApi: string;
}

export interface State {}

class SelectArticleScience extends React.Component<SelectArticleProps, State> {
  componentDidMount() {
    if (this.props.scienceNews === null) {
      this.props.getScience(
        `https://newsapi.org/v2/top-headlines?country=us&category=science&apiKey=${this.props.keyApi}`
      );
    }
  }

  render() {
    const id: number = +this.props.match.params.id;

    return this.props.scienceNews === null ? (
      <Preloader />
    ) : (
      <React.Fragment>
        <div className="container-xl">
          <div className="row selected-article">
            <div
              className="col-lg-8 col-md-8 col-sm-12"
              onClick={() =>
                this.props.goToPublisherPage(
                  this.props.scienceNews!.articles[id].url
                )
              }
            >
              <h1>{this.props.scienceNews.articles[id].title}</h1>
              <p>
                <b>{this.props.scienceNews.articles[id].author} </b>
                <small>
                  {this.props.scienceNews.articles[id].publishedAt.match(
                    /\d+\-\d+\d+\-\d+/g
                  )}
                </small>
              </p>
              <img
                src={
                  this.props.scienceNews.articles[id].urlToImage !== null
                    ? this.props.scienceNews.articles[id].urlToImage
                    : defaultImage
                }
                alt="img_1"
                className="img-fluid"
              />
              <p>
                {this.props.scienceNews.articles[id].content}
                <FiChevronsRight />
              </p>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <RightSidebar />
            </div>
          </div>
        </div>
        <PreviewSport />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state: RootState) => {
  return {
    scienceNews: state.data_news.scienceNews,
    colors: state.data_news.colors,
    keyApi: state.data_news.keyApi,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    getScience: (url: string) => dispatch(getScience(url)),
    goToPublisherPage: (adress: string) => dispatch(goToPublisherPage(adress)),
  };
};

const withRouterProps = withRouter(SelectArticleScience);
export default connect(mapStateToProps, mapDispatchToProps)(withRouterProps);
