import * as React from "react";
import "./RadioPage.scss";
import { connect } from "react-redux";
import { RootState } from "../../Store/Store";
import {
  getRadioNews,
  playRadioOn,
  playRadioPause,
} from "../../Actions/Actions";

export interface IRadioPageProps {
  getRadioNews: typeof getRadioNews;
  playRadioOn: typeof playRadioOn;
  playRadioPause: typeof playRadioPause;
  radioData: any | null;
  isRadioPause: boolean;
  currentTime: number;
}

export interface State {}

class RadioPage extends React.Component<IRadioPageProps, State> {
  radiovidjet: React.RefObject<HTMLAudioElement>;
  constructor(props: IRadioPageProps) {
    super(props);
    this.radiovidjet = React.createRef();
  }

  componentDidMount() {
    if (this.props.radioData == null) {
      this.props.getRadioNews();
    }
  }

  render() {
    const { isRadioPause, radioData, currentTime } = this.props;
    return (
      <div className="container-xl">
        <div className="row">
          <div className="col-lg-6 offset-lg-3 col-md-6 offset-md-3 col-sm-12">
            <div className="radio_widjet_bg">
              <div className="album_img">
                <img
                  src={
                    radioData !== null
                      ? radioData.now_playing.song.art
                      : undefined
                  }
                  alt="img"
                />
                <div className="album_decription">
                  <div>
                    <p>
                      <mark>Album: </mark>
                    </p>
                    <p>
                      <mark>
                        {radioData !== null
                          ? radioData.now_playing.song.album
                          : "unknown"}
                      </mark>
                    </p>
                  </div>
                  <div>
                    <p>
                      <mark>Now playing:</mark>
                    </p>
                    <p>
                      <mark>
                        {radioData !== null
                          ? radioData.now_playing.song.artist
                          : "unknown"}
                      </mark>
                    </p>
                  </div>
                </div>
              </div>
              <div className="radio_widjet_controls">
                <div>
                  {/* <div className="duration">
                    <div
                      className="duration_bar"
                      style={{
                        width: `${currentTime}%`,
                      }}
                    />
                  </div> */}
                </div>
                <div>
                  {isRadioPause ? (
                    <svg
                      onClick={(e) =>
                        this.props.playRadioOn(this.radiovidjet.current!)
                      }
                      height="50"
                      width="50"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polygon
                        points="0,0 0,50 50,25"
                        style={{ fill: "#1a9dde" }}
                      />
                      Sorry, your browser does not support inline SVG.
                    </svg>
                  ) : (
                    <svg
                      onClick={(e) =>
                        this.props.playRadioPause(this.radiovidjet.current!)
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
              {radioData !== null && (
                <audio ref={this.radiovidjet}>
                  <source
                    src={radioData.station.listen_url}
                    type="audio/mpeg"
                  />
                  Your browser does not support the audio element.
                </audio>
              )}
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
    currentTime: state.radio_vidjet.currentTime,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    getRadioNews: () => dispatch(getRadioNews()),
    playRadioOn: (elem: any) => dispatch(playRadioOn(elem)),
    playRadioPause: (elem: any) => dispatch(playRadioPause(elem)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RadioPage);
