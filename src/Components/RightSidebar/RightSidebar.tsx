import * as React from "react";
import { getEntertainment, showFullArticleInfo } from "../../Actions/Actions";
import { connect } from "react-redux";
import "./RightSidebar.scss";

export interface RightSidebarProps {
  entertainmentNews: any | null;
  getEntertainment: typeof getEntertainment;
  showFullArticleInfo: typeof showFullArticleInfo;
  url: any;
}

export interface State {}

class RightSidebar extends React.Component<RightSidebarProps, State> {
  keyAPI: string = "74498e6f023d4358a296a9351a1ea043";
  componentDidMount() {
    if (this.props.entertainmentNews === null) {
      this.props.getEntertainment(
        `https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=${this.keyAPI}`
      );
    }
  }

  render() {
    return (
      <div className="header-right-sidebar">
        <h3 className="text-start mb-4">
          <mark>Just in</mark>
        </h3>
        {this.props.entertainmentNews !== null
          ? this.props.entertainmentNews.articles.map(
              (article: any, i: number | string) => (
                <div
                  key={i}
                  className="d-flex article_right_sidebar  mb-2"
                >
                  <img src={article.urlToImage} className="img-fluid" alt="" />
                  <div className="">{article.description}</div>
                </div>
              )
            )
          : null}
      </div>
    );
  }
}

const mapStateToProps = (state: any, url: any) => {
  return {
    entertainmentNews: state.data_news.entertainmentNews,
    url,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    getEntertainment: (url: string) => dispatch(getEntertainment(url)),
    showFullArticleInfo: (id: number, url: any) =>
      dispatch(showFullArticleInfo(id, url)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RightSidebar);
