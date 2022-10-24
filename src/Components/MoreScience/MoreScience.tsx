import * as React from "react";
import { getScience } from "../../Actions/Actions";
import { FiChevronsRight } from "react-icons/fi";
import { connect } from "react-redux";
import "./MoreScience.scss";
import Preloader from "../Preloader/Preloader";
import RightSidebar from "../RightSidebar/RightSidebar";
import science from "../Media/img/science.jpg";
import { IData } from "../../Types/Types";
import { RootState } from "../../Store/Store";
import { NavLink } from "react-router-dom";

export interface IMoreScienceProps {
  scienceNews: IData | null;
  getScience: typeof getScience;
  colors: string[];
  url: any;
  keyApi: string;
}

export interface State {}

class MoreScience extends React.Component<IMoreScienceProps, State> {
  // componentDidMount() {
  //   if (this.props.scienceNews === null) {
  //     this.props.getScience(
  //       `https://gnews.io/api/v4/search?q=example&token=${this.props.keyApi}`
  //     );
  //   }
  // }
  render() {
    return this.props.scienceNews === null ? (
      <Preloader />
    ) : (
      <React.Fragment>
        <div className="container-xl mt-5 science-news-article">
          <div className="row">
            <div className="col-lg-8 col-md-8 col-sm-12">
              <div className="row">
                <div className="col">
                  <div className="latest-science-article">
                    <h3>
                      <mark>
                        <NavLink to="/morescience/0">
                          {this.props.scienceNews.articles[0].title}
                        </NavLink>
                      </mark>
                    </h3>
                    <img
                      className="img-fluid mb-1"
                      src={
                        this.props.scienceNews.articles[0].urlToImage !== null
                          ? this.props.scienceNews.articles[0].urlToImage
                          : science
                      }
                      alt="img"
                    />
                    <p>
                      {this.props.scienceNews.articles[0].description}
                      <FiChevronsRight />
                    </p>
                  </div>
                </div>
              </div>
              <div className="row science-news-news">
                {this.props.scienceNews.articles.map(
                  (article: any, i: number, arr: any) => (
                    <div className="col-lg-6 col-md-6 col-sm-12" key={i}>
                      <h5>
                        <mark
                          style={{
                            backgroundColor: this.props.colors[i],
                          }}
                        >
                          <NavLink to={`/morescience/${article.source.id}`}>
                            {article.title}
                            </NavLink>
                        </mark>
                      </h5>
                      <img
                        className="img-fluid mb-1"
                        src={
                          article.urlToImage !== null
                            ? article.urlToImage
                            : science
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
    scienceNews: state.data_news.scienceNews,
    colors: state.data_news.colors,
    keyApi: state.data_news.keyApi,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    getScience: (url: string) => dispatch(getScience(url)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MoreScience);
