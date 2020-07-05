export enum toggleMenu {
  TOGGLEMENU = "TOGGLEMENU",
}
export enum GetDataTypes {
  GETDATA = "GETDATA",
}
export enum GetEntertainmentTypes {
  GETENTERTAINMENT = "GETENTERTAINMENT",
}

export enum isLoadingTypes {
  LOADING = "LOADING",
}
export enum GetTrendingTypes {
  GETTRENDING = "GETTRENDING",
}
export enum GetTechTypes {
  GETTECH = "GETTECH",
}
export enum GetBusinessTypes {
  GETBUSINESS = "GETBUSINESS",
}
export enum GetSportTypes {
  GETSPORT = "GETSPORT",
}
export enum GetHeadlineNewsTypes {
  GETHEADLINENEWS = "GETHEADLINENEWS",
}
export enum GetHealthTypes {
  GETHEALTH = "GETHEALTH",
}
export enum GetScienceTypes {
  GETSCIENCE = "GETSCIENCE",
}

export enum GetSidebarTypes {
  GETSIDEBAR = "GETSIDEBAR",
}

export enum GetPublisherPageTypes {
  GETPUBLISHERPAGE = "GETPUBLISHERPAGE",
}


export enum GetShowFullArticleTypes {
  GETSHOWFULLARTICLE = "GETSHOWFULLARTICLE",
}

export enum GetShowSidebarArticleTypes {
  GETSHOWSIDEBARARTICLE = "GETSHOWSIDEBARARTICLE",
}

export enum ArrowLeftTypes {
  ARROWLEFT = "ARROWLEFT",
}

export enum ArrowRightTypes {
  ARROWRIGHT = "ARROWRIGHT",
}

export enum GetRaioNewsTypes {
  GETRADIONEWS = "GETRADIONEWS",
}

export enum toggleRadioPlayTypes {
  TOGGLERADIOPLAY = "TOGGLERADIOPLAY",
}

/* interfaces */
export interface ItoggleRadioPlayAction {
  type: toggleRadioPlayTypes.TOGGLERADIOPLAY
}

export interface IGetRaioNewsAction {
  type: GetRaioNewsTypes.GETRADIONEWS;
  data: any;
}

export interface IArrowLeftAction {
  type: ArrowLeftTypes.ARROWLEFT;
  nextId: any;
}

export interface IArrowRightAction {
  type: ArrowRightTypes.ARROWRIGHT;
  nextId: any;
}

export interface IGetShowSidebarArticleAction {
  type: GetShowSidebarArticleTypes.GETSHOWSIDEBARARTICLE;
}

export interface IGetShowFullArticleAction {
  type: GetShowFullArticleTypes.GETSHOWFULLARTICLE;
}

export interface IPublisherPageAction {
  type: GetPublisherPageTypes.GETPUBLISHERPAGE;
}


export interface IScienceAction {
  type: GetHealthTypes.GETHEALTH;
  data: IData | null;
}
export interface ISidebarAction {
  type: GetSidebarTypes.GETSIDEBAR;
  data: IData | null;
}
export interface IHealthAction {
  type: GetScienceTypes.GETSCIENCE;
  data: IData | null;
}
export interface IHeadlineNewsAction {
  type: GetHeadlineNewsTypes.GETHEADLINENEWS;
  data: IData | null;
}
export interface ISportAction {
  type: GetSportTypes.GETSPORT;
  data: IData | null;
}
export interface IBusinessAction {
  type: GetBusinessTypes.GETBUSINESS;
  data: IData | null;
}
export interface ITechAction {
  type: GetTechTypes.GETTECH;
  data: IData | null;
}
export interface ITrendingAction {
  type: GetTrendingTypes.GETTRENDING;
  data: IData | null;
}
export interface ILoadingAction {
  type: isLoadingTypes.LOADING;
}
export interface IToggleMenuAction {
  type: toggleMenu.TOGGLEMENU;
}

export interface IGetDataAction {
  type: GetDataTypes.GETDATA;
  data: IData | null;
}

export interface IGetEntertainmentAction {
  type: GetEntertainmentTypes.GETENTERTAINMENT;
  data: IData | null;
}

export type MainActions =
  |ItoggleRadioPlayAction
  |IGetRaioNewsAction
  | IToggleMenuAction
  | IGetDataAction
  | ILoadingAction
  | ITrendingAction
  | ITechAction
  | IBusinessAction
  | ISportAction
  | IHeadlineNewsAction
  | IHealthAction
  | ISidebarAction
  | IScienceAction
  | IGetShowFullArticleAction
  | IPublisherPageAction
  | IArrowLeftAction
  | IArrowRightAction
  | IGetShowSidebarArticleAction
  | IGetEntertainmentAction;

export interface IMainState {
 titlepageNews: IData | null;
 entertainmentNews: IData | null;
 sidebarNews: IData | null;
 trendingNews: IData | null;
 techNews: IData | null;
 businessNews: IData | null;
 sportNews: IData | null;
 headlineNews: IData | null;
 healthNews: IData | null;
 scienceNews: IData | null;
 colors: string[];
 currentId: number;
  keyApi: string;
}



export interface IData {
  articles: IDataDescription[];
  status: string;
  totalResults: number;
}

export interface IDataDescription {
  author: string;
  content: string;
  description: string;
  publishedAt: string;
  source: ISource;
  title: string;
  url: string;
  urlToImage: string;
}

export interface ISource {
  id: number;
  name: string;
}
