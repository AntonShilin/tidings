import * as React from "react";
import { getBusiness, showFullArticleInfo } from "../../Actions/Actions";
import { FiChevronsRight } from "react-icons/fi";
import { connect } from "react-redux";
import "./MoreBusiness.scss";
import Preloader from "../Preloader/Preloader";
import RightSidebar from "../RightSidebar/RightSidebar";
import business from "../Media/img/business.jpg";
import { IData } from "../../Types/Types";

export interface IMoreBusinessProps {
  businessNews: IData | null;
  getBusiness: typeof getBusiness;
  colors: string[];
  showFullArticleInfo: typeof showFullArticleInfo;
  url: any;
  keyApi: string;
}

export interface State {}

class MoreBusiness extends React.Component<IMoreBusinessProps, State> {

  componentDidMount() {
    if (this.props.businessNews === null) {
      this.props.getBusiness(
        `https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/top-headlines?country=gb&category=business&apiKey=${this.props.keyApi}`
      );
    }
  }
  render() {
    return this.props.businessNews === null ? (
      <Preloader />
    ) : (
      <React.Fragment>
        <div className="container-xl mt-5 business-news-article">
          <div className="row">
            <div className="col-lg-8 col-md-8 col-sm-12">
              <div className="row">
                <div className="col">
                  <div
                    className="latest-business-article"
                    onClick={() =>
                      this.props.showFullArticleInfo(
                        this.props.businessNews!.articles[7].source.id,
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
                          : business
                      }
                      alt="img"
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
                              : business
                          }
                          alt="img"
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
    keyApi: state.data_news.keyApi,
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
