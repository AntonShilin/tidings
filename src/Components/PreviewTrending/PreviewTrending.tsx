import * as React from "react";
import { connect } from "react-redux";
import { getTrending } from "../../Actions/Actions";
import { FiChevronsRight } from "react-icons/fi";
import "./PreviewTrending.scss";

export interface PreviewTrendingProps {
  trendingNews: any | null;
  getTrending: typeof getTrending;
}

export interface State {}

class PreviewTrending extends React.Component<PreviewTrendingProps, State> {
  keyAPI: string = "74498e6f023d4358a296a9351a1ea043";
  colors: string[] = [
    "blue",
    "indigo",
    "purple",
    "red",
    "orange",
    "yellow",
    "green",
    "teal",
    "cyan",
    "white",
    "gray",
    "gray-dark",
    "primary",
    "secondary",
    "success",
    "info",
    "warning",
    "danger",
  ];
  componentDidMount() {
    if (this.props.trendingNews === null) {
      this.props.getTrending(
        `https://newsapi.org/v2/everything?q=apple&from=2020-04-08&to=2020-04-08&sortBy=popularity&apiKey=${this.keyAPI}`
      );
    }
  }

  render() {
    return this.props.trendingNews === null ? (
     null
    ) : (
      <div className="container">
        <div className="row mt-3 trending-news-header">
          <div className="col">
            <h3>
              <mark>
                What is the trending now
                <FiChevronsRight style={{ color: "white", strokeWidth: 4 }} />
              </mark>
            </h3>
          </div>
          <div className="col">
            <p className="text-right">
              More trending stories
              <FiChevronsRight style={{ color: "#000", strokeWidth: 4 }} />
            </p>
          </div>
        </div>
        <div className="row trending-news-article">
          {this.props.trendingNews.articles.map(
            (article: any, i: number, arr: any) =>
              i < 5 ? (
                <div className="col" key={i}>
                  <div className="article-number">
                    <span>{i}</span>
                  </div>
                  <h5>
                    <mark>{article.title}</mark>
                  </h5>
                  <img
                    className="img-fluid mb-1"
                    src={article.urlToImage}
                    alt=""
                  />
                </div>
              ) : null
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    trendingNews: state.data_news.trendingNews,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    getTrending: (url: string) => dispatch(getTrending(url)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PreviewTrending);
