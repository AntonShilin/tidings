import { BadConnectionTypes, IBadConnectionAction, ITitle } from "./../Types/Types";
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
  GetPublisherPageTypes,
  GetShowSidebarArticleTypes,
  GetSidebarTypes,
  ArrowLeftTypes,
  ArrowRightTypes,
  ILoadingAction,
  IToggleMenuAction,
  IPublisherPageAction,
  IGetShowSidebarArticleAction,
  IArrowLeftAction,
  IArrowRightAction,
  GetRaioNewsTypes,
  RadioPlayTypes,
  RadioPauseTypes,
  RadioMuteTypes,
  RadioMuteOffTypes,
  changeVolumeRadioTypes,
} from "../Types/Types";
import { Dispatch } from "redux";


const errorCoonnectionWithServer = (value: boolean): IBadConnectionAction => {
  return {
    type: BadConnectionTypes.BADCONNECTION,
    value,
  };
};

export const getData = () => {
  return (dispatch: Dispatch) => {
    fetch(`https://gnews.io/api/v4/search?q=example&token=bb1a0ecaa894c9f6d34ce1d0f534ffe7`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          errorCoonnectionWithServer(true);
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
        errorCoonnectionWithServer(true);
        throw new Error("HTTP error, status = " + err);
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

export const getSidebarNews = (news: ITitle | null) => {
  return {
    type: GetSidebarTypes.GETSIDEBAR,
    data: news,
  }
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
export const clickToLeftArrow = (
  currentId: number,
  length: number
): IArrowLeftAction => {
  return {
    type: ArrowLeftTypes.ARROWLEFT,
    nextId: currentId,
  };
};

/*slider: arrow-right */
export const clickToRightArrow = (
  currentId: number,
  length: number
): IArrowRightAction => {
  return {
    type: ArrowRightTypes.ARROWRIGHT,
    nextId: currentId,
  };
};

/*  get radio news*/
export const getRadioNews = () => {
  return (dispatch: Dispatch) => {
    fetch(
      "https://coderadio-admin.freecodecamp.org/api/live/nowplaying/coderadio",
      {
        method: "GET",
      }
    )
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
    value: false,
  };
};

/* pause in play radio */
export const playRadioPause = (e: any) => {
  e.pause();
  return {
    type: RadioPauseTypes.RADIOPAUSE,
    value: true,
  };
};

/* mute on  radio play*/
export const setRadioMuteOn = (e: any) => {
  e.volume = 0;
  return {
    type: RadioMuteTypes.RADIOMUTE,
    value: true,
  };
};

/* mute off  radio play*/
export const setRadioMuteOff = (e: any) => {
  e.volume = 1;
  return {
    type: RadioMuteOffTypes.RADIOMUTEOFF,
    value: false,
  };
};

/* mute off  radio play*/
export const changeVolumeRadio = (e: any, elem: any, arr: any) => {
  for (let i = 0; i <= arr[0].children.length - 1; i++) {
    if (i <= e.target.dataset.id) {
      arr[0].children[i].style.backgroundColor = "lightblue";
    } else {
      arr[0].children[i].style.backgroundColor = "white";
    }
  }

  elem.volume = e.target.dataset.volume;
  return {
    type: changeVolumeRadioTypes.CHANGEVOLUMERADIO,
  };
};
