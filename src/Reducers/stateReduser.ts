import { BadConnectionTypes } from './../Types/Types';
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
  GetPublisherPageTypes,
  GetShowSidebarArticleTypes,
  GetSidebarTypes,
  ArrowLeftTypes,
  ArrowRightTypes,
  IDataDescription,
} from "../Types/Types";

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
  currentId: 0,
  keyApi: "20f3c47ba88f40959e5c50ebf472a722",
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
  ],
  serverUnconnected: false
};

export const stateReducer = (
  state: IMainState = initialState,
  action: MainActions
): IMainState => {
  switch (action.type) {
    case GetDataTypes.GETDATA: {
      action.data!.articles.map(
        (elem: IDataDescription, i: number) => (elem.source.id = i)
      );

      return {
        ...state,
        titlepageNews: action.data,
      };
    }

    case GetEntertainmentTypes.GETENTERTAINMENT: {
      action.data!.articles.map(
        (elem: IDataDescription, i: number) => (elem.source.id = i)
      );
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
      action.data!.articles.map(
        (elem: IDataDescription, i: number) => (elem.source.id = i)
      );
      return {
        ...state,
        trendingNews: action.data,
      };
    }

    case GetTechTypes.GETTECH: {
      action.data!.articles.map(
        (elem: IDataDescription, i: number) => (elem.source.id = i)
      );
      return {
        ...state,
        techNews: action.data,
      };
    }

    case GetBusinessTypes.GETBUSINESS: {
      action.data!.articles.map(
        (elem: IDataDescription, i: number) => (elem.source.id = i)
      );
      return {
        ...state,
        businessNews: action.data,
      };
    }

    case GetScienceTypes.GETSCIENCE: {
      action.data!.articles.map(
        (elem: IDataDescription, i: number) => (elem.source.id = i)
      );
      return {
        ...state,
        scienceNews: action.data,
      };
    }

    case GetSidebarTypes.GETSIDEBAR: {
      action.data!.articles.map(
        (elem: IDataDescription, i: number) => (elem.source.id = i)
      );
      return {
        ...state,
        sidebarNews: action.data,
      };
    }

    case GetHealthTypes.GETHEALTH: {
      action.data!.articles.map(
        (elem: IDataDescription, i: number) => (elem.source.id = i)
      );
      return {
        ...state,
        healthNews: action.data,
      };
    }

    case GetSportTypes.GETSPORT: {
      action.data!.articles.map((elem: any, i: number) => (elem.source.id = i));
      return {
        ...state,
        sportNews: action.data,
      };
    }

    case GetHeadlineNewsTypes.GETHEADLINENEWS: {
      action.data!.articles.map(
        (elem: IDataDescription, i: number) => (elem.source.id = i)
      );
      return {
        ...state,
        headlineNews: action.data,
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
      let num:number = action.nextId;
      if (num <= 0) {
        num = state.titlepageNews!.articles.length-1;
      } else {
        --num;
      }

      return {
        ...state,
        currentId: num,
      };
    }

    case ArrowRightTypes.ARROWRIGHT: {
      let num:number =  action.nextId;
      if (num >= state.titlepageNews!.articles.length-1) {
        num = 0;
      } else {
        ++num;
      }

      return {
        ...state,
        currentId:num,
      };
    }
      
    case BadConnectionTypes.BADCONNECTION: {
      return {
        ...state,
        serverUnconnected:action.value
      }
      }

    default:
      return state;
  }
};
