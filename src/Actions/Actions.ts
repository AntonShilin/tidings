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
} from "../Types/Types";
import { Dispatch } from "redux";


export const getData = (url: string) => {
  return (dispatch: Dispatch) => {
    fetch(url, {
      method: "GET"
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
  const removeElemOfArray1: string[] = allImages.splice(0, 1);
  allImages.push(removeElemOfArray1[0]);

  /* create new img[0]  */
  const div0: HTMLDivElement = document.createElement("div");
  const img0: HTMLImageElement = document.createElement("img");
  const p0: HTMLDivElement = document.createElement("p");
  const mark0: HTMLElement = document.createElement("mark");
  p0.append(mark0);
  mark0.innerText = allImages[1].title;
  div0.append(p0);
  img0.setAttribute("src", allImages[1].urlToImage);
  div0.append(img0);
  elem.prepend(div0);

  /* create new img[1]  */
  const div1: HTMLDivElement = document.createElement("div");
  const img1: HTMLImageElement = document.createElement("img");
  const p1: HTMLDivElement = document.createElement("p");
  const mark1: HTMLElement = document.createElement("mark");
  p1.append(mark1);
  mark1.innerText = allImages[0].title;
  div1.append(p1);
  img1.setAttribute("src", allImages[0].urlToImage);
  div1.append(img1);
  elem.prepend(div1);

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
  const removeElemOfArray: string[] = allImages.pop();
  allImages.unshift(removeElemOfArray);

  /* create new img[0] */
  const div: HTMLDivElement = document.createElement("div");
  const img: HTMLImageElement = document.createElement("img");
  const p: HTMLDivElement = document.createElement("p");
  const mark: HTMLElement = document.createElement("mark");
  p.append(mark);
  mark.innerText = allImages[0].title;
  div.append(p);
  img.setAttribute("src", allImages[0].urlToImage);
  div.append(img);
  elem.prepend(div);

  // delete img[1]
  const timer = setTimeout(() => {
    currentArray[1].remove();
  }, 100);

  return {
    type: ArrowRightTypes.ARROWRIGHT,
    newArr: allImages,
  };
};
