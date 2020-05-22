import * as React from "react";
import "./SelectArticleHealth.scss";
import { connect } from "react-redux";
import Preloader from "../../Preloader/Preloader";
import { FiChevronsRight } from "react-icons/fi";
import { getHealth, goToPublisherPage } from "../../../Actions/Actions";
import RightSidebar from "../../RightSidebar/RightSidebar";
import defaultImage  from "../../Media/img/health.jpg";

export interface SelectArticleProps {
  healthNews: any | null;
  getHealth: typeof getHealth;
  goToPublisherPage: typeof goToPublisherPage;
  colors: string[];
  url: any;
  keyApi: string;
}

export interface State {}

class SelectArticleHealth extends React.Component<SelectArticleProps, State> {
  keyAPI: string = "f22dba07b79e44d89a3acfbfb6d70463";

  componentDidMount() {
    if (this.props.healthNews === null) {
      this.props.getHealth(
        `https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=${this.props.keyApi}`
      );
    }
  }

  render() {
    const id: number = this.props.url.match.params.id;

    return this.props.healthNews === null ? (
      <Preloader />
    ) : (
      <div className="container">
        <div className="row selected-article">
          <div className="col-lg-8 col-md-8 col-sm-12"  onClick={() =>
              this.props.goToPublisherPage(
                this.props.healthNews.articles[id].url
              )
            }>
            <h1>{this.props.healthNews.articles[id].title}</h1>
            <p>
              <b>{this.props.healthNews.articles[id].author} </b>
              <small>
                {this.props.healthNews.articles[id].publishedAt.match(
                  /\d+\-\d+\d+\-\d+/g
                )}
              </small>
            </p>
            <img
              src={
                this.props.healthNews.articles[id].urlToImage !== null
                  ? this.props.healthNews.articles[id].urlToImage
                  : defaultImage
              }
              alt="img_1"
              className="img-fluid"
            />
            <p>
              {this.props.healthNews.articles[id].content}
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
    healthNews: state.data_news.healthNews,
    colors: state.data_news.colors,
    keyApi: state.data_news.keyApi,
    url
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    getHealth: (url: string) => dispatch(getHealth(url)),
    goToPublisherPage: (adress: string) => dispatch(goToPublisherPage(adress)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectArticleHealth);
