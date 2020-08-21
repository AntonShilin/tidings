import * as React from "react";
import Preloader from "../Preloader/Preloader";
import RightSidebar from "../RightSidebar/RightSidebar";
import { getEntertainment, showFullArticleInfo } from "../../Actions/Actions";
import { FiChevronsRight } from "react-icons/fi";
import { connect } from "react-redux";
import "./MoreEntertainment.scss";
import entertainment from "../Media/img/entertainment.jpg";
import { IData, IDataDescription } from "../../Types/Types";
import { RootState } from "../../Store/Store";
import { NavLink } from "react-router-dom";

export interface IMoreEntertainmentProps {
  entertainmentNews: IData | null;
  getEntertainment: typeof getEntertainment;
  showFullArticleInfo: typeof showFullArticleInfo;
  colors: string[];
  keyApi: string;
}

export interface State {}

class MoreEntertainment extends React.Component<
  IMoreEntertainmentProps,
  State
> {
  componentDidMount() {
    if (this.props.entertainmentNews === null) {
      this.props.getEntertainment(
        `https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/top-headlines?country=gb&category=entertainment&apiKey=${this.props.keyApi}`
      );
    }
  }
  render() {
    return this.props.entertainmentNews === null ? (
      <Preloader />
    ) : (
      <React.Fragment>
        <div className="container-xl entertainment-article">
          <div className="row">
            <div className="col-lg-8 col-md-8 col-sm-12">
              <div className="row">
                <div className="col">
                  <div className="latest-entertainment">
                    <h3>
                      <mark>
                        <NavLink to="/moreentertainment/0">
                          {this.props.entertainmentNews.articles[0].title}
                        </NavLink>
                      </mark>
                    </h3>
                    <img
                      className="img-fluid mb-1"
                      src={
                        this.props.entertainmentNews.articles[0].urlToImage !==
                        null
                          ? this.props.entertainmentNews.articles[0].urlToImage
                          : entertainment
                      }
                      alt="img"
                    />
                    <p>
                      {this.props.entertainmentNews.articles[0].description}
                      <FiChevronsRight
                      />
                    </p>
                  </div>
                </div>
              </div>
              <div className="row entertainment-news">
                {this.props.entertainmentNews.articles.map(
                  (article: IDataDescription, i: number, arr: any) => (
                    <div className="col-lg-6 col-md-6 col-sm-12" key={i}>
                      <h5>
                        <mark
                          style={{
                            backgroundColor: this.props.colors[i],
                          }}
                        >
                          <NavLink
                            to={`/moreentertainment/${article.source.id}`}
                          >
                            {article.title}
                          </NavLink>
                        </mark>
                      </h5>
                      <img
                        className="img-fluid mb-1"
                        src={
                          article.urlToImage !== null
                            ? article.urlToImage
                            : entertainment
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
    entertainmentNews: state.data_news.entertainmentNews,
    keyApi: state.data_news.keyApi,
    colors: state.data_news.colors,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    getEntertainment: (url: string) => dispatch(getEntertainment(url)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MoreEntertainment);
