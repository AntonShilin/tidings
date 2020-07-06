import * as React from "react";
import "./RadioPage.scss";
import { connect } from "react-redux";
import { RootState } from "../../Store/Store";
import {
  getRadioNews,
  playRadioOn,
  playRadioPause,
} from "../../Actions/Actions";
import { FaPlay, FaPause, FaVolumeUp, FaVolumeDown } from "react-icons/fa";
import Preloader from "../Preloader/Preloader";

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
      <>
        {radioData === null ? (
          <Preloader />
        ) : (
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
                          <span>Album:</span>
                          {radioData !== null
                            ? radioData.now_playing.song.album
                            : "unknown"}
                        </p>
                      </div>
                      <div>
                        <p>
                          <span>Now playing:</span>
                          {radioData !== null ? (
                            <>
                              {radioData.now_playing.song.title}
                              <b> by </b>
                              {radioData.now_playing.song.artist}
                            </>
                          ) : (
                            "unknown"
                          )}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="radio_widjet_controls">
                    <div className="">
                      {isRadioPause ? (
                        <FaPlay
                          className="play_btn"
                          onClick={(e) =>
                            this.props.playRadioOn(this.radiovidjet.current!)
                          }
                        />
                      ) : (
                        <FaPause
                          className="pause_btn"
                          onClick={(e) =>
                            this.props.playRadioPause(this.radiovidjet.current!)
                          }
                        />
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
        )}
      </>
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
