import * as React from "react";
import "./MoreTech.scss";
import { getTech } from "../../Actions/Actions";
import { connect } from "react-redux";
import { FiChevronsRight } from "react-icons/fi";
import RightSidebar from "../RightSidebar/RightSidebar";
import Preloader from "../Preloader/Preloader";

export interface MoreTechProps {
  techNews: any | null;
  getTech: typeof getTech;
  colors: string[];
}

export interface State {}

class MoreTech extends React.Component<MoreTechProps, State> {
  keyAPI: string = "74498e6f023d4358a296a9351a1ea043";

  componentDidMount() {
    if (this.props.techNews === null) {
      this.props.getTech(
        `https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=${this.keyAPI}`
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
            <div className="col-lg-8">
              <div className="row">
                <div className="col">
                  <div className="latest-tech-article">
                    <h3>
                      <mark>{this.props.techNews.articles[9].title}</mark>
                    </h3>
                    <img
                      className="img-fluid mb-1"
                      src={this.props.techNews.articles[9].urlToImage}
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
    techNews: state.data_news.techNews,
    colors: state.data_news.colors,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    getTech: (url: string) => dispatch(getTech(url)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MoreTech);
