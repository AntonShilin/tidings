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
  GetPublisherPageTypes,
  GetShowSidebarArticleTypes,
  GetSidebarTypes,
  ArrowLeftTypes,
  ArrowRightTypes,
} from "../Types/Types";
import { Reducer } from "react";

const initialState: IMainState = {
  titlepageNews: null,
  entertainmentNews: null,
  sidebarNews: null,
  trendingNews: null,
  techNews: null,
  businessNews: null,
  sportNews: null,
  headlineNews: null,
  healthNews: null,
  scienceNews: null,
  images: [
  ],
  keyApi: "3e174a1555d74566bf991d0c5a205679",
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
    "yellow",
  ],
};

export const stateReducer: Reducer<IMainState, MainActions> = (
  state = initialState,
  action
): IMainState => {
  switch (action.type) {
    case GetDataTypes.GETDATA: {
      action.data.articles.map((elem: any, i: number) => {
        elem.source.id = i;
        if (elem.urlToImage !== null) {
          state.images.push({urlToImage: elem.urlToImage,title:elem.title });
        }
      });
      return {
        ...state,
        titlepageNews: action.data,
        images: state.images,
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

    case GetSidebarTypes.GETSIDEBAR: {
      action.data.articles.map((elem: any, i: number) => (elem.source.id = i));
      return {
        ...state,
        sidebarNews: action.data,
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

    case GetPublisherPageTypes.GETPUBLISHERPAGE: {
      return {
        ...state,
      };
    }

    case GetShowSidebarArticleTypes.GETSHOWSIDEBARARTICLE: {
      return {
        ...state,
      };
    }

    case ArrowLeftTypes.ARROWLEFT: {
      return {
        ...state,
        images: action.newArr,
      };
    }

    case ArrowRightTypes.ARROWRIGHT: {
      return {
        ...state,
        images: action.newArr,
      };
    }

    default:
      return state;
  }
};
