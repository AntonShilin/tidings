import * as React from "react";
import "./SelectArticleEntertainment.scss";
import { connect } from "react-redux";
import Preloader from "../../Preloader/Preloader";
import { FiChevronsRight } from "react-icons/fi";
import { getEntertainment, goToPublisherPage } from "../../../Actions/Actions";
import RightSidebar from "../../RightSidebar/RightSidebar";
import defaultImage from "../../Media/img/entertainment.jpg";
import { IData, RouteParams } from "../../../Types/Types";
import { RootState } from "../../../Store/Store";
import PreviewTrending from "../../PreviewTrending/PreviewTrending";
import { withRouter, RouteComponentProps } from "react-router-dom";

export interface ISelectArticleProps extends RouteComponentProps<RouteParams> {
  entertainmentNews: IData | null;
  getEntertainment: typeof getEntertainment;
  goToPublisherPage: typeof goToPublisherPage;
  colors: string[];
  keyApi: string;
}

export interface State {}

class SelectArticleEntertainment extends React.Component<
  ISelectArticleProps,
  State
> {
  componentDidMount() {
    if (this.props.entertainmentNews === null) {
      this.props.getEntertainment(
        `https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/top-headlines?country=gb&category=entertainment&apiKey=${this.props.keyApi}`
      );
    }
  }

  render() {
    const id: number = +this.props.match.params.id;

    return this.props.entertainmentNews === null ? (
      <Preloader />
    ) : (
      <React.Fragment>
        <div className="container-xl">
          <div className="row selected-article">
            <div
              className="col-lg-8 col-md-8 col-sm-12"
              onClick={() =>
                this.props.goToPublisherPage(
                  this.props.entertainmentNews!.articles[id].url
                )
              }
            >
              <h1>{this.props.entertainmentNews.articles[id].title}</h1>
              <p>
                <b>{this.props.entertainmentNews.articles[id].author} </b>
                <small>
                  {this.props.entertainmentNews.articles[id].publishedAt.match(
                    /\d+\-\d+\d+\-\d+/g
                  )}
                </small>
              </p>
              <img
                src={
                  this.props.entertainmentNews.articles[id].urlToImage !== null
                    ? this.props.entertainmentNews.articles[id].urlToImage
                    : defaultImage
                }
                alt="img_1"
                className="img-fluid"
              />
              <p>
                {this.props.entertainmentNews.articles[id].content}
                <FiChevronsRight />
              </p>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <RightSidebar />
            </div>
          </div>
        </div>
        <PreviewTrending />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state: RootState) => {
  return {
    entertainmentNews: state.data_news.entertainmentNews,
    colors: state.data_news.colors,
    keyApi: state.data_news.keyApi,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    getEntertainment: (url: string) => dispatch(getEntertainment(url)),
    goToPublisherPage: (adress: string) => dispatch(goToPublisherPage(adress)),
  };
};

const withRouterProps = withRouter(SelectArticleEntertainment);
export default connect(mapStateToProps, mapDispatchToProps)(withRouterProps);
