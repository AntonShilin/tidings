import * as React from "react";
import { getBusiness } from "../../Actions/Actions";
import { FiChevronsRight } from "react-icons/fi";
import { connect } from "react-redux";
import "./MoreBusiness.scss";
import Preloader from "../Preloader/Preloader";
import RightSidebar from "../RightSidebar/RightSidebar";

export interface MoreBusinessProps {
  businessNews: any | null;
  getBusiness: typeof getBusiness;
  colors: string[];
}

export interface State {}

class MoreBusiness extends React.Component<MoreBusinessProps, State> {
  keyAPI: string = "74498e6f023d4358a296a9351a1ea043";

  componentDidMount() {
    if (this.props.businessNews === null) {
      this.props.getBusiness(
        `http://newsapi.org/v2/top-headlines?country=gb&category=business&apiKey=${this.keyAPI}`
      );
    }
  }
  render() {
    console.log(this.props.businessNews)
    return this.props.businessNews === null ? (
      <Preloader />
    ) : (
      <React.Fragment>
        <div className="container mt-5 business-news-article">
          <div className="row">
            <div className="col-lg-8">
              <div className="row">
                <div className="col">
                  <div className="latest-business-article">
                    <h3>
                      <mark>{this.props.businessNews.articles[7].title}</mark>
                    </h3>
                    <img
                      className="img-fluid mb-1"
                      src={this.props.businessNews.articles[7].urlToImage}
                      alt=""
                    />
                    <p>
                      {this.props.businessNews.articles[7].description}
                      <FiChevronsRight
                        style={{ color: "orange", strokeWidth: 4 }}
                      />
                    </p>
                  </div>
                </div>
              </div>
              <div className="row business-news-news">
                {this.props.businessNews.articles.map(
                  (article: any, i: number, arr: any) =>
                    i > 7 ? (
                      <div className="col-6" key={i}>
                        <h5>
                          <mark
                            style={{
                              backgroundColor: this.props.colors[
                                this.props.colors.length - i
                              ],
                            }}
                          >
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
                          <FiChevronsRight
                            style={{
                              color: this.props.colors[this.props.colors.length - i],
                              strokeWidth: 4,
                            }}
                          />
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
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
   businessNews: state.data_news.businessNews,
   colors: state.data_news.colors
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    getBusiness: (url: string) => dispatch(getBusiness(url)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MoreBusiness);
