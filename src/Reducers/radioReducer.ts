import {
  MainActions,
  GetRaioNewsTypes,
  toggleRadioPlayTypes,
} from "../Types/Types";

interface IRadioState {
  radioData: any | null;
  isRadioPause: boolean;
}

const initialState: IRadioState = {
  radioData: null,
  isRadioPause: true,
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

    case toggleRadioPlayTypes.TOGGLERADIOPLAY: {
      return {
          ...state,
          isRadioPause: !state.isRadioPause
      };
    }

    default:
      return state;
  }
};
