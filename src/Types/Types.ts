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

export enum RadioPlayTypes {
  RADIOPLAY = "RADIOPLAY",
}

export enum RadioPauseTypes {
  RADIOPAUSE = "RADIOPAUSE",
}

export enum RadioMuteTypes {
  RADIOMUTE = "RADIOMUTE",
}

export enum RadioMuteOffTypes {
  RADIOMUTEOFF = "RADIOMUTEOFF",
}

export enum changeVolumeRadioTypes {
  CHANGEVOLUMERADIO = "CHANGEVOLUMERADIO",
}



/* interfaces */
export interface IChangeVolumeRadioAction {
  type: changeVolumeRadioTypes.CHANGEVOLUMERADIO;
}

export interface IRadioMuteOffAction {
  type: RadioMuteOffTypes.RADIOMUTEOFF;
  value: boolean;
}


export interface IRadioMuteAction {
  type: RadioMuteTypes.RADIOMUTE
  value: boolean;
}

export interface IRadioPauseAction {
  type: RadioPauseTypes.RADIOPAUSE;
  value: boolean;
}


export interface IRadioPlayAction {
  type: RadioPlayTypes.RADIOPLAY;
  value: boolean;
  timeGoOn: any;
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
  |IChangeVolumeRadioAction
  |IRadioMuteOffAction
  |IRadioMuteAction
  |IRadioPauseAction
  |IRadioPlayAction
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


export interface RouteParams {
  id: string;
}