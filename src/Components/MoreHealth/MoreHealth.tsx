import * as React from "react";
import { getHealth } from "../../Actions/Actions";
import { FiChevronsRight } from "react-icons/fi";
import { connect } from "react-redux";
import "./MoreHealth.scss";
import Preloader from "../Preloader/Preloader";
import RightSidebar from "../RightSidebar/RightSidebar";

export interface MoreHealthProps {
  healthNews: any | null;
  getHealth: typeof getHealth;
  colors: string[];
}

export interface State {}

class MoreHealth extends React.Component<MoreHealthProps, State> {
  keyAPI: string = "74498e6f023d4358a296a9351a1ea043";

  componentDidMount() {
    if (this.props.healthNews === null) {
      this.props.getHealth(
        `https://newsapi.org/v2/top-headlines?country=ie&category=health&apiKey=${this.keyAPI}`
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
            <div className="col-lg-8">
              <div className="row">
                <div className="col">
                  <div className="latest-health-article">
                    <h3>
                      <mark>{this.props.healthNews.articles[0].title}</mark>
                    </h3>
                    <img
                      className="img-fluid mb-1"
                      src={this.props.healthNews.articles[0].urlToImage}
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
                    i > 1 && i<12 ? (
                      <div className="col-6" key={i}>
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
                          src={article.urlToImage}
                          alt=""
                        />
                        <p>
                          {article.description}
                          <FiChevronsRight
                            style={{
                              color: this.props.colors[this.props.colors.length - i],
                              strokeWidth: 4,
                            }}
                          />
                        </p>
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
    healthNews: state.data_news.healthNews,
   colors: state.data_news.colors
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    getHealth: (url: string) => dispatch(getHealth(url)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MoreHealth);
