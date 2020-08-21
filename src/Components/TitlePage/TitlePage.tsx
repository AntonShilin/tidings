import * as React from "react";
import "./TitlePage.scss";
import { getData } from "../../Actions/Actions";
import { connect } from "react-redux";
import { FiChevronsRight } from "react-icons/fi";
import RightSidebar from "../RightSidebar/RightSidebar";
import PreviewTrending from "../PreviewTrending/PreviewTrending";
import PreviewTech from "../PreviewTech/PreviewTech";
import PreviewBusiness from "../PreviewBusiness/PreviewBusiness";
import PreviewSport from "../PreviewSport/PreviewSport";
import Preloader from "../Preloader/Preloader";
import defaultImage from "../Media/img/news.jpg";
import { RouteComponentProps, NavLink } from "react-router-dom";
import TitlePageSlider from "./TitlePageSlider/TitlePageSlider";
import { RootState } from "../../Store/Store";
import { IData, IDataDescription } from "../../Types/Types";

export interface ITitlePageProps {
  titlepageNews: IData | null;
  colors: string[];
  getData: typeof getData;
  keyApi: string;
}

export interface State {}

class TitlePage extends React.Component<ITitlePageProps, State> {
  constructor(props: ITitlePageProps) {
    super(props);
  }

  componentDidMount() {
    if (this.props.titlepageNews === null) {
      this.props.getData(
        `https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/top-headlines?country=us&apiKey=${this.props.keyApi}`
      );
    }
  }

  render() {
    return this.props.titlepageNews === null ? (
      <Preloader />
    ) : (
      <React.Fragment>
        <div className="container-xl title-page">
          <TitlePageSlider />
          <div className="row mt-5">
            <div className="col-lg-9 col-md-9 col-sm-12">
              <div className="row">
                <div className="col">
                  <div className="latest_articles">
                    <h3>
                      <mark>
                        <NavLink to="/titlenews/7">
                          {this.props.titlepageNews.articles[7].title}
                        </NavLink>
                      </mark>
                    </h3>
                    <img
                      className="img-fluid mb-1"
                      src={
                        this.props.titlepageNews.articles[7].urlToImage !== null
                          ? this.props.titlepageNews.articles[7].urlToImage
                          : defaultImage
                      }
                      alt="img"
                    />
                    <p>
                      {this.props.titlepageNews.articles[7].description}
                      <FiChevronsRight
                      />
                    </p>
                  </div>
                </div>
              </div>
              <div className="row main-news">
                {this.props.titlepageNews.articles.map(
                  (article: IDataDescription, i: number) => (
                    <div className="col-lg-6 col-md-6 col-sm-12" key={i}>
                      <h5>
                        <mark style={{ backgroundColor: this.props.colors[i] }}>
                          <NavLink to={`/titlenews/${article.source.id}`}>
                            {article.title}
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
            <div className="col-lg-3 col-md-3 d-lg-block d-md-block d-none right-sidebar">
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

const mapStateToProps = (state: RootState) => {
  return {
    titlepageNews: state.data_news.titlepageNews,
    keyApi: state.data_news.keyApi,
    colors: state.data_news.colors,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    getData: (url: string) => dispatch(getData(url)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TitlePage);
