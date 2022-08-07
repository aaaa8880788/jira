import type { Axios, AxiosRequestConfig,AxiosResponse } from "axios";

interface CDRequestInterceptors<T = AxiosResponse> {
    requestInterceptor?:(config:AxiosRequestConfig)=> AxiosRequestConfig
    requestInterceptorsCatch?:(err:any)=> any
    responseInterceptor?:(res:T)=> T
    responseInterceptorCatch?:(err:any) => any
}

interface CDRequestConfig<T=AxiosResponse> extends AxiosRequestConfig {
    interceptors?:CDRequestInterceptors<T>
}

export type{
    CDRequestInterceptors,
    CDRequestConfig
}