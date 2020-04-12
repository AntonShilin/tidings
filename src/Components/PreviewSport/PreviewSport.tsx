import * as React from "react";
import { getSport } from "../../Actions/Actions";
import { FiChevronsRight } from "react-icons/fi";
import { connect } from "react-redux";
import "./PreviewSport.scss";

export interface PreviewSportProps {
  sportNews: any | null;
  getSport: typeof getSport;
}

export interface State {}

class PreviewSport extends React.Component<PreviewSportProps, State> {
  keyAPI: string = "74498e6f023d4358a296a9351a1ea043";
  
  componentDidMount() {
    if (this.props.sportNews === null) {
      this.props.getSport(
        `https://newsapi.org/v2/top-headlines?country=ie&category=sports&apiKey=${this.keyAPI}`
      );
    }
  }
  render() {
    return this.props.sportNews === null ? (
      null
    ) : (
      <div className="container">
        <div className="row mt-3 sport-news-header">
          <div className="col">
            <h3>
              <mark>
                Sport
                <FiChevronsRight style={{ color: "white", strokeWidth: 4 }} />
              </mark>
            </h3>
          </div>
          <div className="col">
            <p className="text-right">
              More sport stories
              <FiChevronsRight style={{ color: "#070707", strokeWidth: 4 }} />
            </p>
          </div>
        </div>
        <div className="row sport-news-article">
          {this.props.sportNews.articles.map(
            (article: any, i: number, arr: any) =>
              i < 6 ? (
                <div className="col-4" key={i}>
                  <h5>
                    <mark>
                      {article.title}
                      <FiChevronsRight
                        style={{ color: "white", strokeWidth: 4 }}
                      />
                    </mark>
                  </h5>
                  <img
                    className="img-fluid mb-1"
                    src={article.urlToImage}
                    alt=""
                  />
                </div>
              ) : null
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    sportNews: state.data_news.sportNews
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    getSport: (url: string) => dispatch(getSport(url)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PreviewSport);
