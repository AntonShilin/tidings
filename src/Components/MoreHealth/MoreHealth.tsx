import * as React from "react";
import { getHealth } from "../../Actions/Actions";
import { FiChevronsRight } from "react-icons/fi";
import { connect } from "react-redux";
import "./MoreHealth.scss";
import Preloader from "../Preloader/Preloader";
import RightSidebar from "../RightSidebar/RightSidebar";
import health from "../Media/img/health.jpg";
import { IData, IDataDescription } from "../../Types/Types";
import { RootState } from "../../Store/Store";
import { NavLink } from "react-router-dom";

export interface IMoreHealthProps {
  healthNews: IData | null;
  getHealth: typeof getHealth;
  colors: string[];
  keyApi: string;
}

export interface State {}

class MoreHealth extends React.Component<IMoreHealthProps, State> {
  // componentDidMount() {
  //   if (this.props.healthNews === null) {
  //     this.props.getHealth(
  //       `https://gnews.io/api/v4/search?q=example&token=${this.props.keyApi}`
  //     );
  //   }
  // }
  render() {
    return this.props.healthNews === null ? (
      <Preloader />
    ) : (
      <React.Fragment>
        <div className="container-xl mt-5 health-news-article">
          <div className="row">
            <div className="col-lg-8 col-md-8 col-sm-12">
              <div className="row">
                <div className="col">
                  <div className="latest-health-article">
                    <h3>
                      <mark>
                        <NavLink to="/morehealth/7">
                          {this.props.healthNews.articles[7].title}
                        </NavLink>
                      </mark>
                    </h3>
                    <img
                      className="img-fluid mb-1"
                      src={
                        this.props.healthNews.articles[7].urlToImage !== null
                          ? this.props.healthNews.articles[7].urlToImage
                          : health
                      }
                      alt="img"
                    />
                    <p>
                      {this.props.healthNews.articles[7].description}
                      <FiChevronsRight />
                    </p>
                  </div>
                </div>
              </div>
              <div className="row health-news-news">
                {this.props.healthNews.articles.map(
                  (article: IDataDescription, i: number, arr: any) => (
                    <div className="col-lg-6 col-md-6 col-sm-12" key={i}>
                      <h5>
                        <mark
                          style={{
                            backgroundColor: this.props.colors[i],
                          }}
                        >
                          <NavLink to={`/morehealth/${article.source.id}`}>
                            {article.title}
                          </NavLink>
                        </mark>
                      </h5>
                      <img
                        className="img-fluid mb-1"
                        src={
                          article.urlToImage !== null
                            ? article.urlToImage
                            : health
                        }
                        alt="img"
                      />
                      <p>
                        {article.description}
                        <FiChevronsRight
                          style={{
                            color: this.props.colors[i],
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
    healthNews: state.data_news.healthNews,
    keyApi: state.data_news.keyApi,
    colors: state.data_news.colors,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    getHealth: (url: string) => dispatch(getHealth(url)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MoreHealth);
