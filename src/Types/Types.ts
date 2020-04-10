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

/* interfaces */
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

export interface IGetDataAction {
  type: GetDataTypes.GETDATA;
  data: any;
}

export interface IGetEntertainmentAction {
  type: GetEntertainmentTypes.GETENTERTAINMENT;
  data: any;
}

export type MainActions =
  | IGetDataAction
  | ILoadingAction
  | ITrendingAction
  | ITechAction
  | IGetEntertainmentAction;

export interface IMainState {
  readonly data: any;
  readonly entertainment: any;
  readonly trendingNews: any;
  readonly techNews: any;
}
