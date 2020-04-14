import * as React from "react";
import { getBusiness } from "../../Actions/Actions";
import { FiChevronsRight } from "react-icons/fi";
import { connect } from "react-redux";
import "./PreviewBusiness.scss";
import question from "../Media/img/question.jpg";

export interface PreviewBusinessProps {
  businessNews: any | null;
  getBusiness: typeof getBusiness;
}

export interface State {}

class PreviewBusiness extends React.Component<PreviewBusinessProps, State> {
  keyAPI: string = "74498e6f023d4358a296a9351a1ea043";

  componentDidMount() {
    if (this.props.businessNews === null) {
      this.props.getBusiness(
        `https://newsapi.org/v2/top-headlines?country=de&category=business&apiKey=${this.keyAPI}`
      );
    }
  }
  render() {
    return this.props.businessNews === null ? (
      null
    ) : (
      <div className="container">
        <div className="row mt-3 business-header">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <h3>
              <mark>
                Business
                <FiChevronsRight style={{ color: "white", strokeWidth: 4 }} />
              </mark>
            </h3>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <p className="text-right">
              More business stories
              <FiChevronsRight style={{ color: "#070707", strokeWidth: 4 }} />
            </p>
          </div>
        </div>
        <div className="row business-article">
          {this.props.businessNews.articles.map(
            (article: any, i: number, arr: any) =>
              i < 6 ? (
                <div className="col-lg-4 col-md-6 col-sm-6" key={i}>
                  <h5>
                    <mark>
                      {article.title}
                      <FiChevronsRight
                        style={{ color: "white", strokeWidth: 4 }}
                      />
                    </mark>
                  </h5>
                  <img
                    className="img-fluid mb-1"
                    src={article.urlToImage !==null ?article.urlToImage :question}
                    alt=""
                  />
                </div>
              ) : null
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    businessNews: state.data_news.businessNews,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    getBusiness: (url: string) => dispatch(getBusiness(url)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PreviewBusiness);
