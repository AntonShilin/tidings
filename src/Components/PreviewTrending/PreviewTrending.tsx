import * as React from "react";
import { connect } from "react-redux";
import { getTrending } from "../../Actions/Actions";
import { FiChevronsRight } from "react-icons/fi";
import "./PreviewTrending.scss";
import defaultImage from "../Media/img/trends.jpg";
import { IData, IDataDescription } from "../../Types/Types";
import { RootState } from "../../Store/Store";
import { NavLink, withRouter, RouteComponentProps } from "react-router-dom";

export interface IPreviewTrendingProps extends RouteComponentProps {
  trendingNews: IData | null;
  getTrending: typeof getTrending;
  keyApi: string;
}

export interface State {}

class PreviewTrending extends React.Component<IPreviewTrendingProps, State> {
  // componentDidMount() {
  //   if (this.props.trendingNews === null) {
  //     this.props.getTrending(
  //       `https://gnews.io/api/v4/search?q=example&token=${this.props.keyApi}`
  //     );
  //   }
  // }

  render() {
    return this.props.trendingNews === null ? null : (
      <div className="container-xl">
        <div className="row mt-3 trending-news-header">
          <div className="col-lg-6 col-md-7 col-sm-12">
            <h3>
              <mark>
                What is the trending now
                <FiChevronsRight />
              </mark>
            </h3>
          </div>
          <div className="col-lg-6 col-md-5 d-none d-md-block d-lg-block">
            <NavLink to="/moretrending">
              More trending stories
              <FiChevronsRight />
            </NavLink>
          </div>
        </div>
        <div className="row trending-news-article">
          {this.props.trendingNews.articles.map(
            (article: IDataDescription, i: number, arr: any) =>
              i < 4 && (
                <div className="col-lg-3 col-md-6 col-sm-12" key={i}>
                  <div className="article-number">
                    <span>{i + 1}</span>
                  </div>
                  <h5>
                    <mark>
                      <NavLink to={`/moretrending/${article.source.id}`}>
                        {article.title}
                      </NavLink>
                    </mark>
                  </h5>
                  <img
                    className="img-fluid mb-1"
                    src={
                      article.urlToImage !== null
                        ? article.urlToImage
                        : defaultImage
                    }
                    alt="img"
                  />
                </div>
              )
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: RootState) => {
  return {
    trendingNews: state.data_news.trendingNews,
    keyApi: state.data_news.keyApi,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    getTrending: (url: string) => dispatch(getTrending(url)),
  };
};

const withRouterProps = withRouter(PreviewTrending);
export default connect(mapStateToProps, mapDispatchToProps)(withRouterProps);
