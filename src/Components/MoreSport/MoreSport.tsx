import * as React from "react";
import "./MoreSport.scss";
import { getSport } from "../../Actions/Actions";
import { connect } from "react-redux";
import { FiChevronsRight } from "react-icons/fi";
import RightSidebar from "../RightSidebar/RightSidebar";
import Preloader from "../Preloader/Preloader";
import sport from "../Media/img/sport.jpg";
import { RootState } from "../../Store/Store";
import { IData, IDataDescription } from "../../Types/Types";
import { NavLink } from "react-router-dom";

export interface IMoreSportProps {
  sportNews: IData | null;
  getSport: typeof getSport;
  colors: string[];
  keyApi: string;
}

export interface State {}

class MoreSport extends React.Component<IMoreSportProps, State> {
  componentDidMount() {
    if (this.props.sportNews === null) {
      this.props.getSport(
        `https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/top-headlines?country=ie&category=sports&apiKey=${this.props.keyApi}`
      );
    }
  }

  render() {
    return this.props.sportNews === null ? (
      <Preloader />
    ) : (
      <React.Fragment>
        <div className="container-xl mt-5 header-sport-article">
          <div className="row">
            <div className="col-lg-8 col-md-8 col-sm-12">
              <div className="row">
                <div className="col">
                  <div className="latest-sport-article">
                    <h3>
                      <mark>
                        <NavLink to="/moresport/0">
                          {this.props.sportNews.articles[0].title}
                        </NavLink>
                      </mark>
                    </h3>
                    <img
                      className="img-fluid mb-1"
                      src={
                        this.props.sportNews.articles[0].urlToImage !== null
                          ? this.props.sportNews.articles[0].urlToImage
                          : sport
                      }
                      alt="img"
                    />
                    <p>
                      {this.props.sportNews.articles[0].description}
                      <FiChevronsRight />
                    </p>
                  </div>
                </div>
              </div>
              <div className="row main-sport-news">
                {this.props.sportNews.articles.map(
                  (article: IDataDescription, i: number, arr: any) => (
                    <div className="col-lg-6 col-md-6 col-sm-12" key={i}>
                      <h5>
                        <mark
                          style={{
                            backgroundColor: this.props.colors[i],
                          }}
                        >
                          <NavLink to={`/moresport/${article.source.id}`}>
                            {article.title}
                          </NavLink>
                        </mark>
                      </h5>
                      <img
                        className="img-fluid mb-1"
                        src={
                          article.urlToImage !== null
                            ? article.urlToImage
                            : sport
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
    sportNews: state.data_news.sportNews,
    colors: state.data_news.colors,
    keyApi: state.data_news.keyApi,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    getSport: (url: string) => dispatch(getSport(url)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MoreSport);
