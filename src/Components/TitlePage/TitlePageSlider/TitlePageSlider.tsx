import * as React from "react";
import { connect } from "react-redux";
import "./TitlePageSlider.scss";
import { IAplicationState } from "../../../Store/Store";
import {
  getData,
  clickToLeftArrow,
  clickToRightArrow,
} from "../../../Actions/Actions";
import Preloader from "../../Preloader/Preloader";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

export interface TitlePageSliderProps {
  titlepageNews: any | null;
  getData: typeof getData;
  clickToLeftArrow: typeof clickToLeftArrow;
  clickToRightArrow: typeof clickToRightArrow;
  images: string[];
  keyApi: string;
}

export interface State {}

class TitlePageSlider extends React.Component<TitlePageSliderProps, State> {
  slider: React.RefObject<HTMLDivElement> | undefined;

  constructor(props: TitlePageSliderProps) {
    super(props);
    this.slider = React.createRef();
  }

  componentDidMount() {
    if (this.props.titlepageNews === null) {
      this.props.getData(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=${this.props.keyApi}`
      );
    }
  }

  render() {
    return this.props.images === null ? (
      <Preloader />
    ) : (
      <div className="row ">
        <div className="col">
          <div className="slider">
            <button
              className="arrow-left"
              onClick={() =>
                this.props.clickToLeftArrow(
                  this.slider?.current!,
                  this.props.images
                )
              }
            >
              <MdKeyboardArrowLeft
                style={{
                  fontSize: "1.5rem",
                  color: "white",
                  strokeWidth: "3",
                }}
              />
            </button>
            <button
              className="arrow-right"
              onClick={() =>
                this.props.clickToRightArrow(
                  this.slider?.current!,
                  this.props.images
                )
              }
            >
              <MdKeyboardArrowRight
                style={{
                  fontSize: "1.5rem",
                  color: "white",
                  strokeWidth: "3",
                }}
              />
            </button>
            <div className="navigation-panel">
              {this.props.images.map((n: any, i: number) => (
                <div key={i}>{` `}</div>
              ))}
            </div>
            <div className="window-images-slider" ref={this.slider}>
              {this.props.images.map((url: any, i: number) =>
                i < 2 ? (
                  <div key={i}>
                    <img src={url} />
                  </div>
                ) : null
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: IAplicationState) => {
  return {
    titlepageNews: state.data_news.titlepageNews,
    keyApi: state.data_news.keyApi,
    images: state.data_news.images,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    getData: (url: string) => dispatch(getData(url)),
    clickToLeftArrow: (elem: any, arr: any) =>
      dispatch(clickToLeftArrow(elem, arr)),
    clickToRightArrow: (elem: any, arr: any) =>
      dispatch(clickToRightArrow(elem, arr)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TitlePageSlider);
