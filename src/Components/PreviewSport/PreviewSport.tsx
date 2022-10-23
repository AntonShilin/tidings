import * as React from "react";
import { getSport } from "../../Actions/Actions";
import { FiChevronsRight } from "react-icons/fi";
import { connect } from "react-redux";
import "./PreviewSport.scss";
import sport from "../Media/img/sport.jpg";
import { IData } from "../../Types/Types";
import { RootState } from "../../Store/Store";
import { NavLink } from "react-router-dom";

export interface IPreviewSportProps {
  sportNews: IData | null;
  getSport: typeof getSport;
  keyApi: string;
}

export interface State {}

class PreviewSport extends React.Component<IPreviewSportProps, State> {
  componentDidMount() {
    if (this.props.sportNews === null) {
      this.props.getSport(
        `https://newsapi.org/v2/top-headlines?country=ie&category=sports&apiKey=${this.props.keyApi}`
      );
    }
  }
  render() {
    return this.props.sportNews === null ? null : (
      <div className="container-xl">
        <div className="row mt-3 sport-news-header">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <h3>
              <mark>
                Sport
                <FiChevronsRight />
              </mark>
            </h3>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <p className="text-right">
              <NavLink to="/moresport">
                More sport stories
                <FiChevronsRight />
              </NavLink>
            </p>
          </div>
        </div>
        <div className="row sport-news-article">
          {this.props.sportNews.articles.map(
            (article: any, i: number, arr: any) =>
              i < 6 && (
                <div className="col-lg-4 col-md-6 col-sm-6" key={i}>
                  <h5>
                    <mark>
                      <NavLink to={`/moresport/${article.source.id}`}>
                        {article.title}
                        <FiChevronsRight />
                      </NavLink>
                    </mark>
                  </h5>
                  <img
                    className="img-fluid mb-1"
                    src={
                      article.urlToImage !== null ? article.urlToImage : sport
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
    sportNews: state.data_news.sportNews,
    keyApi: state.data_news.keyApi,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    getSport: (url: string) => dispatch(getSport(url)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PreviewSport);
