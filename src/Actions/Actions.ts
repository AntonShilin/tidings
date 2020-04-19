import { GetDataTypes, isLoadingTypes, GetEntertainmentTypes, GetTrendingTypes, GetTechTypes, GetBusinessTypes, GetSportTypes, GetHeadlineNewsTypes, toggleMenu, GetHealthTypes, GetScienceTypes, GetShowFullArticleTypes } from "../Types/Types";
import { Dispatch} from "redux";

export const getData = (url: string) => {
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

export const getScience = (url: string) => {
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
          type: GetScienceTypes.GETSCIENCE,
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

export const getHealth = (url: string) => {
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
          type: GetHealthTypes.GETHEALTH,
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
  elem.classList.toggle("show");
  return {
    type: toggleMenu.TOGGLEMENU,
  };
}

export const showFullArticleInfo = (id: number, url: any) => {
  console.log("Aaa")
  url.history.push(`${url.match.url}/${id}`);
   url.match.params.id = id; 
  return {
    type: GetShowFullArticleTypes.GETSHOWFULLARTICLE
  };
}