import * as React from "react";
import "./TitlePage.scss";
import { getData, showFullArticleInfo } from "../../Actions/Actions";
import { connect } from "react-redux";
import { FiChevronsRight } from "react-icons/fi";
import RightSidebar from "../RightSidebar/RightSidebar";
import PreviewTrending from "../PreviewTrending/PreviewTrending";
import PreviewTech from "../PreviewTech/PreviewTech";
import PreviewBusiness from "../PreviewBusiness/PreviewBusiness";
import PreviewSport from "../PreviewSport/PreviewSport";
import Preloader from "../Preloader/Preloader";
import defaultImage from "../Media/img/question.jpg";
import { RouteComponentProps } from "react-router-dom";
import { IAplicationState } from "../../Store/Store";

export interface TitlePageProps {
  titlepageNews: any | null;
  colors: string[];
  getData: typeof getData;
  showFullArticleInfo: typeof showFullArticleInfo;
  url: RouteComponentProps;
}

export interface State {}

class TitlePage extends React.Component<TitlePageProps, State> {
  keyAPI: string = "f22dba07b79e44d89a3acfbfb6d70463";

  constructor(props: TitlePageProps) {
    super(props);
  }

  componentDidMount() {
    if (this.props.titlepageNews === null) {
      this.props.getData(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=${this.keyAPI}`
      );
    }
  }

  render() {
    return this.props.titlepageNews === null ? (
      <Preloader />
    ) : (
      <React.Fragment>
        <div className="container title-page">
          <div className="row">
            <div className="col-lg-8 col-md-8 col-sm-12">
              <div className="row">
                <div className="col">
                  <div
                    className="latest_articles"
                    onClick={() =>
                      this.props.showFullArticleInfo(
                        this.props.titlepageNews.articles[0].source.id,
                        this.props.url
                      )
                    }
                  >
                    <h3>
                      <mark>{this.props.titlepageNews.articles[0].title}</mark>
                    </h3>
                    <img
                      className="img-fluid mb-1"
                      src={
                        this.props.titlepageNews.articles[0].urlToImage !== null
                          ? this.props.titlepageNews.articles[0].urlToImage
                          : defaultImage
                      }
                      alt=""
                    />
                    <p>
                      {this.props.titlepageNews.articles[0].description}
                      <FiChevronsRight
                        style={{ color: "orange", strokeWidth: 4 }}
                      />
                    </p>
                  </div>
                </div>
              </div>
              <div className="row main-news">
                {this.props.titlepageNews.articles.map(
                  (article: any, i: number, arr: any) =>
                    i > 0 && i < 11 ? (
                      <div
                        onClick={() =>
                          this.props.showFullArticleInfo(
                            article.source.id,
                            this.props.url
                          )
                        }
                        className="col-lg-6 col-md-6 col-sm-12"
                        key={i}
                      >
                        <h5>
                          <mark
                            style={{ backgroundColor: this.props.colors[i] }}
                          >
                            {article.title}
                          </mark>
                        </h5>
                        <img
                          className="img-fluid mb-1"
                          src={
                            article.urlToImage !== null
                              ? article.urlToImage
                              : defaultImage
                          }
                          alt=""
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
                    ) : null
                )}
              </div>
            </div>
            <div className="col-lg-4 col-md-4 d-lg-block d-md-block d-none">
              <RightSidebar />
            </div>
          </div>
        </div>
        <PreviewTrending />
        <PreviewTech />
        <PreviewBusiness />
        <PreviewSport />
      </React.Fragment>
    );
  }
}



const mapStateToProps = (state: IAplicationState, url: RouteComponentProps) => {
  return {
    titlepageNews: state.data_news.titlepageNews,
    colors: state.data_news.colors,
    url,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    getData: (url: string) => dispatch(getData(url)),
    showFullArticleInfo: (id: number, url: RouteComponentProps) =>
      dispatch(showFullArticleInfo(id, url)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TitlePage);
