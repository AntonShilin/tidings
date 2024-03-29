import * as React from "react";
import "./MoreTrending.scss";
import { getTrending } from "../../Actions/Actions";
import { connect } from "react-redux";
import { FiChevronsRight } from "react-icons/fi";
import RightSidebar from "../RightSidebar/RightSidebar";
import Preloader from "../Preloader/Preloader";
import trends from "../Media/img/trends.jpg";
import { IData, IDataDescription } from "../../Types/Types";
import { RootState } from "../../Store/Store";

export interface IMoreTrendingProps {
  trendingNews: IData | null;
  getTrending: typeof getTrending;
  colors: string[];
  keyApi: string;
}

export interface State {}

class MoreTrending extends React.Component<IMoreTrendingProps, State> {

  // componentDidMount() {
  //   if (this.props.trendingNews === null) {
  //     this.props.getTrending(
  //       `https://gnews.io/api/v4/search?q=example&token=${this.props.keyApi}`
  //     );
  //   }
  // }

  render() {
    return this.props.trendingNews === null ? (
      <Preloader />
    ) : (
      <React.Fragment>
        <div className="container-xl mt-5 header-trending-article">
          <div className="row">
            <div className="col-lg-8">
              <div className="row main-trending-news">
                {this.props.trendingNews.articles.map(
                  (article: IDataDescription, i: number, arr: any) => (
                    <div className="col-12 mb-2" key={i}>
                      <div className="row">
                        <div className="col-6">
                          <div className="trending-number">
                            <p>{i}</p>
                          </div>
                          <img
                            className="img-fluid"
                            src={
                              article.urlToImage !== null
                                ? article.urlToImage
                                : trends
                            }
                            alt="img"
                          />
                        </div>
                        <div className="col-6">
                          <h5>{article.title}</h5>
                          <p className="">
                            {article.description}
                            <FiChevronsRight
                              style={{
                                color: this.props.colors[i],
                                strokeWidth: 4,
                              }}
                            />
                          </p>
                        </div>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
            <div className="col-lg-4 d-lg-block d-md-none">
              <RightSidebar />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state: RootState) => {
  return {
    trendingNews: state.data_news.trendingNews,
    colors: state.data_news.colors,
    keyApi: state.data_news.keyApi,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    getTrending: (url: string) => dispatch(getTrending(url)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MoreTrending);
