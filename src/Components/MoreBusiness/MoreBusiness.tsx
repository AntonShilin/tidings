import * as React from "react";
import { getBusiness, showFullArticleInfo } from "../../Actions/Actions";
import { FiChevronsRight } from "react-icons/fi";
import { connect } from "react-redux";
import "./MoreBusiness.scss";
import Preloader from "../Preloader/Preloader";
import RightSidebar from "../RightSidebar/RightSidebar";
import question from "../Media/img/question.jpg";

export interface MoreBusinessProps {
  businessNews: any | null;
  getBusiness: typeof getBusiness;
  colors: string[];
  showFullArticleInfo: typeof showFullArticleInfo;
  url: any;
}

export interface State {}

class MoreBusiness extends React.Component<MoreBusinessProps, State> {
  keyAPI: string = "f22dba07b79e44d89a3acfbfb6d70463";

  componentDidMount() {
    if (this.props.businessNews === null) {
      this.props.getBusiness(
        `https://newsapi.org/v2/top-headlines?country=gb&category=business&apiKey=${this.keyAPI}`
      );
    }
  }
  render() {
    return this.props.businessNews === null ? (
      <Preloader />
    ) : (
      <React.Fragment>
        <div className="container mt-5 business-news-article">
          <div className="row">
            <div className="col-lg-8 col-md-8 col-sm-12">
              <div className="row">
                <div className="col">
                  <div
                    className="latest-business-article"
                    onClick={() =>
                      this.props.showFullArticleInfo(
                        this.props.businessNews.articles[7].source.id,
                        this.props.url
                      )
                    }
                  >
                    <h3>
                      <mark>{this.props.businessNews.articles[7].title}</mark>
                    </h3>
                    <img
                      className="img-fluid mb-1"
                      src={
                        this.props.businessNews.articles[7].urlToImage !== null
                          ? this.props.businessNews.articles[7].urlToImage
                          : question
                      }
                      alt=""
                    />
                    <p>
                      {this.props.businessNews.articles[7].description}
                      <FiChevronsRight
                        style={{ color: "orange", strokeWidth: 4 }}
                      />
                    </p>
                  </div>
                </div>
              </div>
              <div className="row business-news-news">
                {this.props.businessNews.articles.map(
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
                              : question
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
    businessNews: state.data_news.businessNews,
    colors: state.data_news.colors,
    url,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    getBusiness: (url: string) => dispatch(getBusiness(url)),
    showFullArticleInfo: (id: number, url: any) =>
      dispatch(showFullArticleInfo(id, url)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MoreBusiness);
