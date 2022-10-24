import * as React from "react";
import "./SelectArticleBusiness.scss";
import { connect } from "react-redux";
import Preloader from "../../Preloader/Preloader";
import { FiChevronsRight } from "react-icons/fi";
import { getBusiness, goToPublisherPage } from "../../../Actions/Actions";
import RightSidebar from "../../RightSidebar/RightSidebar";
import defaultImage from "../../Media/img/business.jpg";
import { IData, RouteParams } from "../../../Types/Types";
import { RootState } from "../../../Store/Store";
import PreviewBusiness from "../../PreviewBusiness/PreviewBusiness";
import { RouteComponentProps, withRouter } from "react-router-dom";

export interface ISelectArticleProps extends RouteComponentProps<RouteParams>{
  businessNews: IData | null;
  getBusiness: typeof getBusiness;
  goToPublisherPage: typeof goToPublisherPage;
  colors: string[];
  keyApi: string;
}

export interface State {}

class SelectArticleBusiness extends React.Component<
  ISelectArticleProps,
  State
> {
  // componentDidMount() {
  //   if (this.props.businessNews === null) {
  //     this.props.getBusiness(
  //       `https://gnews.io/api/v4/search?q=example&token=${this.props.keyApi}`
  //     );
  //   }
  // }

  render() {
    const id: number = +this.props.match.params.id;

    return this.props.businessNews === null ? (
      <Preloader />
    ) : (
      <React.Fragment>
        <div className="container-xl">
          <div className="row selected-article">
            <div
              className="col-lg-8 col-md-8 col-sm-12"
              onClick={() =>
                this.props.goToPublisherPage(
                  this.props.businessNews!.articles[id].url
                )
              }
            >
              <h1>{this.props.businessNews.articles[id].title}</h1>
              <p>
                <b>{this.props.businessNews.articles[id].author} </b>
                <small>
                  {this.props.businessNews.articles[id].publishedAt.match(
                    /\d+\-\d+\d+\-\d+/g
                  )}
                </small>
              </p>
              <img
                src={
                  this.props.businessNews.articles[id].urlToImage !== null
                    ? this.props.businessNews.articles[id].urlToImage
                    : defaultImage
                }
                alt="img_1"
                className="img-fluid"
              />
              <p>
                {this.props.businessNews.articles[id].content}
                <FiChevronsRight />
              </p>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <RightSidebar />
            </div>
          </div>
          </div>
          <PreviewBusiness/>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state: RootState) => {
  return {
    businessNews: state.data_news.businessNews,
    colors: state.data_news.colors,
    keyApi: state.data_news.keyApi,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    getBusiness: (url: string) => dispatch(getBusiness(url)),
    goToPublisherPage: (adress: string) => dispatch(goToPublisherPage(adress)),
  };
};

const withRouterProps = withRouter(SelectArticleBusiness);
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouterProps);
