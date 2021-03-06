import * as React from "react";
import { connect } from "react-redux";
import "./TitlePageSlider.scss";
import {
  getData,
  clickToLeftArrow,
  clickToRightArrow,
} from "../../../Actions/Actions";
import Preloader from "../../Preloader/Preloader";
import { IData, IDataDescription } from "../../../Types/Types";
import { withRouter, NavLink } from "react-router-dom";
import { RootState } from "../../../Store/Store";

export interface ITitlePageSliderProps {
  titlepageNews: IData | null;
  getData: typeof getData;
  clickToLeftArrow: typeof clickToLeftArrow;
  clickToRightArrow: typeof clickToRightArrow;
  currentId: number;
  keyApi: string;
}

export interface State {}

class TitlePageSlider extends React.Component<ITitlePageSliderProps, State> {
  componentDidMount() {
    if (this.props.titlepageNews === null) {
      this.props.getData(
        `https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/top-headlines?country=us&apiKey=${this.props.keyApi}`
      );
    }
  }

  render() {
    const { currentId } = this.props;
    return this.props.titlepageNews === null ? (
      <Preloader />
    ) : (
      <div className="row ">
        <div className="col">
          <div className="slider">
            <button
              className="btn arrow-left"
              onClick={() =>
                this.props.clickToLeftArrow(
                  currentId,
                  this.props.titlepageNews!.articles.length - 1
                )
              }
            >
              <span>&#10094;</span>
            </button>
            <button
              className="btn arrow-right"
              onClick={() =>
                this.props.clickToRightArrow(
                  currentId,
                  this.props.titlepageNews!.articles.length - 1
                )
              }
            >
              <span>&#10095;</span>
            </button>
            <div className="window-images-slider">
              <img
                src={
                  this.props.titlepageNews.articles[currentId].urlToImage !==null
                    ? this.props.titlepageNews.articles[currentId].urlToImage
                    : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/BBC_World_News_red.svg/107px-BBC_World_News_red.svg.png"
                }
                alt="news"
              />
              <h1
              >
                  <mark>
                    <NavLink to={`/titlenews/${currentId}`}>
                      {this.props.titlepageNews.articles[currentId].title}
                      </NavLink>
                </mark>
              </h1>
            </div>
            <div className="navigation-panel">
              <p>
                {this.props.titlepageNews!.articles.map(
                  (n: IDataDescription, i: number) => (
                    <span
                      key={i}
                      className={currentId === i ? `currentImg` : undefined}
                    >
                      {currentId === i}
                    </span>
                  )
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: RootState) => {
  return {
    titlepageNews: state.data_news.titlepageNews,
    keyApi: state.data_news.keyApi,
    currentId: state.data_news.currentId,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    getData: (url: string) => dispatch(getData(url)),
    clickToLeftArrow: (currentId: number, length: number) =>
      dispatch(clickToLeftArrow(currentId, length)),
    clickToRightArrow: (currentId: number, length: number) =>
      dispatch(clickToRightArrow(currentId, length)),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(TitlePageSlider)
);
