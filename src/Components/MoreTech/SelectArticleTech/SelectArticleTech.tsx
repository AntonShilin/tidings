import * as React from "react";
import "./SelectArticleTech.scss";
import { connect } from "react-redux";
import Preloader from "../../Preloader/Preloader";
import { FiChevronsRight } from "react-icons/fi";
import { getTech } from "../../../Actions/Actions";
import RightSidebar from "../../RightSidebar/RightSidebar";
import defaultImage  from "../../Media/img/question.jpg";

export interface SelectArticleProps {
  techNews: any | null;
  getTech: typeof getTech;
  colors: string[];
  url: any;
}

export interface State {}

class SelectArticleTech extends React.Component<SelectArticleProps, State> {
  keyAPI: string = "74498e6f023d4358a296a9351a1ea043";

  componentDidMount() {
    if (this.props.techNews === null) {
      this.props.getTech(
        `https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=${this.keyAPI}`
      );
    }
  }

  render() {
    const id: number = this.props.url.match.params.id;

    return this.props.techNews === null ? (
      <Preloader />
    ) : (
      <div className="container">
        <div className="row selected-article">
          <div className="col-lg-8 col-md-8 col-sm-12">
            <h1>{this.props.techNews.articles[id].title}</h1>
            <p>
              <b>{this.props.techNews.articles[id].author} </b>
              <small>
                {this.props.techNews.articles[id].publishedAt.match(
                  /\d+\-\d+\d+\-\d+/g
                )}
              </small>
            </p>
            <img
              src={
                this.props.techNews.articles[id].urlToImage !== null
                  ? this.props.techNews.articles[id].urlToImage
                  : defaultImage
              }
              alt="img_1"
              className="img-fluid"
            />
            <p>
              {this.props.techNews.articles[id].content}
              <FiChevronsRight style={{ color: "orange", strokeWidth: 4 }} />
            </p>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12">
            <RightSidebar />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: any,url:any) => {
  return {
    techNews: state.data_news.techNews,
    colors: state.data_news.colors,
    url
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    getTech: (url: string) => dispatch(getTech(url)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectArticleTech);
