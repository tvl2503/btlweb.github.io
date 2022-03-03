import { Method } from "axios";

export interface PropsObject <T> {
    [props: string]: T
}

export interface AxiosConfigParams {
    url: string;
    body?: PropsObject<any>;
    params?: PropsObject<any>;
    headers?: PropsObject<any>;
    method?: Method;
    token?: string
}