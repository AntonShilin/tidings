import * as React from "react";
import { getSidebarNews, showSidebarArticleInfo } from "../../Actions/Actions";
import { connect } from "react-redux";
import "./RightSidebar.scss";
import { withRouter } from "react-router";
import defaultImage from "../Media/img/articles.jpg";

export interface RightSidebarProps {
  sidebarNews: any | null;
  getSidebarNews: typeof getSidebarNews;
  showSidebarArticleInfo: typeof showSidebarArticleInfo;
  url: any;
  keyApi: string;
}

export interface State {}

class RightSidebar extends React.Component<RightSidebarProps, State> {

  componentDidMount() {
    if (this.props.sidebarNews === null) {
      this.props.getSidebarNews(
        `https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=${this.props.keyApi}`
      );
    }
  }

  render() {
    return (
      <div className="container header-right-sidebar">
        <div className="row">
          <h3 className="text-start mb-4">
            <mark>Just in</mark>
          </h3>
        </div>
        <div className="row">
          {this.props.sidebarNews !== null
            ? this.props.sidebarNews.articles.map(
                (article: any, i: number | string) => (
                  <div
                    key={i}
                    className="col-12 article_right_sidebar  mb-2"
                    onClick={() =>
                      this.props.showSidebarArticleInfo(
                        this.props.sidebarNews.articles[i].source.id,
                        this.props.url
                      )
                    }
                >
                   <p className="">
                    <img
                      src={this.props.sidebarNews.articles[i].urlToImage !== null
                        ? this.props.sidebarNews.articles[i].urlToImage
                        : defaultImage}
                      className="img-fluid"
                      alt="img"
                    />
                   {article.description}</p>
                  </div>
                )
              )
            : null}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: any, url: any) => {
  return {
    sidebarNews: state.data_news.sidebarNews,
    keyApi: state.data_news.keyApi,
    url,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    getSidebarNews: (url: string) => dispatch(getSidebarNews(url)),
    showSidebarArticleInfo: (id: number, url: any) =>
      dispatch(showSidebarArticleInfo(id, url)),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(RightSidebar)
);
