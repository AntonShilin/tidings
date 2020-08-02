import * as React from "react";
import { connect } from "react-redux";
import { RootState } from "../../../Store/Store";
import "./RadioDescription.scss";

export interface IRadioDescriptionProps {
  radioData: any | null;
}

export interface State {}

class RadioDescription extends React.Component<IRadioDescriptionProps, State> {
  render() {
    const { radioData } = this.props;
    return (
      <div className="album_decription">
        <p>
          <span>Album:</span>
          {radioData !== null ? radioData.now_playing.song.album : "unknown"}
        </p>
        <p>
          <span>Now playing:</span>
          {radioData !== null ? radioData.now_playing.song.title : "unknown"}
        </p>
        <p>
          <span>Artist:</span>{" "}
          {radioData !== null ? radioData.now_playing.song.artist : "unknown"}
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state: RootState) => {
  return {
    radioData: state.radio_vidjet.radioData,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(RadioDescription);
