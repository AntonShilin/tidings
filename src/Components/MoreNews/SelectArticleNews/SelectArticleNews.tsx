import * as React from "react";
import "./SelectArticleNews.scss";
import { connect } from "react-redux";
import Preloader from "../../Preloader/Preloader";
import { FiChevronsRight } from "react-icons/fi";
import { getNews, goToPublisherPage } from "../../../Actions/Actions";
import RightSidebar from "../../RightSidebar/RightSidebar";
import { IData, RouteParams } from "../../../Types/Types";
import { RootState } from "../../../Store/Store";
import PreviewBusiness from "../../PreviewBusiness/PreviewBusiness";
import { withRouter, RouteComponentProps } from "react-router-dom";

export interface ISelectArticleProps extends RouteComponentProps<RouteParams>{
  headlineNews: IData | null;
  getNews: typeof getNews;
  goToPublisherPage: typeof goToPublisherPage;
  colors: string[];
  keyApi: string;
}

export interface State {}

class SelectArticleNews extends React.Component<ISelectArticleProps, State> {
  // componentDidMount() {
  //   if (this.props.headlineNews === null) {
  //     this.props.getNews(
  //       `https://gnews.io/api/v4/search?q=example&token=${this.props.keyApi}`
  //     );
  //   }
  // }

  render() {
    const id: number = +this.props.match.params.id;

    return this.props.headlineNews === null ? (
      <Preloader />
    ) : (
      <React.Fragment>
        <div className="container-xl">
          <div className="row selected-article">
            <div
              className="col-lg-8 col-md-8 col-sm-12"
              onClick={() =>
                this.props.goToPublisherPage(
                  this.props.headlineNews!.articles[id].url
                )
              }
            >
              <h1>{this.props.headlineNews.articles[id].title}</h1>
              <p>
                <b>{this.props.headlineNews.articles[id].author} </b>
                <small>
                  {this.props.headlineNews.articles[id].publishedAt.match(
                    /\d+\-\d+\d+\-\d+/g
                  )}
                </small>
              </p>
              <img
                src={this.props.headlineNews.articles[id].urlToImage}
                alt="img_1"
                className="img-fluid"
              />
              <p>
                {this.props.headlineNews.articles[id].content}
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
    headlineNews: state.data_news.headlineNews,
    keyApi: state.data_news.keyApi,
    colors: state.data_news.colors,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    getNews: (url: string) => dispatch(getNews(url)),
    goToPublisherPage: (adress: string) => dispatch(goToPublisherPage(adress)),
  };
};

const withRouterProps = withRouter(SelectArticleNews);
export default connect(mapStateToProps, mapDispatchToProps)(withRouterProps);
