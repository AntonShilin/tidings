import * as React from "react";
import "./RadioPage.scss";
import { connect } from "react-redux";
import { RootState } from "../../Store/Store";
import { getRadioNews } from "../../Actions/Actions";
import RadioControlPanel from "./RadioControlPanel/RadioControlPanel";
import Preloader from "../Preloader/Preloader";
import RadioDescription from "./RadioDescription/RadioDescription";

export interface IRadioPageProps {
  getRadioNews: typeof getRadioNews;
  radioData: any | null;
}

export interface State {}

class RadioPage extends React.Component<IRadioPageProps, State> {
  componentDidMount() {
    if (this.props.radioData == null) {
      this.props.getRadioNews();
    }
  }

  render() {
    const { radioData } = this.props;

    return (
      <>
        {radioData === null ? (
          <Preloader />
        ) : (
          <div className="container">
            <div className="row">
              <div className="col-lg-6 offset-lg-3 col-md-6 offset-md-3 col-sm-12">
                <div className="radio_widjet_bg">
                  <div className="album_img">
                    <img
                      src={
                        radioData !== null
                          ? radioData.now_playing.song.art
                          : "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/TruckersFM_Logo.png/220px-TruckersFM_Logo.png"
                      }
                      alt="img"
                    />
                  </div>
                  <RadioDescription />
                  <RadioControlPanel />
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
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    getRadioNews: () => dispatch(getRadioNews()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RadioPage);
