import {
  MainActions,
  GetRaioNewsTypes,
  RadioPlayTypes,
  RadioPauseTypes,
  RadioMuteTypes,
  RadioMuteOffTypes,
} from "../Types/Types";

interface IRadioState {
  radioData: any | null;
  isRadioPause: boolean;
  isRadioMute: boolean;
}

const initialState: IRadioState = {
  radioData: null,
  isRadioPause: true,
  isRadioMute: false,
};

export const radioReducer = (
  state: IRadioState = initialState,
  action: MainActions
): IRadioState => {
  switch (action.type) {
    case GetRaioNewsTypes.GETRADIONEWS: {
      return {
        ...state,
        radioData: action.data,
      };
    }

    case RadioPlayTypes.RADIOPLAY: {
      return {
        ...state,
        isRadioPause: action.value,
      };
    }

    case RadioPauseTypes.RADIOPAUSE: {
      return {
        ...state,
        isRadioPause: action.value,
      };
    }

    case RadioMuteTypes.RADIOMUTE: {
      return {
        ...state,
        isRadioMute: action.value,
      };
    }
      
    case RadioMuteOffTypes.RADIOMUTEOFF: {
      return {
        ...state,
        isRadioMute: action.value,
      };
    }

    default:
      return state;
  }
};
