import * as React from "react";
import "./MoreSport.scss";
import { getSport } from "../../Actions/Actions";
import { connect } from "react-redux";
import { FiChevronsRight } from "react-icons/fi";
import RightSidebar from "../RightSidebar/RightSidebar";
import Preloader from "../Preloader/Preloader";
import question from "../Media/img/question.jpg";

export interface MoreSportProps {
  sportNews: any | null;
  getSport: typeof getSport;
  colors: string[];
}

export interface State {}

class MoreSport extends React.Component<MoreSportProps, State> {
  keyAPI: string = "74498e6f023d4358a296a9351a1ea043";

  constructor(props: MoreSportProps) {
    super(props);
  }

  componentDidMount() {
    if (this.props.sportNews === null) {
      this.props.getSport(
        `https://newsapi.org/v2/top-headlines?country=ie&category=sports&apiKey=${this.keyAPI}`
      );
    }
  }

  render() {
    return this.props.sportNews === null ? (
      <Preloader />
    ) : (
      <React.Fragment>
        <div className="container mt-5 header-sport-article">
          <div className="row">
            <div className="col-lg-8 col-md-8 col-sm-12">
              <div className="row">
                <div className="col">
                  <div className="latest-sport-article">
                    <h3>
                      <mark>{this.props.sportNews.articles[0].title}</mark>
                    </h3>
                    <img
                      className="img-fluid mb-1"
                      src={
                        this.props.sportNews.articles[0].urlToImage !== null
                          ? this.props.sportNews.articles[0].urlToImage
                          : question
                      }
                      alt=""
                    />
                    <p>
                      {this.props.sportNews.articles[0].description}
                      <FiChevronsRight
                        style={{ color: "orange", strokeWidth: 4 }}
                      />
                    </p>
                  </div>
                </div>
              </div>
              <div className="row main-sport-news">
                {this.props.sportNews.articles.map(
                  (article: any, i: number, arr: any) =>
                    i > 7 ? (
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
    sportNews: state.data_news.sportNews,
    colors: state.data_news.colors,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    getSport: (url: string) => dispatch(getSport(url)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MoreSport);
