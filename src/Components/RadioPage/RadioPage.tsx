import * as React from "react";
import "./RadioPage.scss";
import { connect } from "react-redux";
import { RootState } from "../../Store/Store";
import { getRadioNews, toggleRadioPlay } from "../../Actions/Actions";

export interface IRadioPageProps {
  getRadioNews: typeof getRadioNews;
  toggleRadioPlay: typeof toggleRadioPlay;
  radioData: any | null;
  isRadioPause: boolean;
}

export interface State {}

class RadioPage extends React.Component<IRadioPageProps, State> {
    radiovidjet: React.RefObject<HTMLAudioElement>;
    constructor(props:IRadioPageProps) {
        super(props);
        this.radiovidjet = React.createRef();
}

  componentDidMount() {
    if (this.props.radioData == null) {
      this.props.getRadioNews();
    }
  }

  render() {
    const { isRadioPause, radioData } = this.props;

    console.log(radioData);

    return (
      <div className="container-xl">
        <div className="row">
          <div className="col-lg-6 offset-lg-3 col-md-6 offset-md-3 col-sm-12">
            <div className="radio_widjet_bg">
              <div className="album_img">
                <img
                  src={radioData !== null ? radioData.now_playing.song.art : undefined}
                  alt="img"
                />
              </div>
              <div className="radio_widjet_controls">
                <div>
                  <p>
                    <span>Album: </span>
                    <span>
                      {radioData !== null && radioData.now_playing.song.album}
                    </span>
                  </p>
                  <p>
                    <span>Artist: </span>
                    <span>
                      {radioData !== null && radioData.now_playing.song.artist}
                    </span>
                  </p>
                </div>
                <div>
                  {isRadioPause ? (
                    <svg
                      onClick={(e) =>
                        this.props.toggleRadioPlay(this.radiovidjet.current!)
                      }
                      height="50"
                      width="50"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polygon
                        points="0,0 0,50 50,25"
                        style={{ fill: "orange" }}
                      />
                      Sorry, your browser does not support inline SVG.
                    </svg>
                  ) : (
                    <svg
                      onClick={(e) =>
                        this.props.toggleRadioPlay(this.radiovidjet.current!)
                      }
                      width="50"
                      height="50"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="0"
                        y="0"
                        width="20"
                        height="50"
                        style={{ fill: "orange" }}
                      />
                      <rect
                        x="30"
                        y="0"
                        width="20"
                        height="50"
                        style={{ fill: "orange" }}
                      />
                      Sorry, your browser does not support inline SVG.
                    </svg>
                  )}
                </div>
              </div>
                        <audio ref={this.radiovidjet}>
                <source src="horse.ogg" type="audio/ogg" />
                <source src="horse.mp3" type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: RootState) => {
  return {
    radioData: state.radio_vidjet.radioData,
    isRadioPause: state.radio_vidjet.isRadioPause,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    getRadioNews: () => dispatch(getRadioNews()),
    toggleRadioPlay: (elem: any) => dispatch(toggleRadioPlay(elem)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RadioPage);
