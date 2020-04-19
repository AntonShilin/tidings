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
  GETBUSINESS= "GETBUSINESS",
}
export enum GetSportTypes {
  GETSPORT= "GETSPORT",
}
export enum GetHeadlineNewsTypes {
  GETHEADLINENEWS= "GETHEADLINENEWS",
}
export enum GetHealthTypes {
  GETHEALTH= "GETHEALTH",
}
export enum GetScienceTypes {
  GETSCIENCE= "GETSCIENCE",
}
export enum GetWindowPositionTypes {
  GETWINDOWPOSITION= "GETWINDOWPOSITION",
}
export enum GetShowFullArticleTypes {
  GETSHOWFULLARTICLE= "GETSHOWFULLARTICLE",
}


/* interfaces */
export interface IGetShowFullArticleAction {
  type:GetShowFullArticleTypes.GETSHOWFULLARTICLE
}

export interface IWindowPositionAction {
  type: GetWindowPositionTypes.GETWINDOWPOSITION
}

export interface IScienceAction {
  type:GetHealthTypes.GETHEALTH;
  data: any;
}
export interface IHealthAction {
  type:GetScienceTypes.GETSCIENCE;
  data: any;
}
export interface IHeadlineNewsAction {
  type:GetHeadlineNewsTypes.GETHEADLINENEWS;
  data: any;
}
export interface ISportAction {
  type: GetSportTypes.GETSPORT;
  data: any;
}
export interface IBusinessAction {
  type: GetBusinessTypes.GETBUSINESS;
  data: any;
}
export interface ITechAction {
  type: GetTechTypes.GETTECH;
  data: any;
}
export interface ITrendingAction {
  type: GetTrendingTypes.GETTRENDING;
  data: any;
}
export interface ILoadingAction {
  type: isLoadingTypes.LOADING;
}
export interface IToggleMenuAction {
  type: toggleMenu.TOGGLEMENU;
}

export interface IGetDataAction {
  type: GetDataTypes.GETDATA;
  data: any;
}

export interface IGetEntertainmentAction {
  type: GetEntertainmentTypes.GETENTERTAINMENT;
  data: any;
}

export type MainActions =
  |IToggleMenuAction
  | IGetDataAction
  | ILoadingAction
  | ITrendingAction
    | ITechAction
    | IBusinessAction
  | ISportAction
  | IHeadlineNewsAction
  | IHealthAction
  | IScienceAction
  | IGetShowFullArticleAction
  |IWindowPositionAction
  | IGetEntertainmentAction;

export interface IMainState {
  readonly titlepageNews: any;
  readonly entertainmentNews: any;
  readonly trendingNews: any;
  readonly techNews: any;
  readonly businessNews: any;
  readonly sportNews: any;
  readonly headlineNews: any;
  readonly healthNews: any;
  readonly scienceNews: any;
  readonly colors: string[];
}
