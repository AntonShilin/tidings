import * as React from "react";
import "./SelectArticleEntertainment.scss";
import { connect } from "react-redux";
import Preloader from "../../Preloader/Preloader";
import { FiChevronsRight } from "react-icons/fi";
import { getEntertainment, goToPublisherPage } from "../../../Actions/Actions";
import RightSidebar from "../../RightSidebar/RightSidebar";
import defaultImage from "../../Media/img/entertainment.jpg";

export interface SelectArticleProps {
  entertainmentNews: any | null;
  getEntertainment: typeof getEntertainment;
  goToPublisherPage: typeof goToPublisherPage;
  url: any;
  colors: string[];
  keyApi: string;
}

export interface State {}

class SelectArticleEntertainment extends React.Component<
  SelectArticleProps,
  State
> {
  componentDidMount() {
    if (this.props.entertainmentNews === null) {
      this.props.getEntertainment(
        `https://newsapi.org/v2/top-headlines?country=gb&category=entertainment&apiKey=${this.props.keyApi}`
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
          <div
            className="col-lg-8 col-md-8 col-sm-12"
            onClick={() =>
              this.props.goToPublisherPage(
                this.props.entertainmentNews.articles[id].url
              )
            }
          >
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
    keyApi: state.data_news.keyApi,
    url,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    getEntertainment: (url: string) => dispatch(getEntertainment(url)),
    goToPublisherPage: (adress: string) => dispatch(goToPublisherPage(adress)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectArticleEntertainment);
