import * as React from "react";
import "./TitlePage.scss";
import { getData, getEntertainment } from "../../Actions/Actions";
import { connect } from "react-redux";
import { FiChevronsRight } from "react-icons/fi";
import RightSidebar from "../RightSidebar/RightSidebar";
import PreviewTrending from "../PreviewTrending/PreviewTrending";
import PreviewTech from "../PreviewTech/PreviewTech";
import PreviewBusiness from "../PreviewBusiness/PreviewBusiness";
import PreviewSport from "../PreviewSport/PreviewSport";
import Preloader from "../Preloader/Preloader";
import question from "../Media/img/question.jpg";

export interface TitlePageProps {
  latestNews: any | null;
  getData: typeof getData;
  colors: string[];
}

export interface State {}

class TitlePage extends React.Component<TitlePageProps, State> {
  keyAPI: string = "74498e6f023d4358a296a9351a1ea043";
  
  constructor(props: TitlePageProps) {
    super(props);
  }

  componentDidMount() {
    if (this.props.latestNews === null) {
      this.props.getData(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=${this.keyAPI}`
      );
    }
  }

  render() {
    return this.props.latestNews === null ? (
      <Preloader/>
    ) : (
      <React.Fragment>
        <div className="container title-page">
          <div className="row">
            <div className="col-lg-8 col-md-8 col-sm-12">
              <div className="row">
                <div className="col">
                  <div className="latest_articles">
                    <h3>
                      <mark>{this.props.latestNews.articles[0].title}</mark>
                    </h3>
                    <img
                      className="img-fluid mb-1"
                      src={this.props.latestNews.articles[0].urlToImage !==null ?this.props.latestNews.articles[0].urlToImage :question}
                      alt=""
                    />
                    <p>
                      {this.props.latestNews.articles[0].description}
                      <FiChevronsRight
                        style={{ color: "orange", strokeWidth: 4 }}
                      />
                    </p>
                  </div>
                </div>
              </div>
              <div className="row main-news">
                {this.props.latestNews.articles.map(
                  (article: any, i: number, arr: any) =>
                   (i>0 && i < 11) ? (
                      <div className="col-lg-6 col-md-6 col-sm-12" key={i}>
                        <h5>
                          <mark style={{ backgroundColor: this.props.colors[i] }}>
                            {article.title}
                          </mark>
                        </h5>
                        <img
                          className="img-fluid mb-1"
                          src={article.urlToImage !==null ?article.urlToImage :question}
                          alt=""
                        />
                        <p>
                          {article.description}
                          <FiChevronsRight
                            style={{ color: this.props.colors[i], strokeWidth: 4 }}
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

const mapStateToProps = (state: any) => {
  return {
    latestNews: state.data_news.data,
    colors: state.data_news.colors
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    getData: (url: string) => dispatch(getData(url)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TitlePage);
