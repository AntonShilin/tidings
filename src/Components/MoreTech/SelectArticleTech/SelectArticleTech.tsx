import * as React from "react";
import "./SelectArticleTech.scss";
import { connect } from "react-redux";
import Preloader from "../../Preloader/Preloader";
import { FiChevronsRight } from "react-icons/fi";
import { getTech, goToPublisherPage } from "../../../Actions/Actions";
import RightSidebar from "../../RightSidebar/RightSidebar";
import defaultImage from "../../Media/img/tech.jpg";
import { IData, RouteParams } from "../../../Types/Types";
import { RootState } from "../../../Store/Store";
import PreviewBusiness from "../../PreviewBusiness/PreviewBusiness";
import { withRouter, RouteComponentProps } from "react-router-dom";

export interface ISelectArticleProps extends RouteComponentProps<RouteParams> {
  techNews: IData | null;
  goToPublisherPage: typeof goToPublisherPage;
  getTech: typeof getTech;
  colors: string[];
  keyApi: string;
}

export interface State {}

class SelectArticleTech extends React.Component<ISelectArticleProps, State> {
  componentDidMount() {
    if (this.props.techNews === null) {
      this.props.getTech(
        `https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=${this.props.keyApi}`
      );
    }
  }

  render() {
    const id: number = +this.props.match.params.id;

    return this.props.techNews === null ? (
      <Preloader />
    ) : (
      <React.Fragment>
        <div className="container-xl">
          <div className="row selected-article">
            <div
              className="col-lg-8 col-md-8 col-sm-12"
              onClick={() =>
                this.props.goToPublisherPage(
                  this.props.techNews!.articles[id].url
                )
              }
            >
              <h1>{this.props.techNews.articles[id].title}</h1>
              <p>
                <b>{this.props.techNews.articles[id].author} </b>
                <small>
                  {this.props.techNews.articles[id].publishedAt.match(
                    /\d+\-\d+\d+\-\d+/g
                  )}
                </small>
              </p>
              <img
                src={
                  this.props.techNews.articles[id].urlToImage !== null
                    ? this.props.techNews.articles[id].urlToImage
                    : defaultImage
                }
                alt="img_1"
                className="img-fluid"
              />
              <p>
                {this.props.techNews.articles[id].content}
                <FiChevronsRight />
              </p>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <RightSidebar />
            </div>
          </div>
        </div>
        <PreviewBusiness />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state: RootState) => {
  return {
    techNews: state.data_news.techNews,
    colors: state.data_news.colors,
    keyApi: state.data_news.keyApi,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    getTech: (url: string) => dispatch(getTech(url)),
    goToPublisherPage: (adress: string) => dispatch(goToPublisherPage(adress)),
  };
};

const withRouterProps = withRouter(SelectArticleTech);
export default connect(mapStateToProps, mapDispatchToProps)(withRouterProps);
