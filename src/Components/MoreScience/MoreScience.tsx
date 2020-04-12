import * as React from "react";
import { getScience } from "../../Actions/Actions";
import { FiChevronsRight } from "react-icons/fi";
import { connect } from "react-redux";
import "./MoreScience.scss";
import Preloader from "../Preloader/Preloader";
import RightSidebar from "../RightSidebar/RightSidebar";

export interface MoreScienceProps {
  scienceNews: any | null;
  getScience: typeof getScience;
  colors: string[];
}

export interface State {}

class MoreScience extends React.Component<MoreScienceProps, State> {
  keyAPI: string = "74498e6f023d4358a296a9351a1ea043";

  componentDidMount() {
    if (this.props.scienceNews === null) {
      this.props.getScience(
        `https://newsapi.org/v2/top-headlines?country=ie&category=science&apiKey=${this.keyAPI}`
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
            <div className="col-lg-8">
              <div className="row">
                <div className="col">
                  <div className="latest-science-article">
                    <h3>
                      <mark>{this.props.scienceNews.articles[0].title}</mark>
                    </h3>
                    <img
                      className="img-fluid mb-1"
                      src={this.props.scienceNews.articles[0].urlToImage}
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
    scienceNews: state.data_news.scienceNews,
   colors: state.data_news.colors
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    getScience: (url: string) => dispatch(getScience(url)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MoreScience);
