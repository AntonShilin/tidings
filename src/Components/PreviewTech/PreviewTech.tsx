import * as React from "react";
import { getTech } from "../../Actions/Actions";
import { FiChevronsRight } from "react-icons/fi";
import { connect } from "react-redux";
import "./PreviewTech.scss";
import defaultImage from "../Media/img/tech.jpg";
import { IData } from "../../Types/Types";
import { RootState } from "../../Store/Store";
import { RouteComponentProps, NavLink } from "react-router-dom";

export interface IPreviewTechProps {
  techNews: IData | null;
  getTech: typeof getTech;
  keyApi: string;
}

export interface State {}

class PreviewTech extends React.Component<IPreviewTechProps, State> {
  componentDidMount() {
    if (this.props.techNews === null) {
      this.props.getTech(
        `https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=${this.props.keyApi}`
      );
    }
  }
  render() {
    return this.props.techNews === null ? null : (
      <div className="container-xl">
        <div className="row mt-3 tech-news-header">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <h3>
              <mark>
                Tech
                <FiChevronsRight style={{ color: "white", strokeWidth: 4 }} />
              </mark>
            </h3>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <p className="text-right">
              <NavLink to="/moretech">
                More tech stories
                <FiChevronsRight />
              </NavLink>
            </p>
          </div>
        </div>
        <div className="row tech-news-article">
          {this.props.techNews.articles.map(
            (article: any, i: number, arr: any) =>
              i < 6 && (
                <div className="col-lg-4 col-md-6 col-sm-6" key={i}>
                  <h5>
                    <mark>
                      <NavLink to={`/moretech/${article.source.id}`}>
                        {article.title}
                        <FiChevronsRight />
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
    techNews: state.data_news.techNews,
    keyApi: state.data_news.keyApi,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    getTech: (url: string) => dispatch(getTech(url)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PreviewTech);
