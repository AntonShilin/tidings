import * as React from "react";
import { getHealth, showFullArticleInfo } from "../../Actions/Actions";
import { FiChevronsRight } from "react-icons/fi";
import { connect } from "react-redux";
import "./MoreHealth.scss";
import Preloader from "../Preloader/Preloader";
import RightSidebar from "../RightSidebar/RightSidebar";
import health from "../Media/img/health.jpg";
import { Dispatch, AnyAction } from "redux";
import { GetHealthTypes } from "../../Types/Types";

export interface MoreHealthProps {
  healthNews: any | null;
  getHealth: typeof getHealth;
  colors: string[];
  showFullArticleInfo: typeof showFullArticleInfo;
  url: any;
  keyApi: string;
}

export interface State {}

class MoreHealth extends React.Component<MoreHealthProps, State> {

  componentDidMount() {
    if (this.props.healthNews === null) {
      this.props.getHealth(
        `https://newsapi.org/v2/top-headlines?country=ie&category=health&apiKey=${this.props.keyApi}`
      );
    }
  }
  render() {
    return this.props.healthNews === null ? (
      <Preloader />
    ) : (
      <React.Fragment>
        <div className="container mt-5 health-news-article">
          <div className="row">
            <div className="col-lg-8 col-md-8 col-sm-12">
              <div className="row">
                <div className="col">
                  <div
                    className="latest-health-article"
                    onClick={() =>
                      this.props.showFullArticleInfo(
                        this.props.healthNews.articles[1].source.id,
                        this.props.url
                      )
                    }
                  >
                    <h3>
                      <mark>{this.props.healthNews.articles[1].title}</mark>
                    </h3>
                    <img
                      className="img-fluid mb-1"
                      src={
                        this.props.healthNews.articles[1].urlToImage !== null
                          ? this.props.healthNews.articles[1].urlToImage
                          : health
                      }
                      alt=""
                    />
                    <p>
                      {this.props.healthNews.articles[0].description}
                      <FiChevronsRight
                        style={{ color: "orange", strokeWidth: 4 }}
                      />
                    </p>
                  </div>
                </div>
              </div>
              <div className="row health-news-news">
                {this.props.healthNews.articles.map(
                  (article: any, i: number, arr: any) =>
                    i > 1 && i < 12 ? (
                      <div
                        className="col-lg-6 col-md-6 col-sm-12"
                        key={i}
                        onClick={() =>
                          this.props.showFullArticleInfo(
                            article.source.id,
                            this.props.url
                          )
                        }
                      >
                        <h5>
                          <mark
                            style={{
                              backgroundColor: this.props.colors[
                                this.props.colors.length - i
                              ],
                            }}
                          >
                            {article.title}
                          </mark>
                        </h5>
                        <img
                          className="img-fluid mb-1"
                          src={
                            article.urlToImage !== null
                              ? article.urlToImage
                              : health
                          }
                          alt=""
                        />
                        <p>
                          {article.description}
                          <FiChevronsRight
                            style={{
                              color: this.props.colors[
                                this.props.colors.length - i
                              ],
                              strokeWidth: 4,
                            }}
                          />
                        </p>
                      </div>
                    ) : null
                )}
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <RightSidebar />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state: any, url: any) => {
  return {
    healthNews: state.data_news.healthNews,
    keyApi: state.data_news.keyApi,
    colors: state.data_news.colors,
    url,
  };
};

const mapDispatchToProps = (dispatch:any) => {
  return {
    getHealth: (url: string) => dispatch(getHealth(url)),
    showFullArticleInfo: (id: number, url: any) =>
      dispatch(showFullArticleInfo(id, url)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MoreHealth);
