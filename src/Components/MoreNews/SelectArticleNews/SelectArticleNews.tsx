import * as React from "react";
import "./SelectArticleNews.scss";
import { connect } from "react-redux";
import Preloader from "../../Preloader/Preloader";
import { FiChevronsRight } from "react-icons/fi";
import {  getNews } from "../../../Actions/Actions";
import RightSidebar from "../../RightSidebar/RightSidebar";

export interface SelectArticleProps {
  headlineNews: any | null;
  getNews: typeof getNews;
  colors: string[];
  url: any;
}

export interface State {}

class SelectArticleNews extends React.Component<SelectArticleProps, State> {
  keyAPI: string = "74498e6f023d4358a296a9351a1ea043";

  componentDidMount() {
    if (this.props.headlineNews === null) {
      this.props.getNews(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=${this.keyAPI}`
      );
    }
  }

  render() {

    const id: number = this.props.url.match.params.id; 

    return this.props.headlineNews === null ? (
      <Preloader />
    ) : (
      <div className="container">
        <div className="row selected-article">
          <div className="col-lg-8 col-md-8 col-sm-12">
            <h1>{this.props.headlineNews.articles[id].title}</h1>
            <p>
                <b>{this.props.headlineNews.articles[id].author}{" "}</b>
              <small>
                {this.props.headlineNews.articles[id].publishedAt.match(
                  /\d+\-\d+\d+\-\d+/g
                )}
              </small>
            </p>
              <img src={this.props.headlineNews.articles[id].urlToImage} alt="img_1" className="img-fluid" />
            <p>
              {this.props.headlineNews.articles[id].content}
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
    headlineNews: state.data_news.headlineNews,
    colors: state.data_news.colors,
    url
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    getNews: (url: string) => dispatch(getNews(url)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectArticleNews);
