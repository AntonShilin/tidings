import * as React from "react";
import { getNews } from "../../Actions/Actions";
import { FiChevronsRight } from "react-icons/fi";
import { connect } from "react-redux";
import "./MoreNews.scss";
import Preloader from "../Preloader/Preloader";
import RightSidebar from "../RightSidebar/RightSidebar";
import question from "../Media/img/question.jpg";

export interface MoreNewsProps {
  headlineNews: any | null;
  getNews: typeof getNews;
  colors: string[];
}

export interface State {}

class MoreNews extends React.Component<MoreNewsProps, State> {
  keyAPI: string = "74498e6f023d4358a296a9351a1ea043";

  componentDidMount() {
    if (this.props.headlineNews === null) {
      this.props.getNews(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=${this.keyAPI}`
      );
    }
  }
  render() {
    return this.props.headlineNews === null ? (
      <Preloader />
    ) : (
      <React.Fragment>
        <div className="container mt-5 headline-news-article">
          <div className="row">
            <div className="col-lg-8 col-md-8 col-sm-12">
              <div className="row">
                <div className="col">
                  <div className="latest-headline-article">
                    <h3>
                      <mark>{this.props.headlineNews.articles[9].title}</mark>
                    </h3>
                    <img
                      className="img-fluid mb-1"
                      src={
                        this.props.headlineNews.articles[9].urlToImage !== null
                          ? this.props.headlineNews.articles[9].urlToImage
                          : question
                      }
                      alt=""
                    />
                    <p>
                      {this.props.headlineNews.articles[9].description}
                      <FiChevronsRight
                        style={{ color: "orange", strokeWidth: 4 }}
                      />
                    </p>
                  </div>
                </div>
              </div>
              <div className="row headline-news-news">
                {this.props.headlineNews.articles.map(
                  (article: any, i: number, arr: any) =>
                    i > 9 ? (
                      <div className="col-lg-6 col-md-6 col-sm-12" key={i}>
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

const mapStateToProps = (state: any) => {
  return {
    headlineNews: state.data_news.headlineNews,
    colors: state.data_news.colors,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    getNews: (url: string) => dispatch(getNews(url)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MoreNews);
