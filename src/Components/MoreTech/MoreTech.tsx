import * as React from "react";
import "./MoreTech.scss";
import { getTech, showFullArticleInfo } from "../../Actions/Actions";
import { connect } from "react-redux";
import { FiChevronsRight } from "react-icons/fi";
import RightSidebar from "../RightSidebar/RightSidebar";
import Preloader from "../Preloader/Preloader";
import tech from "../Media/img/tech.jpg";
import { IData } from "../../Types/Types";
import { RootState } from "../../Store/Store";
import { withRouter, RouteComponentProps, NavLink } from "react-router-dom";

export interface IMoreTechProps {
  techNews: IData | null;
  getTech: typeof getTech;
  colors: string[];
  showFullArticleInfo: typeof showFullArticleInfo;
  keyApi: string;
}

export interface State {}

class MoreTech extends React.Component<IMoreTechProps, State> {
  componentDidMount() {
    if (this.props.techNews === null) {
      this.props.getTech(
        `https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=${this.props.keyApi}`
      );
    }
  }

  render() {
    return this.props.techNews === null ? (
      <Preloader />
    ) : (
      <React.Fragment>
        <div className="container-xl mt-5 header-tech-article">
          <div className="row">
            <div className="col-lg-8 col-md-8 col-sm-12">
              <div className="row">
                <div className="col">
                  <div className="latest-tech-article">
                    <h3>
                      <mark>
                        <NavLink to={`/moretech/9`}>
                          {this.props.techNews.articles[9].title}
                        </NavLink>
                      </mark>
                    </h3>
                    <img
                      className="img-fluid mb-1"
                      src={
                        this.props.techNews.articles[9].urlToImage !== null
                          ? this.props.techNews.articles[9].urlToImage
                          : tech
                      }
                      alt="img"
                    />
                    <p>
                      {this.props.techNews.articles[9].description}
                      <FiChevronsRight
                      />
                    </p>
                  </div>
                </div>
              </div>
              <div className="row main-tech-news">
                {this.props.techNews.articles.map(
                  (article: any, i: number, arr: any) => (
                    <div className="col-lg-6 col-md-6 col-sm-12" key={i}>
                      <h5>
                        <mark
                          style={{
                            backgroundColor: this.props.colors[
                              this.props.colors.length - i
                            ],
                          }}
                        >
                          <NavLink to={`/moretech/${article.source.id}`}>
                            {article.title}
                          </NavLink>
                        </mark>
                      </h5>
                      <img
                        className="img-fluid mb-1"
                        src={
                          article.urlToImage !== null
                            ? article.urlToImage
                            : tech
                        }
                        alt="img"
                      />
                      <p>
                        {article.description}
                        <FiChevronsRight
                          style={{
                            color: this.props.colors[
                              this.props.colors.length - i
                            ],
                            strokeWidth: 4,
                          }}
                        />
                      </p>
                    </div>
                  )
                )}
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
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
    techNews: state.data_news.techNews,
    colors: state.data_news.colors,
    keyApi: state.data_news.keyApi,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    getTech: (url: string) => dispatch(getTech(url)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MoreTech);
