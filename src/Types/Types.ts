export enum GetDataTypes {
  GETDATA = "GETDATA",
}
export enum GetEntertainmentTypes {
  GETENTERTAINMENT = "GETENTERTAINMENT",
}

export enum isLoadingTypes {
  LOADING = "LOADING",
}

/* interfaces */
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
  | IGetEntertainmentAction;

export interface IMainState {
  readonly data: any;
  readonly entertainment: any;
}
