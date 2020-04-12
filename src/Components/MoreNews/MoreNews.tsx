import * as React from "react";
import {  getNews } from "../../Actions/Actions";
import { FiChevronsRight } from "react-icons/fi";
import { connect } from "react-redux";
import "./MoreNews.scss";
import Preloader from "../Preloader/Preloader";
import RightSidebar from "../RightSidebar/RightSidebar";

export interface MoreNewsProps {
    headlineNews: any | null;
  getNews: typeof getNews;
}

export interface State {}

class MoreNews extends React.Component<MoreNewsProps, State> {
  keyAPI: string = "74498e6f023d4358a296a9351a1ea043";
  colors: string[] = [
    "blue",
    "indigo",
    "purple",
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
    if (this.props.headlineNews === null) {
      this.props.getNews(
        `http://newsapi.org/v2/top-headlines?country=gb&category=business&apiKey=${this.keyAPI}`
      );
    }
  }
  render() {
    return this.props.headlineNews === null ? (
        <Preloader/>
      ) : (
        <React.Fragment>
          <div className="container mt-5 headline-news-article">
            <div className="row">
              <div className="col-lg-8">
                <div className="row">
                  <div className="col">
                    <div className="latest-headline-article">
                      <h3>
                        <mark>{this.props.headlineNews.articles[9].title}</mark>
                      </h3>
                      <img
                        className="img-fluid mb-1"
                        src={this.props.headlineNews.articles[9].urlToImage}
                        alt=""
                      />
                      <p>
                        {this.props.headlineNews.articles[9].description}
                        <FiChevronsRight
                          style={{ color: "orange", strokeWidth: 4 }}
                        />
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row headline-news-news">
                  {this.props.headlineNews.articles.map(
                    (article: any, i: number, arr: any) =>
                      i > 9 ? (
                        <div className="col-6" key={i}>
                          <h5>
                            <mark style={{ backgroundColor: this.colors[this.colors.length-i] }}>
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
                              style={{ color: this.colors[this.colors.length-i], strokeWidth: 4 }}
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
    headlineNews: state.data_news.headlineNews,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    getNews: (url: string) => dispatch(getNews(url)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MoreNews);