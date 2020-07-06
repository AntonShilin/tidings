import {
  MainActions,
  GetRaioNewsTypes,
  RadioPlayTypes,
  RadioPauseTypes,
} from "../Types/Types";

interface IRadioState {
  radioData: any | null;
  isRadioPause: boolean;
  currentTime: number;
}

const initialState: IRadioState = {
  radioData: null,
  isRadioPause: true,
  currentTime: 0,
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
        currentTime: action.timeGoOn
      };
    }

    case RadioPauseTypes.RADIOPAUSE: {
      return {
        ...state,
        isRadioPause: action.value,
      };
    }

    default:
      return state;
  }
};
