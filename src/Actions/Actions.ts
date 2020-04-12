import { GetDataTypes, isLoadingTypes, GetEntertainmentTypes, GetTrendingTypes, GetTechTypes, GetBusinessTypes, GetSportTypes, GetHeadlineNewsTypes, toggleMenu } from "../Types/Types";
import { Dispatch } from "redux";

export const getData = (url: string) => {
  return (dispatch: Dispatch) => {
    dispatch(loading());
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response;
      })
      .then((response) => response.json())
      .then((news) =>
        dispatch({
          type: GetDataTypes.GETDATA,
          data: news
        })
      );
  };
};

export const getEntertainment = (url: string) => {
  return (dispatch: Dispatch) => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response;
      })
      .then((response) => response.json())
      .then((news) =>
        dispatch({
          type: GetEntertainmentTypes.GETENTERTAINMENT,
          data: news
        })
      );
  };
};

export const getTrending = (url: string) => {
  return (dispatch: Dispatch) => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response;
      })
      .then((response) => response.json())
      .then((news) =>
        dispatch({
          type: GetTrendingTypes.GETTRENDING,
          data: news
        })
      );
  };
};

export const getTech = (url: string) => {
  return (dispatch: Dispatch) => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response;
      })
      .then((response) => response.json())
      .then((news) =>
        dispatch({
          type: GetTechTypes.GETTECH,
          data: news
        })
      );
  };
};

export const getBusiness = (url: string) => {
  return (dispatch: Dispatch) => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response;
      })
      .then((response) => response.json())
      .then((news) =>
        dispatch({
          type: GetBusinessTypes.GETBUSINESS,
          data: news
        })
      );
  };
};

export const getSport = (url: string) => {
  return (dispatch: Dispatch) => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response;
      })
      .then((response) => response.json())
      .then((news) =>
        dispatch({
          type: GetSportTypes.GETSPORT,
          data: news
        })
      );
  };
};

export const getNews = (url: string) => {
  return (dispatch: Dispatch) => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response;
      })
      .then((response) => response.json())
      .then((news) =>
        dispatch({
          type: GetHeadlineNewsTypes.GETHEADLINENEWS,
          data: news
        })
      );
  };
};

const loading = () => {
  return {
    type: isLoadingTypes.LOADING,
  };
};

export const toggleSmallScreenMenu = (e:React.MouseEvent,elem: HTMLDivElement) => {
   console.log(elem)
  elem.classList.toggle("show");
  return {
    type: toggleMenu.TOGGLEMENU,
  };
}