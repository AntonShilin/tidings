import * as React from "react";
import "./TitleSelectArticle.scss";
import { connect } from "react-redux";
import Preloader from "../../Preloader/Preloader";
import { FiChevronsRight } from "react-icons/fi";
import { getData, goToPublisherPage } from "../../../Actions/Actions";
import RightSidebar from "../../RightSidebar/RightSidebar";
import { RouteComponentProps } from "react-router-dom";
import defaultImage from "../../Media/img/news.jpg";
import { RootState } from "../../../Store/Store";
import {  ITitle } from "../../../Types/Types";

export interface ISelectArticleProps {
  titlepageNews: ITitle | null;
  getData: typeof getData;
  goToPublisherPage: typeof goToPublisherPage;
  url: any;
}

export interface State {}

class TitleSelectArticle extends React.Component<ISelectArticleProps, State> {
  componentDidMount() {
    if (this.props.titlepageNews === null) {
      this.props.getData();
    }
  }

  render() {
    const id: number = this.props.url.match.params.id;

    return this.props.titlepageNews === null ? (
      <Preloader />
    ) : (
      <div className="container-xl">
        <div className="row selected-article">
          <div
            className="col-lg-8 col-md-8 col-sm-12"
            onClick={() =>
              this.props.goToPublisherPage(
                this.props.titlepageNews!.articles[id].url
              )
            }
          >
            <h1>{this.props.titlepageNews.articles[id].title}</h1>
            <p>
              <b>{this.props.titlepageNews.articles[id].source.name} </b>
              <small>
                {this.props.titlepageNews.articles[id].publishedAt}
              </small>
            </p>
            <img
              src={
                this.props.titlepageNews.articles[id].image !== null
                  ? this.props.titlepageNews.articles[id].image
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

const mapStateToProps = (state: RootState, url: RouteComponentProps) => {
  return {
    titlepageNews: state.data_news.titlepageNews,
    colors: state.data_news.colors,
    url,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    getData: () => dispatch(getData()),
    goToPublisherPage: (adress: string) => dispatch(goToPublisherPage(adress)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TitleSelectArticle);
