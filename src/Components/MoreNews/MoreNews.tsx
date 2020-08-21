import * as React from "react";
import { getNews, showFullArticleInfo } from "../../Actions/Actions";
import { FiChevronsRight } from "react-icons/fi";
import { connect } from "react-redux";
import "./MoreNews.scss";
import Preloader from "../Preloader/Preloader";
import RightSidebar from "../RightSidebar/RightSidebar";
import news from "../Media/img/news.jpg";
import { IData, IDataDescription } from "../../Types/Types";
import { RootState } from "../../Store/Store";
import { NavLink } from "react-router-dom";

export interface IMoreNewsProps {
  headlineNews: IData | null;
  getNews: typeof getNews;
  colors: string[];
  showFullArticleInfo: typeof showFullArticleInfo;
  keyApi: string;
}

export interface State {}

class MoreNews extends React.Component<IMoreNewsProps, State> {
  componentDidMount() {
    if (this.props.headlineNews === null) {
      this.props.getNews(
        `https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/top-headlines?country=us&apiKey=${this.props.keyApi}`
      );
    }
  }

  render() {
    return this.props.headlineNews === null ? (
      <Preloader />
    ) : (
      <React.Fragment>
        <div className="container-xl mt-5 headline-news-article">
          <div className="row">
            <div className="col-lg-8 col-md-8 col-sm-12">
              <div className="row">
                <div className="col">
                  <div className="latest-headline-article">
                    <h3>
                      <mark>
                        <NavLink to="/morenews/9">
                          {this.props.headlineNews.articles[9].title}
                        </NavLink>
                      </mark>
                    </h3>
                    <img
                      className="img-fluid mb-1"
                      src={
                        this.props.headlineNews.articles[9].urlToImage !== null
                          ? this.props.headlineNews.articles[9].urlToImage
                          : news
                      }
                      alt="img"
                    />
                    <p>
                      {this.props.headlineNews.articles[9].description}
                      <FiChevronsRight
                      />
                    </p>
                  </div>
                </div>
              </div>
              <div className="row headline-news-news">
                {this.props.headlineNews.articles.map(
                  (article: IDataDescription, i: number, arr: any) => (
                    <div className="col-lg-6 col-md-6 col-sm-12" key={i}>
                      <h5>
                        <mark
                          style={{
                            backgroundColor: this.props.colors[
                              this.props.colors.length - i
                            ],
                          }}
                        >
                          <NavLink to={`/morenews/${article.source.id}`}>
                            {article.title}
                          </NavLink>
                        </mark>
                      </h5>
                      <img
                        className="img-fluid mb-1"
                        src={
                          article.urlToImage !== null
                            ? article.urlToImage
                            : news
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
    headlineNews: state.data_news.headlineNews,
    keyApi: state.data_news.keyApi,
    colors: state.data_news.colors,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    getNews: (url: string) => dispatch(getNews(url)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MoreNews);
