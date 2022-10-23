import * as React from "react";
import "./SelectArticleSport.scss";
import { connect } from "react-redux";
import Preloader from "../../Preloader/Preloader";
import { FiChevronsRight } from "react-icons/fi";
import { getSport, goToPublisherPage } from "../../../Actions/Actions";
import RightSidebar from "../../RightSidebar/RightSidebar";
import defaultImage from "../../Media/img/question.jpg";
import PreviewTech from "../../PreviewTech/PreviewTech";
import { IData, RouteParams } from "../../../Types/Types";
import { RootState } from "../../../Store/Store";
import { withRouter, RouteComponentProps } from "react-router-dom";

export interface ISelectArticleProps extends RouteComponentProps<RouteParams> {
  sportNews: IData | null;
  getSport: typeof getSport;
  goToPublisherPage: typeof goToPublisherPage;
  colors: string[];
  keyApi: string;
}

export interface State {}

class SelectArticleSport extends React.Component<ISelectArticleProps, State> {
  componentDidMount() {
    if (this.props.sportNews === null) {
      this.props.getSport(
        `https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=${this.props.keyApi}`
      );
    }
  }

  render() {
    const id: number = +this.props.match.params.id;

    return this.props.sportNews === null ? (
      <Preloader />
    ) : (
      <div className="container-xl">
        <div className="row selected-article">
          <div
            className="col-lg-8 col-md-8 col-sm-12"
            onClick={() =>
              this.props.goToPublisherPage(
                this.props.sportNews!.articles[id].url
              )
            }
          >
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
              <FiChevronsRight />
            </p>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12">
            <RightSidebar />
          </div>
        </div>
        <PreviewTech />
      </div>
    );
  }
}

const mapStateToProps = (state: RootState) => {
  return {
    sportNews: state.data_news.sportNews,
    colors: state.data_news.colors,
    keyApi: state.data_news.keyApi,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    getSport: (url: string) => dispatch(getSport(url)),
    goToPublisherPage: (adress: string) => dispatch(goToPublisherPage(adress)),
  };
};

const withRouterProps = withRouter(SelectArticleSport);
export default connect(mapStateToProps, mapDispatchToProps)(withRouterProps);
