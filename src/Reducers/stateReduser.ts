import {} from "module";
import {
  IMainState,
  MainActions,
  GetDataTypes,
  isLoadingTypes,
  GetEntertainmentTypes,
  GetTrendingTypes,
  GetTechTypes,
} from "../Types/Types";
import { Reducer } from "react";

const initialState: IMainState = {
  data: null,
    entertainment: null,
    trendingNews: null,
    techNews:null
};

export const stateReducer: Reducer<IMainState, MainActions> = (
  state = initialState,
  action
): IMainState => {
  switch (action.type) {
    case GetDataTypes.GETDATA: {
      return {
        ...state,
        data: action.data,
      };
    }

    case GetEntertainmentTypes.GETENTERTAINMENT: {
      return {
          ...state,
          entertainment: action.data
      };
    }

    case isLoadingTypes.LOADING: {
      return {
        ...state,
      };
      }
          
    case GetTrendingTypes.GETTRENDING: {
      return {
          ...state,
          trendingNews: action.data
      };
      }
          
    case GetTechTypes.GETTECH: {
      return {
          ...state,
          techNews: action.data
      };
    }

    default:
      return state;
  }
};
