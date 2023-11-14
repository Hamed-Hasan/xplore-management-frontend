export interface iMeta {
  limit: number;
  page: number;
  total: number;
}

export type TResponseSuccessType = {
  data: any;
  meta?: iMeta;
};

export type TGenericErrorResponse = {
  statusCode: number;
  message: string;
  errorMessages: TGenericErrorMessage[];
};

export type TGenericErrorMessage = {
  path: string | number;
  message: string;
};
