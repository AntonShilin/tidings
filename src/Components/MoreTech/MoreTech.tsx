import * as React from "react";
import "./MoreTech.scss";
import { getTech, showFullArticleInfo } from "../../Actions/Actions";
import { connect } from "react-redux";
import { FiChevronsRight } from "react-icons/fi";
import RightSidebar from "../RightSidebar/RightSidebar";
import Preloader from "../Preloader/Preloader";
import tech from "../Media/img/tech.jpg";

export interface MoreTechProps {
  techNews: any | null;
  getTech: typeof getTech;
  colors: string[];
  showFullArticleInfo: typeof showFullArticleInfo;
  url: any;
  keyApi: string;
}

export interface State {}

class MoreTech extends React.Component<MoreTechProps, State> {

  componentDidMount() {
    if (this.props.techNews === null) {
      this.props.getTech(
        `https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=${this.props.keyApi}`
      );
    }
  }

  render() {
    return this.props.techNews === null ? (
      <Preloader />
    ) : (
      <React.Fragment>
        <div className="container mt-5 header-tech-article">
          <div className="row">
            <div className="col-lg-8 col-md-8 col-sm-12">
              <div className="row">
                <div className="col">
                  <div
                    className="latest-tech-article"
                    onClick={() =>
                      this.props.showFullArticleInfo(
                        this.props.techNews.articles[9].source.id,
                        this.props.url
                      )
                    }
                  >
                    <h3>
                      <mark>{this.props.techNews.articles[9].title}</mark>
                    </h3>
                    <img
                      className="img-fluid mb-1"
                      src={
                        this.props.techNews.articles[9].urlToImage !== null
                          ? this.props.techNews.articles[9].urlToImage
                          : tech
                      }
                      alt=""
                    />
                    <p>
                      {this.props.techNews.articles[9].description}
                      <FiChevronsRight
                        style={{ color: "orange", strokeWidth: 4 }}
                      />
                    </p>
                  </div>
                </div>
              </div>
              <div className="row main-tech-news">
                {this.props.techNews.articles.map(
                  (article: any, i: number, arr: any) =>
                    i > 9 ? (
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
                              : tech
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
    techNews: state.data_news.techNews,
    colors: state.data_news.colors,
    keyApi: state.data_news.keyApi,
    url,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    getTech: (url: string) => dispatch(getTech(url)),
    showFullArticleInfo: (id: number, url: any) =>
      dispatch(showFullArticleInfo(id, url)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MoreTech);
