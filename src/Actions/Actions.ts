import {
  GetDataTypes,
  isLoadingTypes,
  GetEntertainmentTypes,
  GetTrendingTypes,
  GetTechTypes,
  GetBusinessTypes,
  GetSportTypes,
  GetHeadlineNewsTypes,
  toggleMenu,
  GetHealthTypes,
  GetScienceTypes,
  GetShowFullArticleTypes,
  GetPublisherPageTypes,
  GetShowSidebarArticleTypes,
  GetSidebarTypes,
  ArrowLeftTypes,
  ArrowRightTypes,
  ILoadingAction,
  IToggleMenuAction,
  IGetShowFullArticleAction,
  IPublisherPageAction,
  IGetShowSidebarArticleAction,
  IArrowLeftAction,
  IArrowRightAction,
  GetRaioNewsTypes,
  RadioPlayTypes,
  RadioPauseTypes,
} from "../Types/Types";
import { Dispatch } from "redux";
import { RouteComponentProps } from "react-router-dom";

export const getData = (url: string) => {
  return (dispatch: Dispatch) => {
    fetch(url, {
      method: "GET",
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("HTTP error, status = " + response.status);
        }
      })
      .then((news) => {
        dispatch({
          type: GetDataTypes.GETDATA,
          data: news,
        });
      })
      .catch((err) => {
        throw new Error(err);
      });
  };
};

export const getEntertainment = (url: string) => {
  return (dispatch: Dispatch) => {
    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("HTTP error, status = " + response.status);
        }
      })
      .then((news) =>
        dispatch({
          type: GetEntertainmentTypes.GETENTERTAINMENT,
          data: news,
        })
      )
      .catch((err) => {
        throw new Error(err);
      });
  };
};

export const getScience = (url: string) => {
  return (dispatch: Dispatch) => {
    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("HTTP error, status = " + response.status);
        }
      })
      .then((news) =>
        dispatch({
          type: GetScienceTypes.GETSCIENCE,
          data: news,
        })
      )
      .catch((err) => {
        throw new Error(err);
      });
  };
};

export const getTrending = (url: string) => {
  return (dispatch: Dispatch) => {
    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("HTTP error, status = " + response.status);
        }
      })
      .then((news) =>
        dispatch({
          type: GetTrendingTypes.GETTRENDING,
          data: news,
        })
      )
      .catch((err) => {
        throw new Error(err);
      });
  };
};

export const getTech = (url: string) => {
  return (dispatch: Dispatch) => {
    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("HTTP error, status = " + response.status);
        }
      })
      .then((news) =>
        dispatch({
          type: GetTechTypes.GETTECH,
          data: news,
        })
      )
      .catch((err) => {
        throw new Error(err);
      });
  };
};

export const getBusiness = (url: string) => {
  return (dispatch: Dispatch) => {
    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("HTTP error, status = " + response.status);
        }
      })
      .then((news) =>
        dispatch({
          type: GetBusinessTypes.GETBUSINESS,
          data: news,
        })
      )
      .catch((err) => {
        throw new Error(err);
      });
  };
};

export const getSport = (url: string) => {
  return (dispatch: Dispatch) => {
    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("HTTP error, status = " + response.status);
        }
      })
      .then((news) =>
        dispatch({
          type: GetSportTypes.GETSPORT,
          data: news,
        })
      )
      .catch((err) => {
        throw new Error(err);
      });
  };
};

export const getNews = (url: string) => {
  return (dispatch: Dispatch) => {
    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("HTTP error, status = " + response.status);
        }
      })
      .then((news) =>
        dispatch({
          type: GetHeadlineNewsTypes.GETHEADLINENEWS,
          data: news,
        })
      )
      .catch((err) => {
        throw new Error(err);
      });
  };
};

export const getHealth = (url: string) => {
  return (dispatch: Dispatch) => {
    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("HTTP error, status = " + response.status);
        }
      })
      .then((news) =>
        dispatch({
          type: GetHealthTypes.GETHEALTH,
          data: news,
        })
      )
      .catch((err) => {
        throw new Error(err);
      });
  };
};

export const getSidebarNews = (url: string) => {
  return (dispatch: Dispatch) => {
    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("HTTP error, status = " + response.status);
        }
      })
      .then((news) =>
        dispatch({
          type: GetSidebarTypes.GETSIDEBAR,
          data: news,
        })
      )
      .catch((err) => {
        throw new Error(err);
      });
  };
};

const loading = (): ILoadingAction => {
  return {
    type: isLoadingTypes.LOADING,
  };
};

export const toggleSmallScreenMenu = (
  e: React.MouseEvent,
  elem: HTMLDivElement
): IToggleMenuAction => {
  elem.classList.toggle("show");
  return {
    type: toggleMenu.TOGGLEMENU,
  };
};

export const showFullArticleInfo = (
  id: number,
  url: any
): IGetShowFullArticleAction => {
  url.history.push(`${url.match.url}/${id}`);
  url.match.params.id = id;
  return {
    type: GetShowFullArticleTypes.GETSHOWFULLARTICLE,
  };
};

export const goToPublisherPage = (adress: string): IPublisherPageAction => {
  if (window.confirm("Are your sure go to publisher page?") === true) {
    window.open(adress);
  }
  return {
    type: GetPublisherPageTypes.GETPUBLISHERPAGE,
  };
};

export const showSidebarArticleInfo = (
  id: number,
  url: any
): IGetShowSidebarArticleAction => {
  url.history.push(`rightsidebar/${id}`);
  url.match.params.id = id;
  return {
    type: GetShowSidebarArticleTypes.GETSHOWSIDEBARARTICLE,
  };
};

/*slider: arrow-left */
export const clickToLeftArrow = (currentId:number,length: number):IArrowLeftAction => {
  return {
    type: ArrowLeftTypes.ARROWLEFT,
    nextId: currentId,
  };
};

/*slider: arrow-right */
export const clickToRightArrow = (currentId:number,length: number): IArrowRightAction => {
  return {
    type: ArrowRightTypes.ARROWRIGHT,
    nextId: currentId,
  };
};

/*  get radio news*/
export const getRadioNews = () => {
  return (dispatch: Dispatch) => {
    fetch("https://coderadio-admin.freecodecamp.org/api/live/nowplaying/coderadio", {
      "method": "GET",
    })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("HTTP error, status = " + response.status);
      }
    })
      .then((news) =>
        dispatch({
          type: GetRaioNewsTypes.GETRADIONEWS,
          data: news,
        })
      )
      .catch((err) => {
        throw new Error(err);
      });
  };
};

/* on play radio */
export const playRadioOn = (e: any) => {
  e.play();
  return {
    type: RadioPlayTypes.RADIOPLAY,
    value: false
  }
} 


/* pause in play radio */
export const playRadioPause = (e: any) => {
  e.pause();
  return {
    type: RadioPauseTypes.RADIOPAUSE,
    value: true
  }
} 

