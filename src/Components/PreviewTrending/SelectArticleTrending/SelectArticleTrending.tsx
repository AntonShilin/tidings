import * as React from "react";
// import "./SelectArticleTrending.scss";
import { connect } from "react-redux";
import Preloader from "../../Preloader/Preloader";
import { FiChevronsRight } from "react-icons/fi";
import { goToPublisherPage, getTrending } from "../../../Actions/Actions";
import RightSidebar from "../../RightSidebar/RightSidebar";
import defaultImage from "../../Media/img/tech.jpg";
import { IData, RouteParams } from "../../../Types/Types";
import { RootState } from "../../../Store/Store";
import PreviewBusiness from "../../PreviewBusiness/PreviewBusiness";
import { withRouter, RouteComponentProps } from "react-router-dom";

export interface ISelectArticleTrendingProps
  extends RouteComponentProps<RouteParams> {
  trendingNews: IData | null;
  goToPublisherPage: typeof goToPublisherPage;
  getTrending: typeof getTrending;
  colors: string[];
  keyApi: string;
}

export interface State {}

class SelectArticleTrending extends React.Component<
  ISelectArticleTrendingProps,
  State
> {
  componentDidMount() {
    if (this.props.trendingNews === null) {
      this.props.getTrending(
        `https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/everything?domains=wsj.com,nytimes.com&apiKey=${this.props.keyApi}`
      );
    }
  }

  render() {
    const id: number = +this.props.match.params.id;

    return this.props.trendingNews === null ? (
      <Preloader />
    ) : (
      <React.Fragment>
        <div className="container-xl">
          <div className="row selected-article">
            <div
              className="col-lg-8 col-md-8 col-sm-12"
              onClick={() =>
                this.props.goToPublisherPage(
                  this.props.trendingNews!.articles[id].url
                )
              }
            >
              <h1>{this.props.trendingNews.articles[id].title}</h1>
              <p>
                <b>{this.props.trendingNews.articles[id].author} </b>
                <small>
                  {this.props.trendingNews.articles[id].publishedAt.match(
                    /\d+\-\d+\d+\-\d+/g
                  )}
                </small>
              </p>
              <img
                src={
                  this.props.trendingNews.articles[id].urlToImage !== null
                    ? this.props.trendingNews.articles[id].urlToImage
                    : defaultImage
                }
                alt="img_1"
                className="img-fluid"
              />
              <p>
                {this.props.trendingNews.articles[id].content}
                <FiChevronsRight style={{ color: "orange", strokeWidth: 4 }} />
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
    trendingNews: state.data_news.trendingNews,
    colors: state.data_news.colors,
    keyApi: state.data_news.keyApi,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    getTrending: (url: string) => dispatch(getTrending(url)),
    goToPublisherPage: (adress: string) => dispatch(goToPublisherPage(adress)),
  };
};

const withRouterProps = withRouter(SelectArticleTrending);
export default connect(mapStateToProps, mapDispatchToProps)(withRouterProps);
