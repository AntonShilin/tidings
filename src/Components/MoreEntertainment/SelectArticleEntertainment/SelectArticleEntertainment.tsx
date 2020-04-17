import * as React from "react";
import "./SelectArticleEntertainment.scss";
import { connect } from "react-redux";
import Preloader from "../../Preloader/Preloader";
import { FiChevronsRight } from "react-icons/fi";
import { getEntertainment } from "../../../Actions/Actions";
import RightSidebar from "../../RightSidebar/RightSidebar";
import defaultImage from "../../Media/img/question.jpg";

export interface SelectArticleProps {
  entertainmentNews: any | null;
  getEntertainment: typeof getEntertainment;
  url: any;
  colors: string[];
}

export interface State {}

class SelectArticleEntertainment extends React.Component<
  SelectArticleProps,
  State
> {
  keyAPI: string = "74498e6f023d4358a296a9351a1ea043";

  componentDidMount() {
    if (this.props.entertainmentNews === null) {
      this.props.getEntertainment(
        `http://newsapi.org/v2/top-headlines?country=gb&category=entertainment&apiKey=${this.keyAPI}`
      );
    }
  }

  render() {
    const id: number = this.props.url.match.params.id;

    return this.props.entertainmentNews === null ? (
      <Preloader />
    ) : (
      <div className="container">
        <div className="row selected-article">
          <div className="col-lg-8 col-md-8 col-sm-12">
            <h1>{this.props.entertainmentNews.articles[id].title}</h1>
            <p>
              <b>{this.props.entertainmentNews.articles[id].author} </b>
              <small>
                {this.props.entertainmentNews.articles[id].publishedAt.match(
                  /\d+\-\d+\d+\-\d+/g
                )}
              </small>
            </p>
            <img
              src={
                this.props.entertainmentNews.articles[id].urlToImage !== null
                  ? this.props.entertainmentNews.articles[id].urlToImage
                  : defaultImage
              }
              alt="img_1"
              className="img-fluid"
            />
            <p>
              {this.props.entertainmentNews.articles[id].content}
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

const mapStateToProps = (state: any, url: any) => {
  return {
    entertainmentNews: state.data_news.entertainmentNews,
    colors: state.data_news.colors,
    url,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    getEntertainment: (url: string) => dispatch(getEntertainment(url)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectArticleEntertainment);
