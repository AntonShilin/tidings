import * as React from "react";
import "./TitleSelectArticle.scss";
import { connect } from "react-redux";
import Preloader from "../../Preloader/Preloader";
import { FiChevronsRight } from "react-icons/fi";
import { getData, goToPublisherPage } from "../../../Actions/Actions";
import RightSidebar from "../../RightSidebar/RightSidebar";
import { RouteComponentProps } from "react-router-dom";
import { IAplicationState } from "../../../Store/Store";
import defaultImage from "../../Media/img/news.jpg";

export interface SelectArticleProps {
  titlepageNews: any;
  getData: typeof getData;
  goToPublisherPage: typeof goToPublisherPage;
  url: any;
  keyApi: string;
}

export interface State {}

class TitleSelectArticle extends React.Component<SelectArticleProps, State> {
  componentDidMount() {
    if (this.props.titlepageNews === null) {
      this.props.getData(
        `https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/top-headlines?country=us&apiKey=${this.props.keyApi}`
      );
    }
  }

  render() {
    const id: number = this.props.url.match.params.id;

    return this.props.titlepageNews === null ? (
      <Preloader />
    ) : (
      <div className="container">
        <div className="row selected-article">
          <div
            className="col-lg-8 col-md-8 col-sm-12"
            onClick={() =>
              this.props.goToPublisherPage(
                this.props.titlepageNews.articles[id].url
              )
            }
          >
            <h1>{this.props.titlepageNews.articles[id].title}</h1>
            <p>
              <b>{this.props.titlepageNews.articles[id].author} </b>
              <small>
                {this.props.titlepageNews.articles[id].publishedAt.match(
                  /\d+\-\d+\d+\-\d+/g
                )}
              </small>
            </p>
            <img
              src={
                this.props.titlepageNews.articles[id].urlToImage !== null
                  ? this.props.titlepageNews.articles[id].urlToImage
                  : defaultImage
              }
              alt="img_1"
              className="img-fluid"
            />
            <p>
              {this.props.titlepageNews.articles[id].content}
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

const mapStateToProps = (state: IAplicationState, url: RouteComponentProps) => {
  return {
    titlepageNews: state.data_news.titlepageNews,
    keyApi: state.data_news.keyApi,
    colors: state.data_news.colors,
    url,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    getData: (url: string) => dispatch(getData(url)),
    goToPublisherPage: (adress: string) => dispatch(goToPublisherPage(adress)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TitleSelectArticle);
