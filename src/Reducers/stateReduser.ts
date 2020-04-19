import {} from "module";
import {
  IMainState,
  MainActions,
  GetDataTypes,
  isLoadingTypes,
  GetEntertainmentTypes,
  GetTrendingTypes,
  GetTechTypes,
  GetBusinessTypes,
  GetSportTypes,
  GetHeadlineNewsTypes,
  GetHealthTypes,
  GetScienceTypes,
  GetShowFullArticleTypes,
  GetWindowPositionTypes,
} from "../Types/Types";
import { Reducer } from "react";

const initialState: IMainState = {
  titlepageNews: null,
  entertainmentNews: null,
  trendingNews: null,
  techNews: null,
  businessNews: null,
  sportNews: null,
  headlineNews: null,
  healthNews: null,
  scienceNews: null,
  colors: [
    "blue",
    "indigo",
    "purple",
    "red",
    "orange",
    "yellow",
    "green",
    "teal",
    "cyan",
    "gray",
    "blue",
    "indigo",
    "purple",
    "red",
    "orange",
    "yellow",
    "green",
    "teal",
    "cyan",
    "gray",
    "blue",
    "indigo",
    "purple",
    "red",
    "orange",
    "yellow",
    "green",
    "teal",
    "cyan",
    "gray",
    "red",
    "orange",
    "yellow",
    "blue",
    "indigo",
    "purple",
    "red",
    "orange",
    "yellow"
  ],
};

export const stateReducer: Reducer<IMainState, MainActions> = (
  state = initialState,
  action
): IMainState => {
  switch (action.type) {
    case GetDataTypes.GETDATA: {
      action.data.articles.map((elem: any, i: number) => (elem.source.id = i));
      return {
        ...state,
        titlepageNews: action.data,
      };
    }

    case GetEntertainmentTypes.GETENTERTAINMENT: {
      action.data.articles.map((elem: any, i: number) => (elem.source.id = i));
      return {
        ...state,
        entertainmentNews: action.data,
      };
    }

    case isLoadingTypes.LOADING: {
      return {
        ...state,
      };
    }

    case GetTrendingTypes.GETTRENDING: {
      action.data.articles.map((elem: any, i: number) => (elem.source.id = i));
      return {
        ...state,
        trendingNews: action.data,
      };
    }

    case GetTechTypes.GETTECH: {
      action.data.articles.map((elem: any, i: number) => (elem.source.id = i));
      return {
        ...state,
        techNews: action.data,
      };
    }

    case GetBusinessTypes.GETBUSINESS: {
      action.data.articles.map((elem: any, i: number) => (elem.source.id = i));
      return {
        ...state,
        businessNews: action.data,
      };
    }

    case GetScienceTypes.GETSCIENCE: {
      action.data.articles.map((elem: any, i: number) => (elem.source.id = i));
      return {
        ...state,
        scienceNews: action.data,
      };
    }

    case GetHealthTypes.GETHEALTH: {
      action.data.articles.map((elem: any, i: number) => (elem.source.id = i));
      return {
        ...state,
        healthNews: action.data,
      };
    }

    case GetSportTypes.GETSPORT: {
      action.data.articles.map((elem: any, i: number) => (elem.source.id = i));
      return {
        ...state,
        sportNews: action.data,
      };
    }

    case GetHeadlineNewsTypes.GETHEADLINENEWS: {
      action.data.articles.map((elem: any, i: number) => (elem.source.id = i));
      return {
        ...state,
        headlineNews: action.data,
      };
    }

    case GetShowFullArticleTypes.GETSHOWFULLARTICLE: {
      return {
        ...state,
      };
    }
      
    case GetWindowPositionTypes.GETWINDOWPOSITION: {
      return {
        ...state,
      };
    }

    default:
      return state;
  }
};
