import * as React from "react";
import { getBusiness } from "../../Actions/Actions";
import { FiChevronsRight } from "react-icons/fi";
import { connect } from "react-redux";
import "./MoreBusiness.scss";
import Preloader from "../Preloader/Preloader";
import RightSidebar from "../RightSidebar/RightSidebar";
import business from "../Media/img/business.jpg";
import { IData, IDataDescription } from "../../Types/Types";
import { RootState } from "../../Store/Store";
import {  NavLink } from "react-router-dom";

export interface IMoreBusinessProps  {
  businessNews: IData | null;
  getBusiness: typeof getBusiness;
  colors: string[];
  keyApi: string;
}

export interface State {}

class MoreBusiness extends React.Component<IMoreBusinessProps, State> {
  // componentDidMount() {
  //   if (this.props.businessNews === null) {
  //     this.props.getBusiness(
  //       `https://gnews.io/api/v4/search?q=example&token=${this.props.keyApi}`
  //     );
  //   }
  // }

  render() {
    return this.props.businessNews === null ? (
      <Preloader />
    ) : (
      <React.Fragment>
        <div className="container-xl mt-5 business-news-article">
          <div className="row">
            <div className="col-lg-8 col-md-8 col-sm-12">
              <div className="row">
                <div className="col">
                  <div className="latest-business-article">
                    <h3>
                      <mark>
                        <NavLink to="/morebusiness/7">
                          {this.props.businessNews.articles[7].title}
                        </NavLink>
                      </mark>
                    </h3>
                    <img
                      className="img-fluid mb-1"
                      src={
                        this.props.businessNews.articles[7].urlToImage !== null
                          ? this.props.businessNews.articles[7].urlToImage
                          : business
                      }
                      alt="img"
                    />
                    <p>
                      {this.props.businessNews.articles[7].description}
                      <FiChevronsRight
                      />
                    </p>
                  </div>
                </div>
              </div>
              <div className="row business-news-news">
                {this.props.businessNews.articles.map(
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
                          <NavLink to={`/morebusiness/${article.source.id}`}>
                            {article.title}
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
    businessNews: state.data_news.businessNews,
    colors: state.data_news.colors,
    keyApi: state.data_news.keyApi,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    getBusiness: (url: string) => dispatch(getBusiness(url)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MoreBusiness);
