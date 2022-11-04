import * as React from "react";
import "./SelectArticleSidebar.scss";
import { connect } from "react-redux";
import Preloader from "../../Preloader/Preloader";
import { FiChevronsRight } from "react-icons/fi";
import {
  goToPublisherPage,
  getSidebarNews,
} from "../../../Actions/Actions";
import defaultImage from "../../Media/img/articles.jpg";
import { ITitle } from "../../../Types/Types";
import { RootState } from "../../../Store/Store";
import RightSidebar from "../RightSidebar";

export interface ISelectArticleProps {
  sidebarNews: ITitle | null;
  goToPublisherPage: typeof goToPublisherPage;
  getSidebarNews: typeof getSidebarNews;
  colors: string[];
  url: any;
}

export interface State {}

class SelectArticleSidebar extends React.Component<ISelectArticleProps, State> {
  componentDidMount() {
    if (this.props.sidebarNews === null) {
      this.props.url.history.goBack();
    }
  }

  render() {
    const id: number = this.props.url.match.params.id;

    if (this.props.sidebarNews === null) {
      return <Preloader />;
    }

    const selectArticle = (
      <div className="container-xl">
        <div className="row selected-article">
          <div
            className="col-lg-8 col-md-8 col-sm-12"
            onClick={() =>
              this.props.goToPublisherPage(
                this.props.sidebarNews!.articles[id].url
              )
            }
          >
            <h1>{this.props.sidebarNews.articles[id].title}</h1>
            <p>
              <b>{this.props.sidebarNews.articles[id].source.name} </b>
              {<small>{this.props.sidebarNews.articles[id].publishedAt}</small>}
            </p>
            <img
              src={
                this.props.sidebarNews.articles[id].image !== null
                  ? this.props.sidebarNews.articles[id].image
                  : defaultImage
              }
              alt="img_1"
              className="img-fluid"
            />
            <p>
              {this.props.sidebarNews.articles[id].content}
              <FiChevronsRight style={{ color: "orange", strokeWidth: 4 }} />
            </p>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-none">
            <RightSidebar />
          </div>
        </div>
      </div>
    );

    return selectArticle;
  }
}

const mapStateToProps = (state: RootState, url: any) => {
  return {
    sidebarNews: state.data_news.sidebarNews,
    colors: state.data_news.colors,
    url,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    getSidebarNews: (news: ITitle | null) => getSidebarNews(news),
    goToPublisherPage: (adress: string) => dispatch(goToPublisherPage(adress)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectArticleSidebar);
