import * as React from "react";
import { getBusiness } from "../../Actions/Actions";
import { FiChevronsRight } from "react-icons/fi";
import { connect } from "react-redux";
import "./PreviewBusiness.scss";
import business from "../Media/img/business.jpg";
import { IData } from "../../Types/Types";
import { RootState } from "../../Store/Store";
import { NavLink } from "react-router-dom";

export interface IPreviewBusinessProps {
  businessNews: IData | null;
  getBusiness: typeof getBusiness;
  keyApi: string;
}

export interface State {}

class PreviewBusiness extends React.Component<IPreviewBusinessProps, State> {
  componentDidMount() {
    if (this.props.businessNews === null) {
      this.props.getBusiness(
        `https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/top-headlines?country=gb&category=business&apiKey=${this.props.keyApi}`
      );
    }
  }
  render() {
    return this.props.businessNews === null ? null : (
      <div className="container-xl">
        <div className="row mt-3 business-header">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <h3>
              <mark>
                Business
                <FiChevronsRight/>
              </mark>
            </h3>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <p className="text-right">
              <NavLink to="/morebusiness">
                More business stories
                <FiChevronsRight />
              </NavLink>
            </p>
          </div>
        </div>
        <div className="row business-article">
          {this.props.businessNews.articles.map(
            (article: any, i: number, arr: any) =>
              i < 6 && (
                <div className="col-lg-4 col-md-6 col-sm-6" key={i}>
                  <h5>
                    <mark>
                      <NavLink to={`/morebusiness/${article.source.id}`}>
                        {article.title}
                        <FiChevronsRight
                        />
                      </NavLink>
                    </mark>
                  </h5>
                  <img
                    className="img-fluid mb-1"
                    src={
                      article.urlToImage !== null
                        ? article.urlToImage
                        : business
                    }
                    alt=""
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
    businessNews: state.data_news.businessNews,
    keyApi: state.data_news.keyApi,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    getBusiness: (url: string) => dispatch(getBusiness(url)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PreviewBusiness);
