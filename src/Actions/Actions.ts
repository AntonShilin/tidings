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
  GetWindowPositionTypes,
  GetPublisherPageTypes,
  GetShowSidebarArticleTypes,
  GetSidebarTypes,
  ArrowLeftTypes,
  ArrowRightTypes,
} from "../Types/Types";
import { Dispatch } from "redux";

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
          data: news,
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
          data: news,
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
          data: news,
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
          data: news,
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
          data: news,
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
          data: news,
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
          data: news,
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
          data: news,
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
          data: news,
        })
      );
  };
};

export const getSidebarNews = (url: string) => {
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
          type: GetSidebarTypes.GETSIDEBAR,
          data: news,
        })
      );
  };
};

const loading = () => {
  return {
    type: isLoadingTypes.LOADING,
  };
};

export const toggleSmallScreenMenu = (
  e: React.MouseEvent,
  elem: HTMLDivElement
) => {
  elem.classList.toggle("show");
  return {
    type: toggleMenu.TOGGLEMENU,
  };
};

export const showFullArticleInfo = (id: number, url: any) => {
  url.history.push(`${url.match.url}/${id}`);
  url.match.params.id = id;
  return {
    type: GetShowFullArticleTypes.GETSHOWFULLARTICLE,
  };
};

export const fixedSmallScreenMenu = (num: number, elem: HTMLDivElement) => {
  elem.style.transform = "translateY(" + num + "px)";
  elem.style.zIndex = "5";
  return {
    type: GetWindowPositionTypes.GETWINDOWPOSITION,
  };
};

export const goToPublisherPage = (adress: string) => {
  if (window.confirm("Are your sure go to publisher page?") === true) {
    window.open(adress);
  }
  return {
    type: GetPublisherPageTypes.GETPUBLISHERPAGE,
  };
};

export const showSidebarArticleInfo = (id: number, url: any) => {
  url.history.push(`rightsidebar/${id}`);
  url.match.params.id = id;
  return {
    type: GetShowSidebarArticleTypes.GETSHOWSIDEBARARTICLE,
  };
};

/*slider: arrow-left */
export const clickToLeftArrow = (elem: any, allImages: any) => {
  // 2 images in slider 
  const currentArray = Array.prototype.slice.call(elem.children, 0); 
  // delete 2 current images
  currentArray[0].remove();
  currentArray[1].remove();

  /* delete [0] elem and add into end of array */
  console.log("Old array", allImages);
  const removeElemOfArray1: string[] = allImages.splice(0,1);
  console.log("Cute elem", removeElemOfArray1);
  allImages.push(removeElemOfArray1[0]);
  console.log("Новый массив ", allImages);

/* ------------------- */

/* create new img[0]  */
  const div0: HTMLDivElement = document.createElement("div");
  const img0: HTMLImageElement = document.createElement("img");
  img0.setAttribute("src", allImages[1]);
  div0.append(img0);
  elem.prepend(div0);
  console.log(currentArray);
/* -------------- */
  

  /* create new img[1]  */
  const div1: HTMLDivElement = document.createElement("div");
  const img1: HTMLImageElement = document.createElement("img");
  img1.setAttribute("src", allImages[0]);
  div1.append(img1);
  elem.prepend(div1);
  console.log(currentArray);
/* -------------- */

  return {
    type: ArrowLeftTypes.ARROWLEFT,
    newArr: allImages,
  };
};



/*slider: arrow-right */
export const clickToRightArrow = (elem: any, allImages: any) => {
// 2 images in slider 
  const currentArray = Array.prototype.slice.call(elem.children, 0); 

  /*  delete last element and add into beginning of array  */
  console.log("Old array", allImages);
  const removeElemOfArray: string[] = allImages.pop();
  console.log("Cute elem", removeElemOfArray);
  allImages.unshift(removeElemOfArray);
  console.log("Новый массив ", allImages);
  /* ------------------- */

/* create new img[0] */
const div: HTMLDivElement = document.createElement("div");
  const img: HTMLImageElement = document.createElement("img");
  img.setAttribute("src", allImages[0]);
  div.append(img);
  elem.prepend(div);
  /* -------------- */

  // delete img[1]
  const timer = setTimeout(() => {
    currentArray[1].remove();
  }, 100);

  return {
    type: ArrowRightTypes.ARROWRIGHT,
    newArr: allImages,
  };
};
