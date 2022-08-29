import { ReactElement } from "react";

export interface INPUT_STORAGE {
  readonly key: string;
  value?: unknown;
}

export interface INPUT_REACT_ELEMENT {
  children: ReactElement;
}

export interface INPUT_PAGINATION {
  page: number;
  size: number;
}

export interface INPUT_REQUEST_PROPS {
  id?: number;
  params?: object;
  pagination?: INPUT_PAGINATION;
  filters?: object;
  path?: string;
  body?: object;
}

export interface INPUT_PAYLOAD {
  navigate: object;
  body: object;
}

export interface INPUT_AUTH_STATE {
  isLoading: boolean;
  isReady: boolean;
  data: object | null;
  error: string | null;
}

export interface INPUT_RESPONSE_AUTH {
  access_token: string;
  refresh_token: string;
  token_type: string;
  authorities?: object;
  organization?: object;
  user?: object;
}
