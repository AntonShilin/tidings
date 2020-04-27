import * as React from "react";
import "./MoreTrending.scss";
import { getTrending } from "../../Actions/Actions";
import { connect } from "react-redux";
import { FiChevronsRight } from "react-icons/fi";
import RightSidebar from "../RightSidebar/RightSidebar";
import Preloader from "../Preloader/Preloader";
import trends from "../Media/img/trends.jpg";

export interface MoreTrendingProps {
  trendingNews: any | null;
  getTrending: typeof getTrending;
  colors: string[];
  keyApi: string;
}

export interface State {}

class MoreTrending extends React.Component<MoreTrendingProps, State> {
  keyAPI: string = "f22dba07b79e44d89a3acfbfb6d70463";

  componentDidMount() {
    if (this.props.trendingNews === null) {
      this.props.getTrending(
        `https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=${this.props.keyApi}`
      );
    }
  }

  render() {
    return this.props.trendingNews === null ? (
      <Preloader />
    ) : (
      <React.Fragment>
        <div className="container mt-5 header-trending-article">
          <div className="row">
            <div className="col-lg-8">
              <div className="row main-trending-news">
                {this.props.trendingNews.articles.map(
                  (article: any, i: number, arr: any) =>
                    i > 0 ? (
                      <div className="col-12 mb-2" key={i}>
                        <div className="row">
                          <div className="col-6">
                            <div className="trending-number">
                              <p>{i}</p>
                            </div>
                            <img
                              className="img-fluid"
                              src={article.urlToImage !== null ? article.urlToImage : trends }
                              alt=""
                            />
                          </div>
                          <div className="col-6">
                            <h5>{article.title}</h5>
                            <p className="">
                              {article.description}
                              <FiChevronsRight
                                style={{
                                  color: this.props.colors[i],
                                  strokeWidth: 4,
                                }}
                              />
                            </p>
                          </div>
                        </div>
                      </div>
                    ) : null
                )}
              </div>
            </div>
            <div className="col-lg-4 d-lg-block d-md-none">
              <RightSidebar />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    trendingNews: state.data_news.trendingNews,
    colors: state.data_news.colors,
    keyApi: state.data_news.keyApi
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    getTrending: (url: string) => dispatch(getTrending(url)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MoreTrending);
