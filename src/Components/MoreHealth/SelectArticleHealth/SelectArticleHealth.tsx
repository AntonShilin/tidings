import * as React from "react";
import "./SelectArticleHealth.scss";
import { connect } from "react-redux";
import Preloader from "../../Preloader/Preloader";
import { FiChevronsRight } from "react-icons/fi";
import { getHealth, goToPublisherPage } from "../../../Actions/Actions";
import RightSidebar from "../../RightSidebar/RightSidebar";
import defaultImage from "../../Media/img/health.jpg";
import { IData, RouteParams } from "../../../Types/Types";
import PreviewBusiness from "../../PreviewBusiness/PreviewBusiness";
import { RootState } from "../../../Store/Store";
import { RouteComponentProps, withRouter } from "react-router-dom";

export interface ISelectArticleProps extends RouteComponentProps<RouteParams> {
  healthNews: IData | null;
  getHealth: typeof getHealth;
  goToPublisherPage: typeof goToPublisherPage;
  colors: string[];
  keyApi: string;
}

export interface State {}

class SelectArticleHealth extends React.Component<ISelectArticleProps, State> {
  
  // componentDidMount() {
  //   if (this.props.healthNews === null) {
  //     this.props.getHealth(
  //       `https://gnews.io/api/v4/search?q=example&token=${this.props.keyApi}`
  //     );
  //   }
  // }

  render() {
    const id: number = +this.props.match.params.id;

    return this.props.healthNews === null ? (
      <Preloader />
    ) : (
      <React.Fragment>
        <div className="container-xl">
          <div className="row selected-article">
            <div
              className="col-lg-8 col-md-8 col-sm-12"
              onClick={() =>
                this.props.goToPublisherPage(
                  this.props.healthNews!.articles[id].url
                )
              }
            >
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
                <FiChevronsRight/>
              </p>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <RightSidebar />
            </div>
          </div>
        </div>
        <PreviewBusiness />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state: RootState) => {
  return {
    healthNews: state.data_news.healthNews,
    colors: state.data_news.colors,
    keyApi: state.data_news.keyApi,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    getHealth: (url: string) => dispatch(getHealth(url)),
    goToPublisherPage: (adress: string) => dispatch(goToPublisherPage(adress)),
  };
};

const withRouterProps = withRouter(SelectArticleHealth);
export default connect(mapStateToProps, mapDispatchToProps)(withRouterProps);
