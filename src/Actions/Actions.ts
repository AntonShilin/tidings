import { GetDataTypes, isLoadingTypes, GetEntertainmentTypes, GetTrendingTypes, GetTechTypes } from "../Types/Types";
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

const loading = () => {
  return {
    type: isLoadingTypes.LOADING,
  };
};
