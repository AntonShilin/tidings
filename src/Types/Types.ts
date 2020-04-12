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

/* interfaces */
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
  |IHeadlineNewsAction
  | IGetEntertainmentAction;

export interface IMainState {
  readonly data: any;
  readonly entertainmentNews: any;
  readonly trendingNews: any;
  readonly techNews: any;
  readonly businessNews: any;
  readonly sportNews: any;
  readonly headlineNews: any;
  readonly colors: string[];
}
