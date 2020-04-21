import * as React from "react";
import "./SelectArticleSidebar.scss";
import { connect } from "react-redux";
import Preloader from "../../Preloader/Preloader";
import { FiChevronsRight } from "react-icons/fi";
import {
  goToPublisherPage,
  getSidebarNews,
} from "../../../Actions/Actions";
import defaultImage from "../../Media/img/question.jpg";

export interface SelectArticleProps {
    sidebarNews: any | null;
  getSidebarNews: typeof getSidebarNews;
  goToPublisherPage: typeof goToPublisherPage;
  colors: string[];
  url: any;
}

export interface State {}

class SelectArticleSidebar extends React.Component<SelectArticleProps, State> {
  keyAPI: string = "f22dba07b79e44d89a3acfbfb6d70463";

  componentDidMount() {
    if (this.props.sidebarNews === null) {
      this.props.getSidebarNews(
        `https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=${this.keyAPI}`
      );
    }
  }

    render() {

    const id: number = this.props.url.match.params.id;

    return this.props.sidebarNews === null ? (
      <Preloader />
    ) : (
      <div className="container">
        <div className="row selected-article">
          <div
            className="col-lg-8 col-md-8 col-sm-12"
            onClick={() =>
              this.props.goToPublisherPage(
                this.props.sidebarNews.articles[id].url
              )
            }
          >
            <h1>{this.props.sidebarNews.articles[id].title}</h1>
            <p>
              <b>{this.props.sidebarNews.articles[id].author} </b>
              <small>
                {this.props.sidebarNews.articles[id].publishedAt.match(
                  /\d+\-\d+\d+\-\d+/g
                )}
              </small>
            </p>
            <img
              src={
                this.props.sidebarNews.articles[id].urlToImage !== null
                  ? this.props.sidebarNews.articles[id].urlToImage
                  : defaultImage
              }
              alt="img_1"
              className="img-fluid"
            />
            <p>
              {this.props.sidebarNews.articles[id].content}
              <FiChevronsRight style={{ color: "orange", strokeWidth: 4 }} />
            </p>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12">
           >>>>>>>>>>>>>>>>>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: any, url: any) => {
  return {
    sidebarNews: state.data_news.sidebarNews,
    colors: state.data_news.colors,
    url,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    getSidebarNews: (url: string) => dispatch(getSidebarNews(url)),
    goToPublisherPage: (adress: string) => dispatch(goToPublisherPage(adress)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectArticleSidebar);
