import * as React from "react";
import "./SelectArticleSport.scss";
import { connect } from "react-redux";
import Preloader from "../../Preloader/Preloader";
import { FiChevronsRight } from "react-icons/fi";
import { getSport } from "../../../Actions/Actions";
import RightSidebar from "../../RightSidebar/RightSidebar";
import defaultImage  from "../../Media/img/question.jpg";

export interface SelectArticleProps {
  sportNews: any | null;
  getSport: typeof getSport;
  colors: string[];
  url: any;
}

export interface State {}

class SelectArticleSport extends React.Component<SelectArticleProps, State> {
  keyAPI: string = "74498e6f023d4358a296a9351a1ea043";

  componentDidMount() {
    if (this.props.sportNews === null) {
      this.props.getSport(
        `https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=${this.keyAPI}`
      );
    }
  }

  render() {
    const id: number = this.props.url.match.params.id;

    return this.props.sportNews === null ? (
      <Preloader />
    ) : (
      <div className="container">
        <div className="row selected-article">
          <div className="col-lg-8 col-md-8 col-sm-12">
            <h1>{this.props.sportNews.articles[id].title}</h1>
            <p>
              <b>{this.props.sportNews.articles[id].author} </b>
              <small>
                {this.props.sportNews.articles[id].publishedAt.match(
                  /\d+\-\d+\d+\-\d+/g
                )}
              </small>
            </p>
            <img
              src={
                this.props.sportNews.articles[id].urlToImage !== null
                  ? this.props.sportNews.articles[id].urlToImage
                  : defaultImage
              }
              alt="img_1"
              className="img-fluid"
            />
            <p>
              {this.props.sportNews.articles[id].content}
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
   sportNews: state.data_news.sportNews,
    colors: state.data_news.colors,
    url
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    getSport: (url: string) => dispatch(getSport(url)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectArticleSport);