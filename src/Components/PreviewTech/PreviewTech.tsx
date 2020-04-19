import * as React from "react";
import { getTech } from "../../Actions/Actions";
import { FiChevronsRight } from "react-icons/fi";
import { connect } from "react-redux";
import "./PreviewTech.scss";
import question from "../Media/img/question.jpg";

export interface PreviewTechProps {
  techNews: any | null;
  getTech: typeof getTech;
}

export interface State {}

class PreviewTech extends React.Component<PreviewTechProps, State> {
  keyAPI: string = "f22dba07b79e44d89a3acfbfb6d70463";

  componentDidMount() {
    if (this.props.techNews === null) {
      this.props.getTech(
        `https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=${this.keyAPI}`
      );
    }
  }
  render() {
    return this.props.techNews === null ? (
     null
    ) : (
      <div className="container">
        <div className="row mt-3 tech-news-header">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <h3>
              <mark>
                Tech
                <FiChevronsRight style={{ color: "white", strokeWidth: 4 }} />
              </mark>
            </h3>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
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
                <div className="col-lg-4 col-md-6 col-sm-6" key={i}>
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
                    src={article.urlToImage !==null ?article.urlToImage :question}
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
    techNews: state.data_news.techNews
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    getTech: (url: string) => dispatch(getTech(url)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PreviewTech);
