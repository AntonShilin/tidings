import * as React from "react";
import { getSidebarNews, showSidebarArticleInfo } from "../../Actions/Actions";
import { connect } from "react-redux";
import "./RightSidebar.scss";
import { withRouter } from "react-router";
import defaultImage from "../Media/img/articles.jpg";
import { ITitle } from "../../Types/Types";
import { RootState } from "../../Store/Store";

export interface IRightSidebarProps {
  sidebarNews: ITitle | null;
  titlepageNews: ITitle | null;
  getSidebarNews: typeof getSidebarNews;
  showSidebarArticleInfo: typeof showSidebarArticleInfo;
  url: any;
}

export interface State {}

class RightSidebar extends React.Component<IRightSidebarProps, State> {
  componentDidMount() {
    if (this.props.sidebarNews === null) {
      this.props.getSidebarNews(this.props.titlepageNews);
    }
  }

  render() {
    return (
      <div className="container-xl header-right-sidebar">
        <div className="row">
          <h3 className="text-start mb-4">
            <mark>Just in</mark>
          </h3>
        </div>
        <div className="row">
          {this.props.sidebarNews !== null
            ? this.props.sidebarNews.articles
                .reverse()
                .map((article: any, i: number) => (
                  <div
                    key={i}
                    className="col-12 article_right_sidebar mb-2"
                    // onClick={() =>
                    //   this.props.showSidebarArticleInfo(
                    //     this.props.sidebarNews!.articles[i].source.id,
                    //     this.props.url
                    //   )
                    // }
                  >
                    <p>
                      <img
                        src={
                          this.props.sidebarNews!.articles[i].image !== null
                            ? this.props.sidebarNews!.articles[i].image
                            : defaultImage
                        }
                        className="img-fluid"
                        alt="img"
                      />
                      {article.description}
                    </p>
                  </div>
                ))
            : null}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: RootState, url: any) => {
  return {
    sidebarNews: state.data_news.sidebarNews,
    titlepageNews: state.data_news.titlepageNews,
    url,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    getSidebarNews: (news: ITitle | null) => dispatch(getSidebarNews(news)),
    showSidebarArticleInfo: (id: number, url: any) =>
      dispatch(showSidebarArticleInfo(id, url)),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(RightSidebar)
);
