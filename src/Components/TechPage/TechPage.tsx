import * as React from "react";
import { getTech } from "../../Actions/Actions";
import { FiChevronsRight } from "react-icons/fi";
import { connect } from "react-redux";
import "./TechPage.scss";

export interface TechPageProps {
  techNews: any | null;
  getTech: typeof getTech;
}

export interface State {}

class TechPage extends React.Component<TechPageProps, State> {
  keyAPI: string = "74498e6f023d4358a296a9351a1ea043";
  colors: string[] = [
    "blue",
    "indigo",
    "purple",
    "pink",
    "red",
    "orange",
    "yellow",
    "green",
    "teal",
    "cyan",
    "white",
    "gray",
    "gray-dark",
    "primary",
    "secondary",
    "success",
    "info",
    "warning",
    "danger",
  ];
  componentDidMount() {
    if (this.props.techNews === null) {
      this.props.getTech(
        `https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=${this.keyAPI}`
      );
    }
  }
  render() {
    return this.props.techNews === null ? (
      "Loading"
    ) : (
      <div className="container">
        <div className="row mt-3 tech-news-header">
          <div className="col">
            <h3>
              <mark>Tech</mark>
            </h3>
          </div>
          <div className="col">
            <p className="text-right">
              More tech stories
              <FiChevronsRight style={{ color: "#070707", strokeWidth: 4 }} />
            </p>
          </div>
        </div>
        <div className="row tech-news-article">
          {this.props.techNews.articles.map(
            (article: any, i: number, arr: any) =>
              i < 6 ? (
                <div className="col-4" key={i}>
                  <h5>
                    <mark>
                      {article.title}
                      <FiChevronsRight
                        style={{ color: "cyan", strokeWidth: 4 }}
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
    techNews: state.data_news.techNews,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    getTech: (url: string) => dispatch(getTech(url)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TechPage);
