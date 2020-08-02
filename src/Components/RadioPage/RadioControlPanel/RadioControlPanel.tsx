import * as React from "react";
import { RootState } from "../../../Store/Store";
import {
  playRadioOn,
  playRadioPause,
  setRadioMuteOn,
  setRadioMuteOff,
  changeVolumeRadio,
} from "../../../Actions/Actions";
import {
  FaPlay,
  FaPause,
} from "react-icons/fa";
import { MdVolumeMute } from "react-icons/md";
import { connect } from "react-redux";
import "./RadioControlPanel.scss";

export interface IRadioControlPanelProps {
  playRadioPause: typeof playRadioPause;
  playRadioOn: typeof playRadioOn;
  setRadioMuteOn: typeof setRadioMuteOn;
  setRadioMuteOff: typeof setRadioMuteOff;
  changeVolumeRadio: typeof changeVolumeRadio;
  radioData: any | null;
  isRadioPause: boolean;
  isRadioMute: boolean;
}

export interface State {
  volume: number[];
}

class RadioControlPanel extends React.Component<
  IRadioControlPanelProps,
  State
> {
  radiovidjet: React.RefObject<HTMLAudioElement>;
  radioVolumePoints:  HTMLDivElement[];
  constructor(props: IRadioControlPanelProps) {
    super(props);
    this.radiovidjet = React.createRef();
    this.radioVolumePoints = [];
    this.state = {
      volume: [1, 2, 3, 4, 5],
    };
  }

  volumeUp = (e: any) => {
    e.target.classList.toggle("volume_up");
  };

  public setRef = (node: HTMLDivElement) => {
    this.radioVolumePoints.push(node);
  };


  render() {
    const { isRadioPause, radioData, isRadioMute } = this.props;
    const volume = this.state.volume;

    return (
      <div className="container">
        <div className="row radio_control_panel">
          <div className="col-6">
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
          <div className="col-6">
            <div className="row">
              <div className="col-4">
                {!isRadioMute ? (
                  <MdVolumeMute
                    onClick={(e) =>
                      this.props.setRadioMuteOn(this.radiovidjet.current!)
                    }
                  />
                ) : (
                  <MdVolumeMute
                    onClick={(e) =>
                      this.props.setRadioMuteOff(this.radiovidjet.current!)
                    }
                  />
                )}
                <span className={isRadioMute ? `activeMute` : undefined}>
                  +
                </span>
              </div>
              <div className="col-8">
                <div className="radio_control_panel_volume" ref={this.setRef}>
                    {volume.map((elem: number, i: number) => (
                      <div
                        key={i}
                        data-id={i}
                        data-volume={i === 0 ? 0.2 : 0.25 * i}
                        onMouseOver={(e) => this.volumeUp(e)}
                        onMouseOut={(e) => this.volumeUp(e)}
                        onClick={(e) =>
                          this.props.changeVolumeRadio(
                            e,
                            this.radiovidjet.current!,
                            this.radioVolumePoints
                          )
                        }
                      />
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {radioData !== null && (
          <audio ref={this.radiovidjet}>
            <source src={radioData.station.listen_url} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state: RootState) => {
  return {
    radioData: state.radio_vidjet.radioData,
    isRadioPause: state.radio_vidjet.isRadioPause,
    isRadioMute: state.radio_vidjet.isRadioMute,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    playRadioOn: (elem: any) => dispatch(playRadioOn(elem)),
    playRadioPause: (elem: any) => dispatch(playRadioPause(elem)),
    setRadioMuteOn: (elem: any) => dispatch(setRadioMuteOn(elem)),
    setRadioMuteOff: (elem: any) => dispatch(setRadioMuteOff(elem)),
    changeVolumeRadio: (e: any, elem: any,arr:any) =>
      dispatch(changeVolumeRadio(e, elem,arr)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RadioControlPanel);
