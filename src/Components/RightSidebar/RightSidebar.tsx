import * as React from "react";
import { getSidebarNews, showSidebarArticleInfo } from "../../Actions/Actions";
import { connect } from "react-redux";
import "./RightSidebar.scss";
import { IAplicationState } from "../../Store/Store";
import { withRouter } from "react-router";

export interface RightSidebarProps {
  sidebarNews: any | null;
  getSidebarNews: typeof getSidebarNews;
  showSidebarArticleInfo: typeof showSidebarArticleInfo;
  url: any;
}

export interface State {}

class RightSidebar extends React.Component<RightSidebarProps, State> {
  keyAPI: string = "f22dba07b79e44d89a3acfbfb6d70463";

  componentDidMount() {
    if (this.props.sidebarNews === null) {
      this.props.getSidebarNews(
        `https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=${this.keyAPI}`
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
                    className="col-12 d-flex article_right_sidebar  mb-2"
                    onClick={() =>
                      this.props.showSidebarArticleInfo(
                        this.props.sidebarNews.articles[i].source.id,
                        this.props.url
                      )
                    }
                  >
                    <img
                      src={article.urlToImage}
                      className="img-fluid"
                      alt=""
                    />
                    <div className="">{article.description}</div>
                  </div>
                )
              )
            : null}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: IAplicationState, url: any) => {
  return {
    sidebarNews: state.data_news.sidebarNews,
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
