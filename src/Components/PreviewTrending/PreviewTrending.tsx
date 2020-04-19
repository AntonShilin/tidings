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
  keyAPI: string = "f22dba07b79e44d89a3acfbfb6d70463";
  
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
          <div className="col-lg-6 col-md-7 col-sm-12">
            <h3>
              <mark>
                What is the trending now
                <FiChevronsRight style={{ color: "white", strokeWidth: 4 }} />
              </mark>
            </h3>
          </div>
          <div className="col-lg-6 col-md-5 d-none d-md-block d-lg-block">
            <p className="text-right">
              More trending stories
              <FiChevronsRight style={{ color: "#000", strokeWidth: 4 }} />
            </p>
          </div>
        </div>
        <div className="row trending-news-article">
          {this.props.trendingNews.articles.map(
            (article: any, i: number, arr: any) =>
              i < 6 ? (
                <div className="col-lg-2 col-md-2 col-sm-12" key={i}>
                  <div className="article-number">
                    <span>{i+1}</span>
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
