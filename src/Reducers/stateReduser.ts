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
  images: ['https://previews.123rf.com/images/zerbor/zerbor1503/zerbor150300073/37603790-a-newspaper-with-the-headline-travel-news.jpg',
    'https://media4.s-nbcnews.com/i/newscms/2019_01/2705191/nbc-social-default_b6fa4fef0d31ca7e8bc7ff6d117ca9f4.png',
    'https://learnbonds.com/wp-content/images/2019/05/Marketplace-Lending-News.jpg',
    'https://naurok-test.nyc3.digitaloceanspaces.com/154334/images/392639_1585311046.jpg',
    'https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Falejandrocremades%2Ffiles%2F2018%2F07%2Fdesk-3139127_1920-1200x773.jpg',
    'https://www.djaxtech.com/blog/wp-content/uploads/2018/07/ad-tech-world.jpg',
  'https://www.sr-sv.com/wp-content/uploads/2019/06/NLP_0000.jpg'
  ],
  keyApi :'06ed45fec1804ae5b92a9bca80073917',
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
        if (elem.urlToImage!==null) {
          state.images.push(elem.urlToImage);
        }
      });
      return {
        ...state,
        titlepageNews: action.data,
        images:state.images
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
