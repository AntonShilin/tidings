import * as React from "react";
import Preloader from "../Preloader/Preloader";
import RightSidebar from "../RightSidebar/RightSidebar";
import { getEntertainment } from "../../Actions/Actions";
import { FiChevronsRight } from "react-icons/fi";
import { connect } from "react-redux";
import "./MoreEntertainment.scss";
import question from "../Media/img/question.jpg";

export interface MoreEntertainmentProps {
  entertainmentNews: any | null;
  getEntertainment: typeof getEntertainment;
  colors: string[];
}

export interface State {}

class MoreEntertainment extends React.Component<MoreEntertainmentProps, State> {
  keyAPI: string = "74498e6f023d4358a296a9351a1ea043";

  componentDidMount() {
    if (this.props.entertainmentNews === null) {
      this.props.getEntertainment(
        `https://newsapi.org/v2/top-headlines?country=de&category=business&apiKey=${this.keyAPI}`
      );
    }
  }
  render() {
    return this.props.entertainmentNews === null ? (
      <Preloader />
    ) : (
      <React.Fragment>
        <div className="container entertainment-article">
          <div className="row">
            <div className="col-lg-8 col-md-8 col-sm-12">
              <div className="row">
                <div className="col">
                  <div className="latest-entertainment">
                    <h3>
                      <mark>
                        {this.props.entertainmentNews.articles[0].title}
                      </mark>
                    </h3>
                    <img
                      className="img-fluid mb-1"
                      src={this.props.entertainmentNews.articles[0].urlToImage !== null
                        ? this.props.entertainmentNews.articles[0].urlToImage
                        : question}
                      alt=""
                    />
                    <p>
                      {this.props.entertainmentNews.articles[0].description}
                      <FiChevronsRight
                        style={{ color: "orange", strokeWidth: 4 }}
                      />
                    </p>
                  </div>
                </div>
              </div>
              <div className="row entertainment-news">
                {this.props.entertainmentNews.articles.map(
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
                          src={ article.urlToImage !== null
                            ? article.urlToImage
                            : question}
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
    entertainmentNews: state.data_news.entertainmentNews,
    colors: state.data_news.colors,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    getEntertainment: (url: string) => dispatch(getEntertainment(url)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MoreEntertainment);
