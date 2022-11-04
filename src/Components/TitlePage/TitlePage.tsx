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
import { NavLink } from "react-router-dom";
import TitlePageSlider from "./TitlePageSlider/TitlePageSlider";
import { RootState } from "../../Store/Store";
import { ITitle, ITitleMore } from "../../Types/Types";

export interface ITitlePageProps {
  titlepageNews: ITitle | null;
  colors: string[];
  getData: typeof getData;
}

export interface State {}

class TitlePage extends React.Component<ITitlePageProps, State> {
  componentDidMount() {
    if (this.props.titlepageNews === null) {
      this.props.getData();
    }
  }

  render() {
    const { colors , titlepageNews} = this.props;

    if (this.props.titlepageNews === null) {
      return <Preloader />;
    }

    return (
      this.props.titlepageNews !== null && (
        <>
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
                            {titlepageNews!.articles[titlepageNews!.articles.length-1].title}
                          </NavLink>
                        </mark>
                      </h3>
                      <img
                        className="img-fluid mb-1"
                        src={
                        titlepageNews!.articles[titlepageNews!.articles.length-1].image !== null
                            ? titlepageNews!.articles[7].image
                            : defaultImage
                        }
                        alt="img"
                      />
                      <p>
                        {titlepageNews!.articles[titlepageNews!.articles.length-1].description}
                        <FiChevronsRight />
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row main-news">
                  {this.props.titlepageNews.articles.map(
                    (article: ITitleMore, i: number) => (
                      <div className="col-lg-6 col-md-6 col-sm-12" key={i}>
                        <h5>
                          <mark style={{ backgroundColor: colors[i] }}>
                            <NavLink to={`/titlenews/${i}`}>
                              {article.title}
                            </NavLink>
                          </mark>
                        </h5>
                        <img
                          className="img-fluid mb-1"
                          src={
                            article.image !== null
                              ? article.image
                              : defaultImage
                          }
                          alt="img"
                        />
                        <p>
                          {article.description}
                          <FiChevronsRight
                            style={{
                              color: colors[i],
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
        </>
      )
    );
  }
}

const mapStateToProps = (state: RootState) => {
  return {
    titlepageNews: state.data_news.titlepageNews,
    colors: state.data_news.colors,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    getData: () => dispatch(getData()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TitlePage);
