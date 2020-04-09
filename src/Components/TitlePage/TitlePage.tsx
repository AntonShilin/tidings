import * as React from "react";
import "./TitlePage.scss";
import { getData, getEntertainment } from "../../Actions/Actions";
import { connect } from "react-redux";
import { FiChevronsRight } from "react-icons/fi";
import RightSidebar from "../RightSidebar/RightSidebar";

export interface TitlePageProps {
  latestNews: any | null;
  getData: typeof getData;
}

export interface State {}

class TitlePage extends React.Component<TitlePageProps, State> {
  keyAPI: string = "74498e6f023d4358a296a9351a1ea043";
  colors: string[] = [
    "blue",
    "indigo",
    "purple",
    "pink",
    "red",
    "orange",
    "yellow",
    "green",
    "teal",
    "cyan",
    "white",
    "gray",
    "gray-dark",
    "primary",
    "secondary",
    "success",
    "info",
    "warning",
    "danger",
  ];
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
      "Loading..."
    ) : (
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-8">
            <div className="row">
              <div className="col">
                <div className="latest_articles">
                  <h3>
                    <mark>{this.props.latestNews.articles[0].title}</mark>
                  </h3>
                  <img
                    className="img-fluid mb-1"
                    src={this.props.latestNews.articles[0].urlToImage}
                    alt=""
                  />
                  <p>
                    {this.props.latestNews.articles[0].description}
                    <FiChevronsRight  style={{color: 'orange', strokeWidth: 4 }}/>
                  </p>
                </div>
              </div>
            </div>
            <div className="row main-news">
              {this.props.latestNews.articles.map(
                (article: any, i: number, arr: any) =>
                  i < 10 ? (
                    <div className="col-6" key={i}>
                      <h5>
                        <mark style={{ backgroundColor: this.colors[i] }}>
                          {article.title}
                        </mark>
                      </h5>
                      <img
                        className="img-fluid mb-1"
                        src={article.urlToImage}
                        alt=""
                      />
                      <p>
                        {article.description}
                        <FiChevronsRight style={{ color: this.colors[i], strokeWidth: 4 }}/>
                      </p>
                    </div>
                  ) : null
              )}
            </div>
          </div>
          <div className="col-lg-4 d-lg-block d-md-none">
            <RightSidebar />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    latestNews: state.data_news.data,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    getData: (url: string) => dispatch(getData(url)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TitlePage);
