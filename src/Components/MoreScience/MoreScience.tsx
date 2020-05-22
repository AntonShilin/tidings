import * as React from "react";
import { getScience, showFullArticleInfo } from "../../Actions/Actions";
import { FiChevronsRight } from "react-icons/fi";
import { connect } from "react-redux";
import "./MoreScience.scss";
import Preloader from "../Preloader/Preloader";
import RightSidebar from "../RightSidebar/RightSidebar";
import science from "../Media/img/science.jpg";

export interface MoreScienceProps {
  scienceNews: any | null;
  getScience: typeof getScience;
  colors: string[];
  showFullArticleInfo: typeof showFullArticleInfo;
  url: any;
  keyApi: string;
}

export interface State {}

class MoreScience extends React.Component<MoreScienceProps, State> {

  componentDidMount() {
    if (this.props.scienceNews === null) {
      this.props.getScience(
        `https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/top-headlines?country=ie&category=science&apiKey=${this.props.keyApi}`
      );
    }
  }
  render() {
    return this.props.scienceNews === null ? (
      <Preloader />
    ) : (
      <React.Fragment>
        <div className="container mt-5 science-news-article">
          <div className="row">
            <div className="col-lg-8 col-md-8 col-sm-12">
              <div className="row">
                <div className="col">
                  <div
                    className="latest-science-article"
                    onClick={() =>
                      this.props.showFullArticleInfo(
                        this.props.scienceNews.articles[0].source.id,
                        this.props.url
                      )
                    }
                  >
                    <h3>
                      <mark>{this.props.scienceNews.articles[0].title}</mark>
                    </h3>
                    <img
                      className="img-fluid mb-1"
                      src={
                        this.props.scienceNews.articles[0].urlToImage !== null
                          ? this.props.scienceNews.articles[0].urlToImage
                          : science
                      }
                      alt=""
                    />
                    <p>
                      {this.props.scienceNews.articles[0].description}
                      <FiChevronsRight
                        style={{ color: "orange", strokeWidth: 4 }}
                      />
                    </p>
                  </div>
                </div>
              </div>
              <div className="row science-news-news">
                {this.props.scienceNews.articles.map(
                  (article: any, i: number, arr: any) =>
                    i > 7 ? (
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
                              backgroundColor: this.props.colors[i],
                            }}
                          >
                            {article.title}
                            {i}
                          </mark>
                        </h5>
                        <img
                          className="img-fluid mb-1"
                          src={
                            article.urlToImage !== null
                              ? article.urlToImage
                              : science
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
    scienceNews: state.data_news.scienceNews,
    colors: state.data_news.colors,
    keyApi: state.data_news.keyApi,
    url,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    getScience: (url: string) => dispatch(getScience(url)),
    showFullArticleInfo: (id: number, url: any) =>
      dispatch(showFullArticleInfo(id, url)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MoreScience);
