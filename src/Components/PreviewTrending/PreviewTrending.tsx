import * as React from "react";
import { connect } from "react-redux";
import { getTrending } from "../../Actions/Actions";
import { FiChevronsRight } from "react-icons/fi";
import "./PreviewTrending.scss";
import defaultImage from "../Media/img/trends.jpg";
import { IData } from "../../Types/Types";
import { RootState } from "../../Store/Store";

export interface IPreviewTrendingProps {
  trendingNews: IData | null;
  getTrending: typeof getTrending;
  keyApi: string;
}

export interface State {}

class PreviewTrending extends React.Component<IPreviewTrendingProps, State> {
  componentDidMount() {
    if (this.props.trendingNews === null) {
      this.props.getTrending(
        `https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/everything?domains=wsj.com,nytimes.com&apiKey=${this.props.keyApi}`
      );
    }
  }

  render() {
    return this.props.trendingNews === null ? null : (
      <div className="container-xl">
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
              i < 4 ? (
                <div className="col-lg-3 col-md-6 col-sm-12" key={i}>
                  <div className="article-number">
                    <span>{i + 1}</span>
                  </div>
                  <h5>
                    <mark>{article.title}</mark>
                  </h5>
                  <img
                    className="img-fluid mb-1"
                    src={
                      article.urlToImage !== null
                        ? article.urlToImage
                        : defaultImage
                    }
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

const mapStateToProps = (state: RootState) => {
  return {
    trendingNews: state.data_news.trendingNews,
    keyApi: state.data_news.keyApi,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    getTrending: (url: string) => dispatch(getTrending(url)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PreviewTrending);
